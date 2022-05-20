# MyReads Project

A reading library application that allows the user to place books onto different shelves: `Currently Reading`, `Want to Read`, and `Read`. There is also a search functionality to add a new book to a certain shelf. In addition, the user can click on the `Show Book Details` button to reveal more information about a book including the average rating or preview link if available from the API. 

## TL;DR

To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## What You're Getting

```bash
├── CODEOWNERS # Using Udacity Starter Code
├── LICENSE.txt # Udacity Licensing Agreement
├── README.md # This file
├── SEARCHTERMS.md # The whitelisted short collection of available search terms for you to use with the app
├── package.json # npm package manager file
├── package-lock.json # dependency lock file
├── yarn.lock # dependency lock file
├── public
│   ├── favicon.ico # React Icon
│   └── index.html # DO NOT MODIFY
└── src
    └── components
    │   ├── App.js # Root of the app
    │   ├── Book.js # displays book information
    │   ├── BookDetailsModal.js # displays more book information
    │   ├── BookRatings.js # displays the average book rating with star icons
    │   ├── BooksGrid.js # displays multiple books 
    │   ├── Bookshelf.js # displays a BookGrid component based on the books on that shelf 
    │   ├── ChangeBookshelf.js # handles changing a book's shelf
    │   ├── ListBooks.js # displays all Bookshelf components 
    │   └── SearchBooks.js # displays a BookGrid component based on the query searched
    └── css
    │   ├── App.css # Styles for the app
    │   └── index.css # Global styles
    └── icons # Helpful images for the app
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   ├── arrow-drop-down.svg
    │   └── default-thumbnail.svg
    └── utils
    │   └── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify the development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCHTERMS.md](SEARCHTERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

