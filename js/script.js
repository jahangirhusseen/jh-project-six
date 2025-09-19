let allPlantsURL = "https://openapi.programming-hero.com/api/plants";
let allCategories = "https://openapi.programming-hero.com/api/categories";

// Get Categories

const getCategories = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayAllCategories(json.categories));
};
// Get Categories
const getAllPlantsURL = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((json) => displayAllPlantsData(json.plants));
};

// spinner
const manageSpinner = (status) => {
  if (status == true) {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("card-container").classList.add("hidden");
  } else {
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("card-container").classList.remove("hidden");
  }
};

// display All Categories
const displayAllCategories = (categories) => {
  manageSpinner(true);
  let categoryName = document.getElementById("categories-container");
  categoryName.innerHTML = "";
  for (const category of categories) {
    let categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
     <button id="categoryBtn-${category.id}" class="btn category-btn w-full bg-transparent hover:bg-[#15803D] hover:text-white border-0 justify-start my-0 space-y-0" onclick="categoryActionBtn('${category.id}')">
          ${category.category_name}
    </button>
    `;
    categoryName.append(categoryDiv);
  }
};

// Remove Category Active Button
const removeActiveClass = () => {
  const categoryBtn = document.querySelectorAll(".category-btn");
  categoryBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
};
// Add Category Active Button
const categoryActionBtn = (id) => {
  const categoryUrl = `https://openapi.programming-hero.com/api/category/${id}`;
  manageSpinner(true);
  let categoryId = document.getElementById(`categoryBtn-${id}`);
  fetch(categoryUrl)
    .then((res) => res.json())
    .then((json) => {
      removeActiveClass();
      categoryId.classList.add("active");
      displayAllPlantsData(json.plants);
    });
};

// plantsDetails
const plantsDetails = async (id) => {
  // get url
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  const data = details.plants;

  // show Modal
  document.getElementById("plant_modal").showModal();

  // Display Details Plant
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
  <div class="space-y-2">
            <h2 class="card-title">${data.name}</h2>
            <figure class="">
              <img
                src="${data.image}" class="w-full h-60 object-cover"
                alt="Shoes"
                class="rounded-xl"
              />
            </figure>
            <h4><span class="font-semibold text-lg">Category : </span>${data.category}</h4>
            <h4><span class="font-semibold text-lg">Price : ৳</span>${data.price}</h4>
            <p>
              <span class="font-semibold text-lg">Description : </span> ${data.description}
            </p>

            <div class="modal-action">
              <form method="dialog">
                <button class="btn">Close</button>
              </form>
            </div>
          </div>
  `;
};

let totalAmount = 0;
let totalContainer = document.getElementById("total-amount-container");

const totalAmountManage = (amount) => {
  totalAmount += amount;
  totalContainer.innerHTML = `
  <div  class="flex justify-between my-2 items-center font-geist border-t border-dotted border-t-[#8C8C8C] py-2">
   <h2 class="font-semibold mb-2">Total:</h2>
            <p>৳<span id="finalAmount"> ${totalAmount}</span></p>
  </div>
  `;
};

// Display Cart History Data
const displayCartHistory = (data) => {
  // Alert Message
  alert(`${data.name} has been added to the cart`);

  let matchedItems = document.getElementById(`actItems-${data.id}`);
  if (matchedItems) {
    let countSpan = matchedItems.querySelector(".count-value");
    let currentValue = parseInt(countSpan.innerText);

    countSpan.innerText = currentValue + 1;
  } else {
    const addCartContainer = document.getElementById("add-cart-container");
    const div = document.createElement("div");
    div.id = `actItems-${data.id}`;

    div.innerHTML = `<div class="flex justify-between items-center mb-4 bg-[#F0FDF4] px-3 py-2 rounded-lg">
  <div>
              <h2 class="text-sm font-semibold mb-2">${data.name}</h2>
              <p   class="font-geist text-base text-[#1F293795]">
                ৳<span id="item-price-${data.id}"> ${data.price} </span> x <span class="count-value"> 1 </span> 
              </p>
            </div>
            <div onclick="removeItem(${data.id})" id="removeAtcItems-${data.id}" class="cursor-pointer text-[#1F293795]">
              <i class="fa-solid fa-xmark"></i>
            </div>
            
  </div>
  `;
    addCartContainer.append(div);
  }
  totalAmountManage(data.price);
};

// handleAddToCart
const handleAddToCart = async (id) => {
  // get url
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayCartHistory(details.plants);
};

// removeItem
const removeItem = (id) => {
  let itemWrapper = document.getElementById(`actItems-${id}`);

  if (!itemWrapper) return;
  let countSpan = itemWrapper.querySelector(".count-value");
  let currentCount = parseInt(countSpan.innerText);

  let itemPrice = parseInt(
    document.getElementById(`item-price-${id}`).textContent
  );

  itemWrapper.remove();
  totalAmount -= itemPrice * currentCount;

  if (totalAmount <= 0) {
    totalContainer.innerHTML = "";
    totalAmount = 0;
    return;
  } else {
    finalAmount.innerText = totalAmount;
  }
};

// Display All Plants Data
const displayAllPlantsData = (plants) => {
  let cardPlants = document.getElementById("card-container");
  cardPlants.innerHTML = "";

  for (const plant of plants) {
    let card = document.createElement("div");

    card.innerHTML = `
          <div class="card bg-base-100 shadow-sm p-4 pb-0 ">
              <figure>
              <img class="w-full h-48 object-cover" src="${plant.image}" alt="plants.image"/>
              </figure>
              <div class="card-body px-0 space-y-3">
                  <h2 onclick="plantsDetails('${plant.id}')" class="card-title">${plant.name}</h2>
                  <p class="text-xs line-clamp-3 ">${plant.description}</p>
                  <div class="flex justify-between">
                      <div class="bg-[#DCFCE7] text-[#15803D] text-sm font-medium font-geist border-transparent px-4 py-1 rounded-full">
                     ${plant.category}
                      </div>
                  <div class="font-semibold text-[#1F2937] font-geist">
                      <span class="font-bold">৳</span>${plant.price}
                  </div>
              </div>
              <button onclick="handleAddToCart('${plant.id}')" class="btn w-full bg-[#15803D] text-white border-transparent px-6 py-4 rounded-full">
                    Add to Cart
                  </button>
                </div>
              </div>
      `;
    cardPlants.append(card);
  }
  manageSpinner(false);
};
getCategories(allCategories);
getAllPlantsURL(allPlantsURL);
