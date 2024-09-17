import { createOrder, getOrders, updateOrder } from '../api/orderData';
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
        status: 'open',
        firebaseKey,
      };
      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateOrder(patchPayload).then(() => {
          getOrders().then(showOrders);
        });
      });
    }
  });
};

export default formEvents;
