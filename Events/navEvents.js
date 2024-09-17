import getOrders from '../api/orderData';
import homePage from '../pages/homePage';
import { getOrders } from '../api/orderData';
import addOrderForm from '../components/forms/addOrderForm';
import { showOrders } from '../pages/orderCard';

const navigationEvents = () => {
  document.querySelector('#allOrders').addEventListener('click', () => {
    getOrders().then(showOrders);
  });
  document.querySelector('#homeBtn').addEventListener('click', () => {
    homePage();
  });

  document.querySelector('#createOrder').addEventListener('click', () => {
    addOrderForm();
  });
};
export default navigationEvents;
