let DomDate = document.getElementById("current-date");
let addItem = document.getElementById("add-item");
let itemContainer = document.getElementById("detail-table");
Update();
const currentDate = new Date();
DomDate.innerHTML = currentDate.toLocaleDateString();

addItem.addEventListener("click", () => {
  let newRow = document.createElement("tr");
  newRow.classList.add("items");
  newRow.innerHTML = `<td>
                <input type="text" placeholder="Item Name"  class="item-name"/>
                <input type="text" placeholder="Item Description" class="item-desc" />
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
  let rows = document.getElementsByClassName("items");
  for (let i = 0; i < rows.length; i++) {
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
function preview() {
  const date = document.getElementById("due-date");
  const inNum = document.getElementById("invoice-number");
  const toname = document.getElementById("to-name");
  const toemail = document.getElementById("to-email");
  const toaddress = document.getElementById("to-address");
  const fname = document.getElementById("f-name");
  const femail = document.getElementById("f-email");
  const faddress = document.getElementById("f-address");
  const tAmount = document.getElementById("total");

  const billto = document.getElementById("billto");
  billto.innerText = fname.value;

  const invoiceNumber = document.getElementById("invoice-no");
  invoiceNumber.innerText = inNum.value;

  const amount = document.getElementById("amount");
  amount.innerText = tAmount.innerText;

  const bto = document.getElementById("bt-name");
  bto.innerHTML = toname.value;

  const bta = document.getElementById("bt-address");
  bta.innerHTML = toaddress.value;

  const bte = document.getElementById("bt-email");
  bte.innerHTML = toemail.value;

  const bfr = document.getElementById("bf-name");
  bfr.innerHTML = fname.value;

  const bfa = document.getElementById("bf-address");
  bfa.innerHTML = faddress.value;

  const bfe = document.getElementById("bf-email");
  bfe.innerHTML = femail.value;

  const issueDate = document.getElementById("date");
  issueDate.innerHTML = date.value;

  const popcontainer = document.getElementById("pop-detail-table");
  popcontainer.innerHTML = "";
  const tr = document.getElementsByClassName("items");
  for (let i = 0; i < tr.length; i++) {
    let itemName = tr[i].getElementsByClassName("item-name")[0];
    let itemDesc = tr[i].getElementsByClassName("item-desc")[0];
    let qty = tr[i].getElementsByClassName("quantity")[0];
    let price = tr[i].getElementsByClassName("price")[0];
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    td1.append(qty.value);
    td2.innerText = itemDesc.value;
    td3.innerText = price.value;
    td4.innerHTML = Number(qty.value) * Number(price.value);
    row.append(td1, td2, td3, td4);
    popcontainer.append(row);
  }

  const subtotal = document.getElementById("subtotal");
  const sub = document.getElementById("pop-subtotal");
  sub.innerText = subtotal.innerText;

  const total = document.getElementById("total");
  const tot = document.getElementById("pop-total");
  tot.innerText = total.innerText;
}

const bd = document.getElementsByTagName("body")[0];
const mn = document.getElementById("main");
/* let rbtn = document.getElementById("review");
rbtn.addEventListener("click", (e) => {
  mn.style.filter = "blur(2px)";
  const pop = document.getElementById("popup");
  pop.style.display = "block";
  rbtn.disabled = true;
  preview();
  id="review"
}); */

function reviewIn() {
  mn.style.filter = "blur(2px)";
  const pop = document.getElementById("popup");
  pop.style.display = "block";
  preview();
}

bd.addEventListener("click", (e) => {
  if (
    e.target.id == "bd" ||
    e.target.id == "right" ||
    e.target.id == "invoice"
  ) {
    const pop = document.getElementById("popup");
    pop.style.display = "none";
    mn.style.filter = "blur(0px)";
  }
});

/*download pdf*/

const download = document.getElementById("download");
download.addEventListener("click", () => {
  setTimeout(downloadInvoice, 1000);
});

function downloadInvoice() {
  let invoice = document.getElementById("pop-container");
  var opt = {
    margin: 0,
    filename: "Newinvoice.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(invoice).save();
}

/*send Invoice*/

function sendInvoice() {
  let msg = document.getElementById("send-invoice-msg");
  msg.innerText = "Sending...";

  setTimeout(() => {
    msg.innerText = "Invoice sent successfully.";
  }, 2000);
}
