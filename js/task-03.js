const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galleryEl = document.querySelector(".gallery");
// const buttonPrettierEl = document.querySelector(".js-prettier-style"); хотел добавить кнопку,
// чтобы при ее нажатии стили применялись, но решил сделать по ТЗ, а переменную удалить забыл.
console.log(galleryEl);

galleryEl.style.cssText =
  "display: flex; align-items:center; gap:10px; list-style:none; ";
galleryEl.insertAdjacentHTML("afterbegin", createImagesFromArr(images));

function createImagesFromArr(objectArr) {
  return objectArr
    .map(
      ({ url, alt }) =>
        `<li><img src = "${url}" alt = "${alt}" width = "400px"></li>`
    )
    .join("");
}
