// Напиши скрипт, який реагує на зміну значення 
// input#font-size-control (подія input) і змінює 
// інлайн-стиль span#text, оновлюючи властивість 
// font-size. В результаті, перетягуючи повзунок, 
// буде змінюватися розмір тексту.

const fontSizeControlRef = 
document.querySelector("#font-size-control");
console.log(fontSizeControlRef);


const textRef = document.querySelector('#text');
console.log(textRef);

const updFontSize = ({ currentTarget }) => (
    textRef.style.fontSize = `${currentTarget.value}px`
);

fontSizeControlRef.addEventListener("input", updFontSize);
