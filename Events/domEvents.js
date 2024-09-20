import { getOrders } from '../api/orderData';
import { showOrders } from '../pages/orderCard';
import addOrderForm from '../components/forms/addOrderForm';
import viewOrder from '../pages/orderDetails';
<<<<<<< HEAD
import { getOrderDetails } from '../api/mergedData';
import addItemForm from '../components/forms/addItemForm';
import addPaymentForm from '../components/forms/addPaymentForm';
=======
import { getOrderDetails, deleteOrderItemsRelationship } from '../api/mergedData';
import viewRevenue from '../pages/revenue';
>>>>>>> main

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrderBtn')) {
      getOrders().then(showOrders);
    }
    if (e.target.id.includes('createOrderBtn')) {
      addOrderForm();
    }
    if (e.target.id.includes('paymentForm')) {
      addPaymentForm();
    }
    if (e.target.id.includes('addItemBtn')) {
      console.warn('STUPID BULLSHIT');
      addItemForm();
    }
    if (e.target.id.includes('itemDetailsBtn')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn(getOrderDetails(firebaseKey));
      getOrderDetails(firebaseKey).then(viewOrder);
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
      getItems().then(viewRevenue);
    }
  });
};

export default domEvents;
