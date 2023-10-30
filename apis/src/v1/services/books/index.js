const { books } = require("../../../../mongodb/models/books");

const addBooksService = async (bodyParams) => {
  try {
    return await books.create(bodyParams);
  } catch (error) {
    throw error;
  }
};

const listBooksService = async (params) => {
  try {
    let listOptions = {
      title: 1,
      author: 1,
      summary: 1,
    };

    const response = await books.aggregate([
      {
        $sort: {
          _id: -1,
        },
      },
      {
        $project: listOptions,
      },
      {
        $facet: {
          rows: [
            {
              $skip: params.offset,
            },
            {
              $limit: params.limit,
            },
          ],
          totalRecord: [
            {
              $group: {
                _id: null,
                count: {
                  $sum: 1,
                },
              },
            },
          ],
        },
      },
    ]);
    return response;
  } catch (error) {
    throw error;
  }
};

const findBookService = async (id) => {
  try {
    return await books.findOne({ _id: id });
  } catch (error) {
    throw error;
  }
};

const updateBookService = async (params) => {
  try {
    return await books.findByIdAndUpdate(
      { _id: params.id },
      {
        title: params.title,
        author: params.author,
        summary: params.summary,
      },
      { new: true }
    );
  } catch (error) {
    throw error;
  }
};

const deleteBookService = async (id) => {
  try {
    return await books.findOneAndDelete({ _id: id });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addBooksService,
  listBooksService,
  findBookService,
  updateBookService,
  deleteBookService,
};
