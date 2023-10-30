const { createRespHeader } = require("../../../utility/createResponseHeader");
const { message } = require("../../../utility/message_code");
const {
  addBooksService,
  listBooksService,
  findBookService,
  updateBookService,
  deleteBookService,
} = require("../../services/books");

const addBooks = async (req, res, next) => {
  try {
    res.body = createRespHeader();
    const response = await addBooksService(req.body);
    const responseReceived = response ? 200 : 400;
    res.body.data = response;
    res.body.message = message.save[responseReceived];
    res.status(responseReceived).send({
      status: responseReceived,
      ...res.body,
    });
  } catch (error) {
    const errorResponse = error && error.code === 11000 ? 409 : 500;
    res.status(errorResponse).send({
      status: errorResponse,
      message: message.save[errorResponse],
    });
  }
};

const listBooks = async (req, res, next) => {
  try {
    res.body = createRespHeader();
    const response = await listBooksService(req.body);
    const responseReceived = response && response[0]?.rows.length ? 200 : 404;
    res.body.data = response;
    res.body.message = message.find[responseReceived];
    res.status(responseReceived).send({
      status: responseReceived,
      ...res.body,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: message.find[500],
    });
  }
};

const findBook = async (req, res, next) => {
  try {
    res.body = createRespHeader();
    const response = await findBookService(req.params.id);
    const responseReceived = response ? 200 : 404;
    res.body.data = response;
    res.body.message = message.find[responseReceived];
    res.status(responseReceived).send({
      status: responseReceived,
      ...res.body,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: message.find[500],
    });
  }
};

const updateBook = async (req, res, next) => {
  try {
    res.body = createRespHeader();
    const response = await updateBookService({
      id: req.params.id,
      ...req.body,
    });
    const responseReceived = response ? 200 : 404;
    res.body.data = response;
    res.body.message = message.update[responseReceived];
    res.status(responseReceived).send({
      status: responseReceived,
      ...res.body,
    });
  } catch (error) {
    const errorResponse = error && error.code === 11000 ? 409 : 500;
    res.status(errorResponse).send({
      status: errorResponse,
      message: message.save[errorResponse],
    });
  }
};

const deleteBook = async (req, res, next) => {
  try {
    res.body = createRespHeader();
    const response = await deleteBookService(req.params.id);
    const responseReceived = response ? 200 : 404;
    res.body.data = response;
    res.body.message = message.delete[responseReceived];
    res.status(responseReceived).send({
      status: responseReceived,
      ...res.body,
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: message.delete[500],
    });
  }
};

module.exports = {
  addBooks,
  listBooks,
  findBook,
  updateBook,
  deleteBook,
};
