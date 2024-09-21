import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

const addItemForm = (orderFirebaseKey, obj = {}) => {
  clearDom();

  const formId = obj.firebaseKey
    ? `update-item--${obj.firebaseKey}`
    : 'submit-item';

  const domString = `
    <form id="${formId}" class="mb-4">
      <!-- Hidden input for orderId -->
      <input type="hidden" id="orderId" value="${orderFirebaseKey}">
      <div class="form-group">
        <label for="itemName">Item Name</label>
        <input type="text" class="form-control" id="itemName" placeholder="Enter Name" value="${obj.name || ''}" required>
      </div>
      <div class="form-group">
        <label for="itemPrice">Item Price</label>
        <input type="text" class="form-control" id="itemPrice" placeholder="Enter Item Price" value="${obj.price || ''}" required>
      </div>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button type="submit" class="btn btn-success mt-3">Add/Edit Item</button>
      </div>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addItemForm;
