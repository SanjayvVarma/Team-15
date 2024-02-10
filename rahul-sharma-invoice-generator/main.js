let DomDate = document.getElementById("current-date");
let addItem = document.getElementById("add-item");
let itemContainer = document.getElementById("detail-table");
Update();
const currentDate = new Date();
DomDate.innerHTML = currentDate.toLocaleDateString();

addItem.addEventListener("click", () => {
  let newRow = document.createElement("tr");
  newRow.innerHTML = `<td>
                <input type="text" placeholder="Item Name" />
                <input type="text" placeholder="Item Description" />
                </td>
              <td><input type="number" class="quantity" value="1" /></td>
              <td><input type="number" class="price" value="1.0" /></td>
              <td>
                <i  class="fa-solid fa-trash-can delete-btn"></i>
              </td>`;
  itemContainer.append(newRow);
  Update();
});

function Update() {
  let allDeleteButton = document.getElementsByClassName("delete-btn");

  for (let i = 0; i < allDeleteButton.length; i++) {
    let button = allDeleteButton[i];
    button.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();
      updateTotal();
    });
  }

  let allQuantities = document.getElementsByClassName("quantity");
  for (let i = 0; i < allQuantities.length; i++) {
    allQuantities[i].addEventListener("input", (e) => {
      if (e.target.value < 0) {
        e.target.value = 1;
      }
      updateTotal();
    });
  }

  let allPrice = document.getElementsByClassName("price");
  for (let i = 0; i < allPrice.length; i++) {
    allPrice[i].addEventListener("input", (e) => {
      if (e.target.value < 0) {
        e.target.value = 1;
      }
      updateTotal();
    });
  }

  updateTotal();
}

function updateTotal() {
  let subTotalAmount = 0;
  let totalAmount = 0;
  let totalContainer = document.getElementById("total");
  let subtotal = document.getElementById("subtotal");
  let discount = document.getElementById("discount");
  let tax = document.getElementById("tax");
  let taxRate = document.getElementById("tax-percent");
  let discountRate = document.getElementById("discount-percent");
  let currency = document.getElementById("currency");
  let rows = document.getElementsByTagName("tr");
  for (let i = 1; i < rows.length; i++) {
    let itemRow = rows[i];
    let quantityRow = itemRow.getElementsByClassName("quantity")[0];
    let quantity = parseInt(quantityRow.value);
    let priceRow = itemRow.getElementsByClassName("price")[0];
    let price = parseFloat(priceRow.value);
    subTotalAmount += quantity * price;

    totalAmount =
      subTotalAmount +
      (subTotalAmount * parseFloat(taxRate.value)) / 100 -
      (subTotalAmount * parseFloat(discountRate.value)) / 100;
  }
  subtotal.innerText = currency.value + "" + subTotalAmount;
  totalContainer.innerText = currency.value + "" + totalAmount;
  tax.innerText =
    currency.value + "" + (subTotalAmount * parseFloat(taxRate.value)) / 100;
  discount.innerText =
    currency.value +
    "" +
    (subTotalAmount * parseFloat(discountRate.value)) / 100;
}

let currentCurrency = document.getElementById("currency");

currentCurrency.addEventListener("click", updateCurrency);

function updateCurrency(event) {
  let current = document.getElementById("total");
  let subtotal = document.getElementById("subtotal");
  let discount = document.getElementById("discount");
  let tax = document.getElementById("tax");

  current.innerText = event.target.value + current.innerText.substring(1);
  subtotal.innerText = event.target.value + subtotal.innerText.substring(1);
  discount.innerText = event.target.value + discount.innerText.substring(1);
  tax.innerText = event.target.value + tax.innerText.substring(1);
}

let currentTaxRate = document.getElementById("tax-percent");
currentTaxRate.addEventListener("input", () => {
  document.getElementById("tx-per").innerText = currentTaxRate.value;
  updateTotal();
});

let currentDisRate = document.getElementById("discount-percent");
currentDisRate.addEventListener("input", () => {
  document.getElementById("dx-per").innerText = currentDisRate.value;
  updateTotal();
});

/*Review*/

let rbtn = document.getElementById("review");
rbtn.addEventListener("click", () => {
  console.log("clicked");
});
