
function selectDonation(option) {
    document.getElementById('selected-option').innerHTML = `<p>You have selected to donate to ${option}.</p>`;
}

// jijij
document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}



let paysuss = document.getElementById("donethis");
const submit = document.querySelector(".submit-btn");
submit.addEventListener("click", function(event){
    event.preventDefault();
    alerts();
    // paysuss.classList.add("displaysuss");
});

function alerts(){
    const inputs = document.querySelectorAll("input");
    for(let i = 0; i<3; i++){
        if(inputs[i].value ===""){
            alert("Please fill the required information");
        }else{
            paysuss.classList.add("displaysuss");
        }
    }
}

submit.addEventListener("click",function(){
    document.querySelector('.card-number-input').value = "";
    document.querySelector('.card-holder-input').value = "";
    document.querySelector('.month-input').value = "";
    document.querySelector('.year-input').value = "";
    document.querySelector('.cvv-input').value = "";
})

// code for card popup

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("openpopup");
    
}

// function addprice(event){
//     const pridiv = document.querySelector(".btn");
//     pridiv.forEach((item) => {
//         console.log(item);
//     })
// }

// addprice();

function closepopup() {
    popup.classList.remove("openpopup");
}


// paymnent upi


function proceedToPayment() {
    var company = document.getElementById('company').value;
    var phone = document.getElementById('phone').value;
    var fullname = document.getElementById('fullname').value;
    var amount = document.getElementById('amount').value;

    // Validate input
    if (phone === '' || fullname === '' || amount === '') {
        alert('Please fill in all fields.');
        return;
    }

    var timeLeft = 10;
    var countdownDisplay = document.getElementById('countdown');
    countdownDisplay.textContent = 'Payment will be successful in ' + timeLeft + ' seconds';

    var countdownInterval = setInterval(function() {
        timeLeft--;
        countdownDisplay.textContent = 'Payment will be successful in ' + timeLeft + ' seconds';

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('success').style.display = 'block';
            countdownDisplay.style.display = 'none'; // Hide countdown display
        }
    }, 1000);
}

// for popupipi

let open = document.getElementById("popopenupi");


function popUpupi() {
    open.classList.remove("hidden");
}

function remove() {
    open.classList.add("hidden");
}