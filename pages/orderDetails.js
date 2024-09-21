import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const viewOrder = (obj) => {
  clearDom();
  const domString = `
  <h5 id="total"></h5>
  `;

  renderToDOM('#orderTotal', domString);

  let itemString = '';
  let btnString = '';
  let total = 0;

  obj.items.forEach((item) => {
    total += parseFloat(item.price.replace('$', ''));

    itemString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${item.price}</h6>
          <hr>
          <div>${item.onSale ? '<i class="fa fa-star" aria-hidden="true"></i>' : ''}</div>
          <button class="btn-info"><i class="fa fa-edit" id="edit-item--${item.firebaseKey}"></i></button>
          <button class="btn btn-danger"><i class="fa fa-trash-alt" id="delete-item--${item.firebaseKey}"></i></button>
        </div>
      </div>`;
  });

  // <button class="btn btn-success"  type="button" id="addItemBtn__${obj.itemIds}">Add Items</button>
  renderToDOM('#total', total);
  renderToDOM('#store', itemString);

  btnString += `
    <button id="addItemBtn" class="btn-info"><i id="parentOrderId__${obj.itemIds}"></i>Add Items</button>
    <button class="btn btn-info" type="button" id="paymentForm">Payment</button>
    `;
  renderToDOM('#view', btnString);
};

export default viewOrder;
