async function app() {
const res = await fetch('http://51.38.232.174:3001/products', {
    method: 'GET',
    headers: {
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRvdG9AZXhhbXBsZS5jb20iLCJzdWIiOiJjMWQxZDgyOC0xOGMyLTQ0MDctYjc5OC02ZTdjYjY0MDY3ZmQiLCJpYXQiOjE3NDUzOTI2MDAsImV4cCI6MTc0NTQ3OTAwMH0.u97V9q_h2MI58bJ-pxa-kr_tGM_k3xcybBY9Uz89Z8A',
    'Content-Type': 'application/json',
    }
});

const data = await res.json();

console.log(data);

for (let i = 0; i <= data.length; i++) {
    const pizzasWrapper = document.querySelector("#pizzas-wrapper");
    const pizzaItem = document.createElement("div");
    pizzaItem.className = "pizza-item";
    const pizzaImage = document.createElement("img");
    pizzaImage.className = "pizza-picture";
    pizzaImage.src = data[i].image;
    pizzaImage.alt = data[i].name;
    const addToCartBtn = document.createElement("span");
    addToCartBtn.className = "add-to-cart-btn";
    addToCartBtn.id = "buyBtn";
    addToCartBtn.textContent = "Ajouter au panier"
    const addToCartBtnImg = document.createElement("img");
    addToCartBtnImg.src = "../images/carbon_shopping-cart-plus.svg";
    addToCartBtnImg.alt = "basket-logo";
    addToCartBtnImg.srcset = "";
    const pizzaInfos = document.createElement("ul");
    pizzaInfos.className = "pizza-infos";
    const pizzaName = document.createElement("li");
    pizzaName.className = "pizza-name";
    pizzaName.textContent = data[i].name;
    const pizzaPrice = document.createElement("li");
    pizzaPrice.className = "pizza-price"
    pizzaPrice.textContent = "$" + data[i].price;

    pizzasWrapper.appendChild(pizzaItem);
    pizzaItem.appendChild(pizzaImage);
    pizzaItem.appendChild(addToCartBtn);
    addToCartBtn.appendChild(addToCartBtnImg);
    pizzaItem.appendChild(pizzaInfos);
    pizzaInfos.appendChild(pizzaName);
    pizzaInfos.appendChild(pizzaPrice);
}
}
app()

