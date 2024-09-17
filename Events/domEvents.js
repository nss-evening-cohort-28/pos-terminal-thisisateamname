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
export default domEvents;
