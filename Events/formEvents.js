import { createItem, updateItem } from '../api/itemData';
import {
  createOrder,
  getOrders,
  updateOrder,
} from '../api/orderData';
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

    if (e.target.id.includes('submit-item')) {
      console.warn('work');
      const [, firebaseKey] = e.target.id.split('--');
      const [, itemId] = e.target.id.split('__');
      console.warn(itemId);
      const payload = {
        name: document.querySelector('#itemName').value,
        price: document.querySelector('#itemPrice').value,
        onSale: true,
        orderId: itemId,
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

// localcache for save data, jsonParse for conversion of array, phone number = ( + ,1-3 digit, ) +, 4-6, -, 7-10

// const idOrder = getSingleOrder(firebaseKey).then((result) => result.itemIds);

//  _/\_
// ('__')
//  \  /
//   \/
