const products = [
  { id: 1, title: 'Notebook', price: 1000 },
  { id: 2, title: 'Mouse', price: 100 },
  { id: 3, title: 'Keyboard', price: 250 },
  { id: 4, title: 'Gamepad', price: 150 },
];

const getProductHTMLString = (title, price) => {
  return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn">Добавить</button>
              </div>`;
};

const productsListHTML = document.querySelector('.products');
const list = products.map(good => getProductHTMLString(good.title, good.price));


const renderProducts = (listHTML, list) => {
  listHTML.innerHTML = list.join('');
  /*Запятые появляются так как мы выводим массив с равзедлителем в виде ",".
  Чтоб решить проблему можно добавить метод .join(''), который объединит все 
  элементы массива в строку и заменит разделитель на указанный в параметре
  (в нашем случае '')*/
}

renderProducts(productsListHTML, list);


