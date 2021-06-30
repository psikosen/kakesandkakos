// variables 

const firstName = document.getElementById("fname");
const middleName = document.getElementById("mname");
const lastName = document.getElementById("lname");
const userDate = document.getElementById("userDate");
const userTime = document.getElementById("arrivalTime");
const userAmount = document.getElementById("guestAmount");
// PLACEHOLDERS

firstName.placeholder = "First Name";
middleName.placeholder = "Middle Name";
lastName.placeholder = "Last Name";

// STYLING INPUTS 

const firstNameStyle = () => {
    firstName.style.border = "none";
    firstName.style.borderBottom = "1px solid black";
    firstName.style.outline = "none";
    firstName.style.textAlign = "left";
}

const middleNameStyle = () => {
    middleName.style.border = "none";
    middleName.style.borderBottom = "1px solid black";
    middleName.style.outline = "none";
    middleName.style.textAlign = "left";
}

const lastNameStyle = () => {
    lastName.style.border = "none";
    lastName.style.borderBottom = "1px solid black";
    lastName.style.outline = "none";
    lastName.style.textAlign = "left";
}

const userDateStyle = () => {
    userDate.style.border = "none";
    userDate.style.borderBottom = "1px solid black";
    userDate.style.outline = "none";
    userDate.style.textAlign = "left";
}

firstNameStyle();
middleNameStyle();
lastNameStyle();
userDateStyle();

// INSERTING OPTIONS INTO GUEST SELECT 

const guestInput = () => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    const option3 = document.createElement("option");

    option1.text = "1-2";
    option2.text = "3-4";
    option3.text = "5+";

    userAmount.appendChild(option1);
    userAmount.appendChild(option2);
    userAmount.appendChild(option3);

}

guestInput();


const arriveTimeInput = () => {
    const time1 = document.createElement("option");
    const time2 = document.createElement("option");
    const time3 = document.createElement("option");
    const time4 = document.createElement("option");
    const time5 = document.createElement("option");

    time1.text = "1pm";
    time2.text = "2pm";
    time3.text = "3pm";
    time4.text = "4pm";
    time5.text = "5pm";

    userTime.appendChild(time1);
    userTime.appendChild(time2);
    userTime.appendChild(time3);
    userTime.appendChild(time4);
    userTime.appendChild(time5);
}

arriveTimeInput();