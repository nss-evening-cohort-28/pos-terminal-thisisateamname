import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyOrders = () => {
  const domString = '<h1>No Orders</h1>';
  renderToDOM('#store', domString);
};

const showOrders = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${item.status}</h6>
    <p class="card-text">${item.orderType}</p>
    <li class="list-group-item">${item.cxPhone}</li>
        <a href="#" class="btn btn-primary" id="editOrderBtn--${item.firebaseKey}">Edit</a>
        <a href="#" class="btn btn-primary" id="deleteOrderBtn--${item.firebaseKey}">Delete</a>
        <a href="#" class="btn btn-primary" id="itemDetailsBtn--${item.firebaseKey}">Details</a>
        <a href="#" class="btn btn-primary" id="deleteOrderBtn--${item.firebaseKey}">Delete</a>
  </div>
</div>

    `;
  });
  renderToDOM('#store', domString);
};

export { showOrders, emptyOrders };
