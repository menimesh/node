import { DataTypes } from "sequelize";
import connection from "./index.js";

const User = connection.define(
  "User",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Automatically increments the user ID
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false, // Ensures email cannot be null
      unique: true, // Ensures email is unique in the table
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false, // Ensures password cannot be null
    },
  },
  {
    tableName: "user", // Name of the table in the database
    timestamps: false, // Disables timestamps if you don't need createdAt/updatedAt
  }
);

export default User;
