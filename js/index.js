//1.
// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let number = "";
for (let i = 20; i <= 30; i+=0.5) {
    number += `${i} `
}
document.getElementById("task_01").innerHTML = number;


//2.
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
const currencyPrice = 27;
let currency = "";
for (let i = 10; i <= 100; i+=10){
    currency += `${i} доларів коштують ${i * currencyPrice} гривень <br>`
}
document.getElementById("task_02").innerHTML = currency;


//3.
// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let init = () => {
let enteredNumber = prompt("Введіть ціле число");
let entNumb = Number(enteredNumber);
let n2 = "";
let interNumber = "";
let cubeReduction = "";
let cubRed = `${entNumb}`;
if (isNaN (entNumb) || entNumb % 1 != 0) {
    alert ("Ви ввели не число або не ціле число, спробуйе ще раз")
    return init();
}
for (let i = 1; i <= 100; i++){
    if (i**2 <= entNumb){
        n2 += `${i} `;
}
}
//4.
// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
for (let i = 2; i < entNumb; i++) {
    if (entNumb % i === 0) {
        interNumber += `Число ${entNumb} не є простим`;
    } else {
        interNumber += `Число ${entNumb} є простим`
    }
    break;
}
//5.
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад,числа 9, 81 можна отримати, а 13 - не можна)
    if (entNumb % 3 === 0) {
        cubeReduction = `${cubRed} - число можна одержати шляхом зведення числа 3 у деякій ступінь`;
    } else {
        cubeReduction = `${cubRed} - число не можливо одержати шляхом зведення числа 3 у деякій ступінь`;
    }
document.getElementById("task_03").innerHTML = n2;
document.getElementById("task_04").innerHTML = interNumber;
document.getElementById("task_05").innerHTML = cubeReduction;
}
init();