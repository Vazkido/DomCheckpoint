let products = document.querySelectorAll(".card-item");

products.forEach((item) => {
  let plus = item.querySelector(".fa-plus-circle");
  let minus = item.querySelector(".fa-minus-circle");
  let delBtn = item.querySelector(".fa-trash-alt");
  let heart = item.querySelector(".fa-heart");
  let qty = item.querySelector(".quantity");
  let quantity = parseInt(qty.textContent);
  let price = parseInt(
    item.querySelector(".unit-price").textContent.replace("$", "")
  );
  plus.addEventListener("click", () => {
    quantity++;
    qty.innerHTML = quantity;
    calcTotal("add");
  });
  minus.addEventListener("click", () => {
    if (quantity > 0) {
      quantity--;
      qty.textContent = quantity;
      calcTotal("subtract");
    }
  });
  delBtn.addEventListener("click", () => {
    let total = document.querySelector(".total");
    total.textContent = parseInt(total.textContent) - price * quantity;
    item.remove();
  });
  heart.addEventListener("click", () => {
    if (heart.style.color === "red") {
      heart.style.color = "black";
    } else {
      heart.style.color = "red";
    }
  });

  const calcTotal = (operation) => {
    let total = document.querySelector(".total");
    if (operation === "add") {
      total.textContent = parseInt(total.textContent) + price;
    } else {
      total.textContent = parseInt(total.textrContent) - price;
    }
  };
});
