// Лічильник складається зі спану і кнопок, які по кліку повинні 
// збільшувати і зменшувати його значення 
// на одиницю.


// Створи змінну counterValue, в якій буде зберігатися поточне 
// значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або 
// зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const valueRef = document.querySelector("#value");  
const decrementRefBtn = document.querySelector('[data-action="decrement"]');
const incrementRefBtn = document.querySelector('[data-action="increment"]');

const clickDecrementBtn = (event) => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}

const clickIncrementBtn = (event) => {
    counterValue += 1;
    valueRef.textContent = counterValue;
}

decrementRefBtn.addEventListener("click", clickDecrementBtn);
incrementRefBtn.addEventListener("click", clickIncrementBtn);