import client from '../utils/client';

const endpoint = client.databaseURL;

// TODO: PROMISE FOR GET ITEMS
const getItems = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

// TODO: PROMISE FOR CREATE ITEMS

// TODO: PROMISE FOR DELETE ITEMS

// TODO: PROMISE FOR GET SINGLE ITEM

// TODO: PROMISE FOR EDIT ITEMS

export default getItems;
