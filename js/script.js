/*// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const img2 = document.querySelectorAll('img[src^="img/imagem"]');
console.log(img2);

// Selecione todos os links internos (onde o href começa com #)
const link = document.querySelectorAll('[href^="#"]');
console.log(link);
// Selecione o primeiro h2 dentro de .animais-descricao
const selec = document.querySelector('.animais-descricao h2');
console.log(selec);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');

console.log(paragrafos[paragrafos.length - 1]);
*/

// Mostre no console cada parágrado do site
let paragrafos = document.querySelectorAll('p');

//paragrafos.forEach((item) =>{
//console.log(item);
//});

// Mostre o texto dos parágrafos no console

//paragrafos.forEach((item) => {
//console.log(item.innerText);
//});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach((item) => console.log(i++));

imgs.forEach(() => i++);
