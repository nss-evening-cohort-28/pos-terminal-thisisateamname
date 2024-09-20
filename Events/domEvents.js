import { getOrders } from '../api/orderData';
import { showOrders } from '../pages/orderCard';
import addOrderForm from '../components/forms/addOrderForm';
import { getItems } from '../api/itemData';
import { showItems } from '../pages/itemCard';
import viewRevenue from '../pages/revenue';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('viewOrderBtn')) {
      getOrders().then(showOrders);
    }
    if (e.target.id.includes('createOrderBtn')) {
      addOrderForm();
    }
    if (e.target.id.includes('itemDetailsBtn')) {
      getItems().then(showItems);
    }
    if (e.target.id.includes('viewRevenueBtn')) {
      getItems().then(viewRevenue);
    }
  });
};

export default domEvents;
