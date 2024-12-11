import bookmodel from "../models/bookmodel.js";
import { Op } from "sequelize";
export default class BookController {
  async addBook(req, res, imageName) {
    const data = await bookmodel.create({ ...req.body, image: imageName });
    console.log(data);
    if (data) {
      res.json(data);
    } else {
      res.json({ sucess: false, messgage: "error " });
    }
  }
  async getBookById(req, res, id) {
    const data = await bookmodel.findByPk(id);
    if (data) {
      res.json(data);
    } else {
      res.json({ sucess: false, message: "error" });
    }
  }
  async updateBook(req, res, id) {
    if (id) {
      req.body;
      const data = await bookmodel.update(req.body, {
        where: {
          id: id,
        },
      });
      if (data[0]) {
        res.json({ sucess: true, message: "Book sucessfully updated" });
      } else {
        res.json({ sucess: false, message: "couldnot update the book" });
      }
    } else {
      res.json({ sucess: false, message: "Id is not provided" });
    }
  }
  async deleteBook(req, res, id) {
    if (id) {
      const data = await bookmodel.destroy({
        where: {
          id: id,
        },
      });
      if (data) {
        res.json({ sucess: true, message: "sucessfully deleted" });
      } else {
        res.json({ sucess: false, message: "deleted unsucessfull" });
      }
    }
  }
  async searchBook(req, res) {
    const { q } = req.query;
    if (q) {
      const data = await bookmodel.findAll({
        where: {
          [Op.or]: {
            name: {
              [Op.like]: `%${q}%`,
            },
            author: {
              [Op.like]: `%${q}%`,
            },
          },
        },
      });
      res.json(data);
      console.log("data finded sucessfully");
    } else res.json({ sucess: false, message: "search string not provided" });
  }
}
