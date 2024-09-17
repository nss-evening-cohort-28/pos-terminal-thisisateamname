import getOrders from '../api/orderData';
import { showOrders } from '../pages/orderCard';

const domEvents = () => {
  // click event to view orders
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrderBtn')) {
      getOrders().then(showOrders);
    }
  });
};

export default domEvents;
