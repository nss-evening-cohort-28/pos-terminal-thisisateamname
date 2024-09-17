import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const homePage = () => {
  clearDom();
  const domString = `
    <h3 class="homePage-title">Welcome User!</h3>
    <button class="btn btn-success" type="button" id="viewOrderBtn">View Orders</button>
    <button class="btn btn-info" type="button" id="createOrderBtn">Create an Order</button>
    <button class="btn btn-warning" type="button" id="viewRevenueBtn">View Revenue</button>
 `;

  renderToDOM('#view', domString);
};

export default homePage;
