const listСategories = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${listСategories.length}`);

listСategories.forEach(elem => {
    console.log(`Category: ${elem.firstElementChild.textContent}`);
    console.log(`Elements: ${elem.lastElementChild.querySelectorAll('li').length}`);
})

