const itemRefs = document.querySelectorAll(".item");

console.log("Number of categories:", itemRefs.length);
// console.log("Category: ", itemRefs.firstElementChild.textContent);\
itemRefs.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log("Elements:", item.lastElementChild.children.length);
});
