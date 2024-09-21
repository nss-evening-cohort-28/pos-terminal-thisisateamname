import { getOrders, getSingleOrder } from '../api/orderData';
import { showOrders } from '../pages/orderCard';
import addOrderForm from '../components/forms/addOrderForm';
import viewOrder from '../pages/orderDetails';
import { getOrderDetails, deleteOrderItemsRelationship } from '../api/mergedData';
import addItemForm from '../components/forms/addItemForm';
import addPaymentForm from '../components/forms/addPaymentForm';
import viewRevenue from '../pages/revenue';
import { getItems } from '../api/itemData';
import getPayment from '../api/revenueData';
import { getItems, getSingleItem, deleteItem } from '../api/itemData';
import editOrderForm from '../components/forms/editOrderForm';

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
      Promise.all([getPayment(), getItems()])
        .then(([payment, items]) => {
          viewRevenue(items, payment);
        });
    }
    if (e.target.id.includes('editOrderBtn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleOrder(firebaseKey).then((order) => editOrderForm(order));
    }
    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleItem(firebaseKey).then((order) => addItemForm(order));
    }
    if (e.target.id.includes('delete-item')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE Item', e.target.id);
        const [, firebaseKey] = (e.target.id.split('--'));
        deleteItem(firebaseKey).then(() => {
          getOrders().then(showOrders);
        });
      }
    }
  });
};

export default domEvents;
