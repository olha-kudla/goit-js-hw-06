// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в 
// його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає 
// зеленим, якщо неправильна кількість - червоним.

const inputRef = document.querySelector("#validation-input");
console.log(inputRef);

inputRef.addEventListener("blur", (event) => {
    const inputValue = inputRef.value.length;

    if (inputValue === Number(inputRef.dataset.length)) {
        inputRef.classList.add("valid");
        inputRef.classList.remove("invalid");
    } else {
        inputRef.classList.remove("valid");
        inputRef.classList.add("invalid");
    }
})