// variables 

const plusButton1 = document.getElementById("plus1");

const plusButton2 = document.getElementById("plus2");

const plusButton3 = document.getElementById("plus3");

const plusButton4 = document.getElementById("plus4");

const minusButton1 = document.getElementById("minus1");

const minusButton2 = document.getElementById("minus2");

const minusButton3 = document.getElementById("minus3");

const minusButton4 = document.getElementById("minus4");

const plusButtons = [plusButton1, plusButton2, plusButton3, plusButton4];

const minusButtons = [minusButton1, minusButton2, minusButton3, minusButton4];

// plus & minus counter with add event listener 

let count1 = document.getElementById("count1");
let count2 = document.getElementById("count2");
let count3 = document.getElementById("count3");
let count4 = document.getElementById("count4");
count1 = 0;


plusButton1.addEventListener('click', () => {
    document.getElementById("count1").innerText = count1++;
    console.log('button 1')
});

plusButton2.addEventListener('click', () => {
    if(plusButton2){
        count2 = count2 + 1;
    }
    else{
        count2 += 0;
    }
    document.getElementById("count2").innerText = count1++
    console.log('button 2')
});

plusButton3.addEventListener('click', () => {
    document.getElementById("count3").innerText = count1++;
    console.log('button 3')
});

plusButton4.addEventListener('click', () => {
    document.getElementById("count4").innerText = count1++;
    console.log('button 4')
});

// minusButton1.addEventListener('click', );