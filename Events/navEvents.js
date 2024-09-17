import getOrders from '../api/orderData';
import homePage from '../pages/homePage';
import { showOrders } from '../pages/orderCard';

const navigationEvents = () => {
  document.querySelector('#allOrders').addEventListener('click', () => {
    getOrders().then(showOrders);
  });
  document.querySelector('#homeBtn').addEventListener('click', () => {
    homePage();
  });
};
export default navigationEvents;
