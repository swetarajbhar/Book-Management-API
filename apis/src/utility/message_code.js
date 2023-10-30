const message = {
  find: {
    200: "Book Data Fetched Successfully",
    400: "Bad request",
    401: "Unauthorised",
    403: "Forbidden",
    404: "Book not found.",
    409: "Resource Conflict",
    500: "Internal server error",
  },
  save: {
    200: "Book Data Saved Successfully",
    400: "Bad request",
    401: "Unauthorised",
    403: "Forbidden",
    404: "Book not found.",
    409: "Book Title Already Exists",
    500: "Internal server error",
  },
  update: {
    200: "Book Data Updated Successfully",
    400: "Bad request",
    401: "Unauthorised",
    403: "Forbidden",
    404: "Book not found.",
    409: "Book Title Already Exists",
    500: "Internal server error",
  },
  delete: {
    200: "Book Deleted Successfully",
    400: "Bad request",
    401: "Unauthorised",
    403: "Forbidden",
    404: "Book not found.",
    409: "Resource Conflict",
    500: "Internal server error",
  },
};

module.exports = { message };
