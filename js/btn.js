let count = 0;

let addBtn = document.querySelectorAll(".incremnet");
let totalAmounts = document.getElementById("totalAmount");
let namota = document.querySelectorAll(".namota");

addBtn.forEach((data, index) => {
  data.addEventListener("click", function () {
    let currentValue = parseInt(namota[index].innerText);
    console.log(currentValue);

    count += parseInt(data.innerText);

    namota[index].innerText = currentValue + 1;
    totalAmounts.innerText = count;
  });
});
