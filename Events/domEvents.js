import getItems from '../api/itemData';
import getOrders from '../api/orderData';
import { showOrders } from '../pages/orderCard';
import { showItems } from '../pages/itemCard';

const domEvents = () => {
  // click event to view orders
  document.querySelector('#viewOrderBtn').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrderBtn')) {
      getOrders().then(showOrders);
    }
  });

  //   Event for itemsDetail button
  document.querySelector('#itemDetailsBtn').addEventListener('click', (e) => {
    if (e.target.id.includes('itemDetailsBtn')) {
      getItems().then(showItems);
    }
  });
};

export default domEvents;
