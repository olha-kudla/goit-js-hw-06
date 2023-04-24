// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


// Напиши скрипт, який змінює кольори фону елемента <body> через 
// інлайн-стиль по кліку 
// на button.change-color і виводить значення кольору в span.color.

// const btnRef = document.querySelector(".change-color");
// console.log(btnRef);

// const colorSpanRef = document.querySelector(".color");
// console.log(colorSpanRef);

// const bodyRef = document.querySelector("body");
// console.log(bodyRef);

// const changeColor = (event) => {
//   bodyRef.style.backgroundColor = getRandomHexColor();
//   colorSpanRef.textContent = bodyRef.style.backgroundColor;
// }

// btnRef.addEventListener("click", changeColor);


const myArray = [1, 36, 'Olhqa', false, 3, 4, 5];
console.log(myArray);

myArray.push('kit');
console.log(myArray);

const removeElement = myArray.pop();
console.log(removeElement);

myArray.unshift('polokoloikbhcdhbcdxhbj');
console.log(myArray);

const removeShiftElement = myArray.shift();
console.log(removeShiftElement);
