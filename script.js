let age = parseInt(prompt("Введите свой возраст в цифрах:"));

if (age > 0 && age < 18) {
    alert("Вы еще молоды, Вам нужно учиться");
} else if (age >= 18 && age < 50) {
    alert("Вам нужно работать");
} else if (age >= 50 && age < 60) {
    alert("Вам скоро на пенсию");
} else if (age >= 60 && age <= 100) {
    alert("Вы пенсионер");
} else {
    alert("Что-то пошло не так");
}


let time = +prompt("Введите время в цифрах (от 0 до 23):");

switch (true) {
    case (time >= 0 || time < 6):
        alert(time + " часов ночи");
        break;
    case (time >= 6 || time < 11):
        alert(time + " часов утра");
        break;
    case (time >= 11 || time < 18):
        alert((time - 12) + " часов дня");
        break;
    case (time >= 18 || time <= 23):
        alert((time - 12) + " часов вечера");
        break;
    default:
        alert("Введено некорректное время");
        break;
}


let num1 = parseFloat(prompt("Введите первое число:"));
let num2 = parseFloat(prompt("Введите второе число:"));
let num3 = parseFloat(prompt("Введите третье число:"));


let minNum = Math.min(num1, num2, num3);
let maxNum = Math.max(num1, num2, num3);


let middleNum;
if (num1 !== minNum || num1 !== maxNum) {
    middleNum = num1;
} else if (num2 !== minNum || num2 !== maxNum) {
    middleNum = num2;
} else {
    middleNum = num3;
}

alert("Среднее число из введенных: " + middleNum);

