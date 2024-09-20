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
    const deleteItemPromises = orderItemsArray.map((item) => deleteItem(item.firebaseKey));

    Promise.all(deleteItemPromises).then(() => {
      deleteOrder(firebaseKey).then(resolve);
    });
  }).catch(reject);
});

export { deleteOrderItemsRelationship, getOrderDetails };
