const plusBtn1 = document.getElementById('1');
const plusBtn2 = document.getElementById('2');
const plusBtn3 = document.getElementById('3');

const subtractBtn1 = document.getElementById('4');
const subtractBtn2 = document.getElementById('5');
const subtractBtn3 = document.getElementById('6');


let item1 = document.getElementById("count1");
let item2 = document.getElementById("count2");
let item3 = document.getElementById("count3");

var count = 1;

// function addToCart(button) {
//     var x = button.id;
//     switch (x) {
//         case '1':
//             console.log('This is 1');
//             break;
//         case '2':
//             console.log('This is 2');
//             break;
//         case '3':
//             console.log('This is 3');
//             break;
//         default:
//             return false;
//     }
// }

//plusBtn1.addEventListener('click', addToCart);

/*
function addItem1() {
    console.log("Hello World");
    for (var i = 0; i < item1.length; i++) {
        count += item1[i].innerHTML.split(' ').length;
    }
}*/

function addItem1() {
    count = count + 1;

    console.log(count);

    item1.innerHTML = count;
}

function subtractItem1() {
    count = count - 1;

    console.log(count);

    item1.innerHTML = count;
}


function addItem2() {
    count = count + 1;

    console.log(count);

    item2.innerHTML = count;
}

function subtractItem2() {
    count = count - 1;

    console.log(count);

    item2.innerHTML = count;
}


function addItem3() {
    count = count + 1;

    console.log(count);

    item3.innerHTML = count;
}

function subtractItem3() {
    count = count - 1;

    console.log(count);

    item3.innerHTML = count;
}


plusBtn1.addEventListener("click", addItem1);
plusBtn2.addEventListener("click", addItem2);
plusBtn3.addEventListener("click", addItem3);

subtractBtn1.addEventListener('click', subtractItem1);
subtractBtn2.addEventListener('click', subtractItem2);
subtractBtn3.addEventListener('click', subtractItem3);