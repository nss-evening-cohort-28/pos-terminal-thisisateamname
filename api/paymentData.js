import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: PROMISE FOR CREATE ORDERS
const createPayment = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/payment.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});
// TODO: PROMISE FOR EDIT ORDERS
const updatePayment = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/payment/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export { updatePayment, createPayment };
