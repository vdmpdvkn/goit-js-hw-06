const itemRefs = document.querySelectorAll(".item");
// console.log("Для меня:", itemRefs); //
console.log("Number of categories:", itemRefs.length);

itemRefs.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
