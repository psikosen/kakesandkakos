// variables 

const form = document.getElementById("resForm");
const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const guestQuantity = document.getElementById("guestQuantity");
const guestTime = document.getElementById("guestTime");
const zipCode = document.getElementById("zipCode");
const reserveBtn = document.getElementById("reservationBtn");

const placeholders = () => {
    firstName.placeholder = "First Name";
    lastName.placeholder = "Last Name";
    phone.placeholder = "Phone Number";
    address.placeholder = "Address";
    zipCode.placeholder = "Zip Code";
}

placeholders();

document.getElementById("guestQuantity")[0] = disabled;


// check to see if field is empty

const emptyFields = () => {
    if(firstName.value === ''){
        firstName.style.borderBottomColor = "red";
    }
    if(lastName.value === ''){
        lastName.style.borderBottomColor = "red";
    }
    if(phone.value === ''){
        phone.style.borderBottomColor = "red";
    }
    if(address.value === ''){
        address.style.borderBottomColor = "red";
    }
    if(zipCode.value === ''){
        zipCode.style.borderBottomColor = "red";
    }
}



reserveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(firstName.value === '' && lastName.value === ''){
        firstName.style.borderBottomColor = "red";
        firstName.placeholder = "Enter Your First Name";
        lastName.style.borderBottomColor = "red";
        lastName.placeholder = "Enter Your Last Name";
    }

    if(phone.value === '' && address.value === '' && zipCode.value === ''){
        phone.style.borderBottomColor = "red";
        phone.placeholder = "Enter Your Phone";
        address.style.borderBottomColor = "red";
        address.placeholder = "Enter Your Address";
        zipCode.style.borderBottomColor = "red";
        zipCode.placeholder = "Enter Your Zip Code";
    }

    if(reserveBtn){
        console.log(firstName.value);
        console.log(lastName.value);
        console.log(phone.value);
        console.log(address.value);
        console.log(guestQuantity.value);
        console.log(guestTime.value);
    }
})

