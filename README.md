# Book-Management-API

This is a Node.js-based RESTful API for managing books. It allows users to perform CRUD (Create, Read, Update, Delete) operations on books. The API uses MongoDB Atlas as the database for storing book data.

## Features

- **Create**: Add a new book with details such as title, author, and summary.
- **Read**: View a list of all books, view details of a specific book by its ID.
- **Update**: Modify a book's details.
- **Delete**: Remove a book from the database.

## Video Demonstration

You can watch a video demonstration of this API in action on [YouTube](https://www.youtube.com/yourvideolink).

The video covers all possible test cases, including edge cases such as attempting to view, update, or delete a non-existent book.

## Setup and Running the Application Locally

Follow these steps to set up and run the application on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/swetarajbhar/Book-Management-API.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Book-Management-Api
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

### Configuration

Before running the application, make sure to configure your MongoDB connection settings.

1. Create a `.env` file in the root of your project.

2. You can modify your .env file to include your MongoDB credentials and config parameters as follows:

   ```
   NODE_ENV=development
   CONFIG=development
   PORT=10011

   # DB CREDS
   MONGO_HOST=HOST
   MONGO_USERNAME=USERNAME
   MONGO_PASSWORD=PASSWORD
   MONGO_PORT=27017
   MONGO_DBNAME=DBNAME
   ```

   Replace `HOST,USERNAME,PASSWORD,DBNAME` with your MongoDB connection parameters.

### Running the Application

1. Start the API:

   ```bash
   npm run start
   ```

   The API should now be running on `http://localhost:10011`.

## API Endpoints and Usage

The following endpoints are available:

- `GET /books/v1/list`: Get a list of all books.
- `GET /books/v1/find/`: Get the details of a specific book by its ID.
- `POST /books/v1/add`: Add a new book (Provide book details in the request body).
- `PUT /books/v1/update/:id`: Update the details of a book by its ID (Provide updated book details in the request body).
- `DELETE /books/v1/delete/:id`: Delete a book by its ID.

Here are some examples of using these endpoints:

### Get a list of all books

```bash
GET http://localhost:10011/books/v1/list
```

### Get details of a specific book by ID

```bash
GET http://localhost:10011/books/v1/find/653f5cbbe2416a539391b425
```

### Add a new book

```bash
POST http://localhost:10011/books/v1/add
Body:
{
  "title": "The Great Indian Valley",
  "author": "F. Scott Fitzgerald",
  "summary": "A classic novel."
}
```

### Update a book's details

```bash
PUT http://localhost:10011/books/v1/update/653f5bdab2f172982e15b1b6
Body:
{
  "title": "Updated Title",
  "author": "Updated Author",
  "summary": "Updated Summary."
}
```

### Delete a book

```bash
DELETE http://localhost:10011/books/v1/delete/653f635f47f3ecb1a5c01ad5
```

## Deployment Instructions

- The APIs are deployed on Render. Below is the Base URL. 

   ```bash
   https://book-management-api-1r15.onrender.com
   ```


## Steps for Deployment
- You will need a free account on Render to get started. After you have registered with your preferred method, such as Github or Email, please follow the steps below to run your Node.js app on Render:

- Log in to your Render account.

- On the Dashboard, under "Web Services," click "New Web Service."

- Next, paste the following URL in the provided field: https://github.com/swetarajbhar/Book-Management-API and click "Continue."

- On the next page, enter "book-management-api" as the Name of the app, and select the Environment as "Node."

- Make sure the build command is set to npm install, and the start command is set to npm run start. Also, ensure that the plan is set to "Free." Add the appropriate environment variables required for the Node.js application under Advanced Settings. Then, click the blue button at the end of the page, which says "Create Web Service."

- The application's URL will be visible under the name of the app. Click it to check if your app is running. If you click the app while it is being deployed for the first time, it may return a 404 response. It will take some time to become operational. You can check by visiting <YOUR-APP-URL>.


## Decisions and Assumptions

- The API assumes that MongoDB is set up and running, and the connection parameters is configured in the `.env` file.
- The API uses the Express.js framework for creating the RESTful endpoints.
- It follows RESTful conventions for the URL structure.
- The API uses JSON for data exchange.

Feel free to reach out for any questions or assistance. Enjoy managing your books!
