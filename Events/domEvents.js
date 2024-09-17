<<<<<<< HEAD
import { getOrders } from '../api/orderData';
import { showOrders } from '../pages/orderCard';
import addOrderForm from '../components/forms/addOrderForm';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrderBtn')) {
      getOrders().then(showOrders);
    }

    if (e.target.id.includes('createOrderBtn')) {
      addOrderForm();
    }
  });
};
=======
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

>>>>>>> main
export default domEvents;
