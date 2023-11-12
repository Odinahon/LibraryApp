const API_URL = "http://localhost:8080";
// const API_URL = "https://intern-library-backend.azurewebsites.net";

async function httpGetAllBooks() {
  const response = await fetch(`${API_URL}/books`);
  return await response.json();
}

async function httpGetBookWithId(id) {
  const response = await fetch(`${API_URL}/books/${id}`);
  return response.json();
}

async function httpSubmitBook(book) {
  try {
    return await fetch(`${API_URL}/books`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
  } catch (err) {
    console.log("Server not responding...");
  }
}
async function httpUpdateBook(book) {
  try {
    return await fetch(`${API_URL}/books/${book.bookId}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
  } catch (err) {
    console.log(err);
  }
}
async function httpDeleteBook(id) {
  try {
    return await fetch(`${API_URL}/books/${id}`, {
      method: "delete",
    });
  } catch (err) {
    console.log(err);
  }
}
export {
  httpGetAllBooks,
  httpGetBookWithId,
  httpSubmitBook,
  httpDeleteBook,
  httpUpdateBook,
};
