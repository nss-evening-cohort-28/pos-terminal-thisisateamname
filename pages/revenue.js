import clearDom from '../utils/clearDom';
import renderToDom from '../utils/renderToDom';

const viewRevenue = (arr) => {
  clearDom();
  let totalRev = 0;
  let totalTip = 0;
  let totalPhone = 0;
  let totalWalkIn = 0;
  let totalCash = 0;
  let totalCard = 0;
  let totalMobile = 0;
  arr.forEach((obj) => {
    totalRev += (parseFloat(obj.order_amount) + parseFloat(obj.tip_amount));
    totalTip += obj.tip_amount;
    if (obj.payment_type === 'Cash') {
      totalCash += 1;
    } else if (obj.order_type === 'Mobile') {
      totalMobile += 1;
    } else {
      totalCard += 1;
    }
    if (obj.order_type === 'Phone') {
      totalPhone += 1;
    } else {
      totalWalkIn += 1;
    }
  });
  const domString = `
  <h5>Total Revenue: $${totalRev}</h5>
  <div class="totals">
    <p>Total Tips: $${totalTip.toFixed(2)}</p>
    <p>Total Call-In Orders: ${totalPhone}</p>
    <p>Total Walk-In Orders: ${totalWalkIn}</p>
  </div>
  <div class="payment-types">
    <p>Payment Types</p>
    <p>Cash: ${totalCash}</p>
    <p>Credit: ${totalCard}</p>
    <p>Mobile: ${totalMobile}</p>
  </div>`;
  renderToDom('#view', domString);
};
export default viewRevenue;
