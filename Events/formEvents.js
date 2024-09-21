import { updateItem, createItem } from '../api/itemData';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // Check for item form submissions
    if (e.target.id === 'submit-item' || e.target.id.includes('update-item--')) {
      // Retrieve orderId from the hidden input field within the form
      const orderIdInput = e.target.querySelector('#orderId');
      const orderId = orderIdInput ? orderIdInput.value : null;

      if (!orderId) {
        console.error('Order ID is undefined');
        return;
      }

      // Extract firebaseKey for updates
      const firebaseKey = e.target.id.includes('update-item--') ? e.target.id.split('--')[1] : null;

      const payload = {
        name: e.target.querySelector('#itemName').value,
        price: e.target.querySelector('#itemPrice').value,
        onSale: true,
        orderId, // Use orderId from the hidden input field
      };

      if (firebaseKey) {
        // Editing an existing item
        payload.firebaseKey = firebaseKey;
        updateItem(payload)
          .then(() => {
            // Refresh the order details or item list
          })
          .catch((error) => {
            console.error('Error updating item:', error);
          });
      } else {
        // Creating a new item
        createItem(payload)
          .then(({ name }) => {
            const patchPayload = { ...payload, firebaseKey: name };
            updateItem(patchPayload)
              .then(() => {
                // Refresh the order details or item list
              })
              .catch((error) => {
                console.error('Error updating item:', error);
              });
          })
          .catch((error) => {
            console.error('Error creating item:', error);
          });
      }
    }
  });
};

export default formEvents;
