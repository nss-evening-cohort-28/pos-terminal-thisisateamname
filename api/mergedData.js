// TODO: CHECK mergedData.js in Almost-Amazon if needed
import { getOrderItems, deleteOrder, getSingleOrder } from './orderData';
import { deleteItem } from './itemData';

const getOrderDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleOrder(firebaseKey).then((orderObject) => {
    getOrderItems(orderObject.firebaseKey).then((itemObject) => resolve({ ...orderObject, items: itemObject })); // we nest this promise so that we can use the book object
  }).catch(reject);
});

const deleteOrderItemsRelationship = (firebaseKey) => new Promise((resolve, reject) => {
  getOrderItems(firebaseKey).then((orderItemsArray) => {
    const deleteBookPromises = orderItemsArray.map((items) => deleteOrder(items.firebaseKey));

    Promise.all(deleteBookPromises).then(() => {
      deleteItem(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { deleteOrderItemsRelationship, getOrderDetails };
