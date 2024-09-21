import { updateItem, createItem } from '../api/itemData';
import { createOrder, updateOrder, getOrders } from '../api/orderData';
import { showOrders } from '../pages/orderCard';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    if (e.target.id.includes('submit-order')) {
      console.warn('work');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#orderName').value,
        cxPhone: document.querySelector('#customerPhone').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#orderType').value,
        status: 'Open',
        firebaseKey,
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }

    if (e.target.id.includes('update-order')) {
      console.warn('work');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#orderName').value,
        cxPhone: document.querySelector('#customerPhone').value,
        email: document.querySelector('#email').value,
        orderType: document.querySelector('#orderType').value,
        status: document.querySelector('#orderStatus').value,
        firebaseKey,
      };
      updateOrder(payload).then(() => {
        getOrders().then(showOrders);
      });
    }
    if (e.target.id.includes('update-item')) {
      console.warn('work');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('#itemName').value,
        price: document.querySelector('#itemPrice').value,
        onSale: true,
        orderId: 'ItemId',
        firebaseKey,
      };
      updateItem(payload).then(() => {
        getOrders().then(showOrders);
      });
    }

    if (e.target.id.includes('submit-item')) {
      console.warn('work');
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: e.target.querySelector('#itemName').value,
        price: e.target.querySelector('#itemPrice').value,
        onSale: true,
        orderId: 'ItemId',
        firebaseKey,
      };
      createItem(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateItem(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }
  });
};

export default formEvents;
