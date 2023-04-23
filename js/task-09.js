function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// Напиши скрипт, який змінює кольори фону елемента <body> через 
// інлайн-стиль по кліку 
// на button.change-color і виводить значення кольору в span.color.

const btnRef = document.querySelector(".change-color");
console.log(btnRef);

const colorSpanRef = document.querySelector(".color");
console.log(colorSpanRef);

const bodyRef = document.querySelector("body");
console.log(bodyRef);

const changeColor = (event) => {
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorSpanRef.textContent = bodyRef.style.backgroundColor;
}

btnRef.addEventListener("click", changeColor);