const yup = require("yup");

const BookSchema = yup.object().shape({
  title: yup.string().required("Title is required."),
  author: yup.string().required("Author is required"),
  summary: yup.string(),
});

module.exports = { BookSchema };
