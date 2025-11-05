

const inp = document.getElementById('inp');

function clicknumber(input) {
    inp.value += input;
}

function clearinp() {
    inp.value = ' ';
}

function calculate() {  
    inp.value = eval(inp.value);    
}

function del() {
    inp.value = inp.value.slice(0, -1);
}

let lightmood = true;

// function mood() {
//     const body = document.getElementById('bd');
//     const button = document.querySelector('.lightmood');
//     const calc = document.getElementById('calc');
//     const buttons = document.getElementsByClassName('b');
//     if (lightmood) {
//         body.style.backgroundColor = 'white';
//         body.style.color = 'black';
//         calc.style.backgroundColor = 'rgb(201, 199, 199)';
//         for (let i = 0; i < buttons.length; i++) {
//             buttons[i].style.backgroundColor = 'rgb(201, 199, 199)';
//             buttons[i].style.color = 'black';
//         }
//         button.style.backgroundColor = 'black';
//         lightmood = false;
//     } else {
//         body.style.backgroundColor = 'rgb(19, 18, 18)';
//         body.style.color = 'white';
//         button.style.backgroundColor = 'white';
//         calc.style.backgroundColor = 'rgb(57, 57, 57)';
//         for (let i = 0; i < buttons.length; i++) {
//             buttons[i].style.backgroundColor = 'rgb(57, 57, 57)';
//             buttons[i].style.color = 'white';
//         }
//         lightmood = true;
//     }   
// }

