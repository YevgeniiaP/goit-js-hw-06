const allCategories = document.querySelector("ul#categories");
const itemCategories = allCategories.querySelectorAll(".item")
console.log(`Number of categories: ${itemCategories.length}`);

itemCategories.forEach((subItem) => {
  console.log("Category:", subItem.querySelector(`h2`).textContent);
  console.log("Elements:", subItem.querySelectorAll(`li`).length);
});


