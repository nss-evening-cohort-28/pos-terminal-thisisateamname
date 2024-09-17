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

const domEvents = () => {
  // click event to view orders
  document.querySelector('#viewOrderBtn').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrderBtn')) {
      getOrders().then(showOrders);
    }
  });
};

>>>>>>> main
export default domEvents;
