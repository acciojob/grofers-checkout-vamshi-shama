const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
const prices = document.querySelectorAll('.price');
let totalPrice = 0;
for(let i=0; i<prices.length; i++) {
    const price = parseFloat(prices[i].textContent.replace('$',''));
    totalPrice += price;
}
//console.log(totalPrice);
const table = document.querySelector('table');
const newRow = document.createElement('tr');
const newCell = document.createElement('td');
newCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
newRow.appendChild(newCell);
table.appendChild(newRow);  
};

getSumBtn.addEventListener("click", getSum);

