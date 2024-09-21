import { getOrders } from '../api/orderData';
import { showOrders } from '../pages/orderCard';
import addOrderForm from '../components/forms/addOrderForm';
import viewOrder from '../pages/orderDetails';
import { getOrderDetails, deleteOrderItemsRelationship } from '../api/mergedData';
import viewRevenue from '../pages/revenue';
import { getItems } from '../api/itemData';
import getPayment from '../api/revenueData';

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
    if (e.target.id.includes('deleteOrderBtn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE ORDER', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteOrderItemsRelationship(firebaseKey).then(() => {
          getOrders().then(showOrders);
        });
      }
    }
    if (e.target.id.includes('viewRevenueBtn')) {
      Promise.all([getPayment(), getItems()])
        .then(([payment, items]) => {
          viewRevenue(items, payment);
        });
    }
  });
};

export default domEvents;
