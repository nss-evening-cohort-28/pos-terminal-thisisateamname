import { getOrders } from '../api/orderData';
import { showOrders } from '../pages/orderCard';
import addOrderForm from '../components/forms/addOrderForm';
// import { getItems } from '../api/itemData';
import viewOrder from '../pages/orderDetails';
import { getOrderDetails } from '../api/mergedData';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrderBtn')) {
      getOrders().then(showOrders);
    }

    if (e.target.id.includes('createOrderBtn')) {
      addOrderForm();
    }
    if (e.target.id.includes('itemDetailsBtn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(getOrderDetails(firebaseKey));
      getOrderDetails(firebaseKey).then(viewOrder);
      // getItems(getSingleOrder(firebaseKey)).then(showItems);
      // getSingleOrder(firebaseKey).then(showItems);
    }
  });
};

export default domEvents;
