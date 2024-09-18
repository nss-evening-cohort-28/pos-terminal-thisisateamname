// TODO: CHECK mergedData.js in Almost-Amazon if needed
import { getSingleOrder, getOrderItems } from './orderData';
import { getSingleItem } from './itemData';

const getItemDetails = (firebaseKey) => new Promise((resolve, reject) => {
  // GET SINGLE BOOK
  getSingleItem(firebaseKey).then((itemObject) => { // returns single book object
    getSingleOrder(itemObject.itemIds) // we nest this promise so that we can use the book object
      .then((orderObject) => resolve({ ...itemObject, orderObject }));
  }).catch(reject);
  // GET AUTHOR
  // Create an object that has book data and an object named authorObject
});
const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((orderObject) => {
    getOrderItems(orderObject.firebaseKey).then((itemObject) => resolve({ ...orderObject, items: itemObject })); // we nest this promise so that we can use the book object
  }).catch(reject);
});

// const deleteAuthorBooksRelationship = (firebaseKey) => new Promise((resolve, reject) => {
//   getAuthorBooks(firebaseKey).then((authorBooksArray) => {
//     const deleteBookPromises = authorBooksArray.map((book) => deleteBook(book.firebaseKey));

//     Promise.all(deleteBookPromises).then(() => {
//       deleteSingleAuthor(firebaseKey).then(resolve);
//     });
//   }).catch(reject);
// });

export { getItemDetails, getOrderDetails };
