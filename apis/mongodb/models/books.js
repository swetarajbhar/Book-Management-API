const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    author: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
    },
  },
  {
    timestamps: {
      createdAt: "created_at", //change createdAt -> created_at
      updatedAt: "updated_at", //change updatedAt -> updated_at
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const books = mongoose.model("books", BookSchema, "books");
module.exports = { books };
