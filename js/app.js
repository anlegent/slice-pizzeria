let cartValue = document.querySelector(".cart-value")
let cartProducts = document.querySelector(".basket-products")
let basketEmpty = document.querySelector(".empty-basket")
let basketFull = document.querySelector(".full-basket")

let pizzas = 0
let fullPrice = 0

cartValue.textContent = `Votre panier (${pizzas})`

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
    
    for (let i = 0; i < data.length; i++) {
        const pizzasWrapper = document.querySelector(".pizzas-wrapper");
        const pizzaItem = document.createElement("div");
        pizzaItem.className = "pizza-item";
        
        const pizzaImage = document.createElement("img");
        pizzaImage.className = "pizza-picture";
        pizzaImage.src = data[i].image;
        pizzaImage.alt = data[i].name;
        
        const addToCartBtn = document.createElement("span");
        addToCartBtn.className = "add-to-cart-btn";
        addToCartBtn.textContent = "Ajouter au panier";
        
        const addToCartBtnImg = document.createElement("img");
        addToCartBtnImg.src = "../images/carbon_shopping-cart-plus.svg";
        addToCartBtnImg.alt = "basket-logo";
        
        const pizzaInfos = document.createElement("ul");
        pizzaInfos.className = "pizza-infos";
        
        const pizzaName = document.createElement("li");
        pizzaName.className = "pizza-name";
        pizzaName.textContent = data[i].name;
        
        const pizzaPrice = document.createElement("li");
        pizzaPrice.className = "pizza-price";
        pizzaPrice.textContent = "$" + data[i].price;
        
        pizzasWrapper.appendChild(pizzaItem);
        pizzaItem.appendChild(pizzaImage);
        pizzaItem.appendChild(addToCartBtn);
        addToCartBtn.appendChild(addToCartBtnImg);
        pizzaItem.appendChild(pizzaInfos);
        pizzaInfos.appendChild(pizzaName);
        pizzaInfos.appendChild(pizzaPrice);
        
        addToCartBtn.addEventListener("click", () => {
            console.log(`Added ${data[i].name} to cart`);
            pizzas++;
            console.log(pizzas);
            cartValue.textContent = `Votre panier (${pizzas})`;
            if (pizzas >= 1) {
                basketEmpty.style.display = "none";
                basketFull.style.display = "grid";
            } else if (pizzas <= 0) {
                basketEmpty.style.display = "grid";
                basketFull.style.display = "none";
            }
            let productItem = document.createElement("li");
                productItem.className = "basket-product-item";

            let productItemName = document.createElement("span");
                productItemName.classList = "basket-product-item-name";
                productItemName.textContent = data[i].name;

            let productDetails = document.createElement("span");
                productDetails.className = "basket-product-details";

            let productDetailsQuantity = document.createElement("span");
                productDetailsQuantity.classList = "basket-product-details-quantity";
                productDetailsQuantity.textContent = "";
                
            let productDetailsUnitPrice = document.createElement("span");
                productDetailsUnitPrice.classList = "basket-product-details-unit-price";
                productDetailsUnitPrice.textContent ="@" + " " +  "$" + data[i].price;
            
            let productDetailsTotalPrice = document.createElement("span");
                productDetailsTotalPrice.classList = "basket-product-details-total-price";
                productDetailsTotalPrice.textContent = "";

            let removeProduct = document.createElement("img");
                removeProduct.classList = "basket-product-remove-icon";
                removeProduct.src = "../images/remove-icon.svg";
                removeProduct.alt = "";

            let totalOrder = document.createElement("p");
                totalOrder.classList = "total-order";

            let totalOrderTitle = document.createElement("span");
                totalOrderTitle.classList = "total-order-title";
                totalOrderTitle.textContent = "Order total";

            let totalOrderPrice = document.createElement("span");
                totalOrderPrice.classList = "total-order-price";
                totalOrderPrice.textContent = fullPrice;

            cartProducts.appendChild(productItem);
            productItem.appendChild(productItemName);
            productItem.appendChild(productDetails);
            productDetails.appendChild(productDetailsQuantity);
            productDetails.appendChild(productDetailsUnitPrice);
            productDetails.appendChild(productDetailsTotalPrice);
            totalOrder.appendChild(totalOrderTitle);
            totalOrder.appendChild(totalOrderPrice);

        });
    }
    }
    app()

    window.addEventListener("load", ()=> {
        basketFull.style.display = "none";
    })