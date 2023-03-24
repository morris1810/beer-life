var productList = [
    {
        productName:"Anchor",
        productDesc:"small can",
        productPrice: "10.00",
        productInfo: "320ml",
        imgUrlPath: "assetsBeerLife/img/beer/Anchor_Small_Can.png"
    },
    {
        productName:"Asahi",
        productDesc:"small can",
        productPrice: "10.00",
        productInfo: "320ml",
        imgUrlPath: "assetsBeerLife/img/beer/Asahi_Small_Can.png"
    },
    {
        productName:"BLANC 1664",
        productDesc:"small can",
        productPrice: "10.00",
        productInfo: "320ml",
        imgUrlPath: "assetsBeerLife/img/beer/Blanc1664_Small_Can.png"
    },
    {
        productName:"Carlsberg",
        productDesc:"small can",
        productPrice: "10.00",
        productInfo: "320ml",
        imgUrlPath: "assetsBeerLife/img/beer/Carlsberg_Small_Can.png"
    },
    {
        productName:"Connor's",
        productDesc:"small can",
        productPrice: "10.00",
        productInfo: "320ml",
        imgUrlPath: "assetsBeerLife/img/beer/Connor's_Small_Can.png"
    },
    {
        productName:"Edelweiss",
        productDesc:"long can",
        productPrice: "10.00",
        productInfo: "330ml",
        imgUrlPath: "assetsBeerLife/img/beer/Edelweiss_Long_Can.png"
    },
    {
        productName:"Erdinger",
        productDesc:"long can",
        productPrice: "10.00",
        productInfo: "330ml",
        imgUrlPath: "assetsBeerLife/img/beer/Erdinger_Long_Can.png"
    },
    {
        productName:"Guinness",
        productDesc:"small can",
        productPrice: "10.00",
        productInfo: "320ml",
        imgUrlPath: "assetsBeerLife/img/beer/Guinness_Small_Can.png"
    },
    {
        productName:"Heineken",
        productDesc:"small can",
        productPrice: "10.00",
        productInfo: "320ml",
        imgUrlPath: "assetsBeerLife/img/beer/Heineken_Small_Can.png"
    },
    {
        productName:"KirinIchiban",
        productDesc:"small can",
        productPrice: "10.00",
        productInfo: "320ml",
        imgUrlPath: "assetsBeerLife/img/beer/KirinIchiban_Small_Can.png"
    },
    {
        productName:"RoyalStout",
        productDesc:"small can",
        productPrice: "10.00",
        productInfo: "320ml",
        imgUrlPath: "assetsBeerLife/img/beer/RoyalStout_Small_Can.png"
    },
    {
        productName:"Sapporo",
        productDesc:"small can",
        productPrice: "10.00",
        productInfo: "320ml",
        imgUrlPath: "assetsBeerLife/img/beer/Sapporo_Small_Can.png"
    },
    {
        productName:"SingHa",
        productDesc:"small can",
        productPrice: "10.00",
        productInfo: "320ml",
        imgUrlPath: "assetsBeerLife/img/beer/SingHa_Small_Can.png"
    },
    {
        productName:"SKOL",
        productDesc:"small can",
        productPrice: "10.00",
        productInfo: "320ml",
        imgUrlPath: "assetsBeerLife/img/beer/SKOL_Small_Can.png"
    },
    {
        productName:"Tiger",
        productDesc:"small can",
        productPrice: "10.00",
        productInfo: "320ml",
        imgUrlPath: "assetsBeerLife/img/beer/Tiger_Small_Can.png"
    },
]

function addToCart() {
    alert("The item was added to the cart. Kindly change the quantity on the payment page.")
}

function printProduct(target, list) {
    const listLength = list.length;
    const container = target;

    target.innerHTML = " ";

    if (list.length > 0) {
        for (let i = 0; i < listLength; i++) {
            //Creat html element
    
            //<div class="productItem"></div>
            const productItem = document.createElement("div");
            productItem.classList.add("productItem");
    
            //<div class="imgContainer"></div>
            const imgContainer = document.createElement("div");
            imgContainer.classList.add("imgContainer");
            
            //<img src="" class="productImg">
            const productImg = document.createElement("img");
            productImg.classList.add("productImg");
            productImg.setAttribute("src", list[i].imgUrlPath);
    
            //<div class="textContainer"></div>
            const textContainer = document.createElement("div");
            textContainer.classList.add("textContainer");
            
            //<div class="descContainer"></div>
            const descContainer = document.createElement("div");
            descContainer.classList.add("descContainer");
    
            //<h6 class="productName">Edelweiss</h6>
            const productName = document.createElement("h6");
            productName.classList.add("productName");
            productName.id = list[i].productName;
            productName.innerText = list[i].productName;
    
            //<p class="productDesc"></p>
            const productDesc = document.createElement("p");
            productDesc.classList.add("productDesc");
            productDesc.innerText = list[i].productDesc;
    
    
            //<div class="priceContainer"></div>
            const priceContainer = document.createElement("div");
            priceContainer.classList.add("priceContainer");
    
            //<div class="flexContainer"></div>
            const flexContainer = document.createElement("div");
            flexContainer.classList.add("flexContainer");
    
            //<p class="productPrice"></p>
            const productPrice = document.createElement("p");
            productPrice.classList.add("productPrice");
            
            //<span class="currency">RM</span>
            const currency = document.createElement("span");
            currency.classList.add("currency");
    
            //<input class="priceAmount" type="text" value="220.00" readonly>
            const priceAmount = document.createElement("input");
            priceAmount.classList.add("priceAmount");
            priceAmount.setAttribute("type", "text");
            priceAmount.setAttribute("value", list[i].productPrice);
            priceAmount.setAttribute("readonly", true);
    
            //<p class="productInfo"></p>
            const productInfo = document.createElement("p");
            productInfo.classList.add("productInfo");
            productInfo.innerText = list[i].productInfo;
    
            //<button class="addCartBtn">Add to cart</button>
            const addCartBtn = document.createElement("button");
            addCartBtn.classList.add("addCartBtn");
            addCartBtn.innerText = "Add to cart";
            addCartBtn.addEventListener("click", (e) => {
                addToCart(list[i].productName);
            })
    
    
            //Make hierarchy
            imgContainer.appendChild(productImg);
    
            descContainer.appendChild(productName);
            descContainer.appendChild(productDesc);
            textContainer.appendChild(descContainer)
    
    
            productPrice.appendChild(currency);
            productPrice.appendChild(priceAmount);
            flexContainer.appendChild(productPrice);
            flexContainer.appendChild(productInfo);
    
            priceContainer.appendChild(flexContainer);
            priceContainer.appendChild(addCartBtn);
            textContainer.appendChild(priceContainer);
    
            productItem.appendChild(imgContainer);
            productItem.appendChild(textContainer);
    
    
    
    
            //Add HTML Element into the target
            container.appendChild(productItem);                
        }
    } else {
        const noProductFound = document.createElement("p");
        noProductFound.classList.add("noProductFound");
        noProductFound.innerHTML = "No similar product."
        target.appendChild(noProductFound);
    }
}

function searchItem(seachParam) {
    if (seachParam !== null) {
        var searchResultList = [];
        productList.forEach((element) => {
            if(element.productName.toLowerCase().includes(seachParam.toLowerCase())) {
                searchResultList.push(element);
            }
        });
        productList = searchResultList;
    }
}

function addToCart(itemName) {
    console.log(itemName);
    const oldData = localStorage.getItem("cartItem");
    let newData = "";
    if (oldData != null) {
        if (!oldData.includes(itemName)) {
            newData = `${oldData}|${itemName}`;
            localStorage.setItem("cartItem", newData);
        }
    } else {
        newData = itemName;
        localStorage.setItem("cartItem", newData);
    }
    alert("The item was added to the cart. Kindly change the quantity on the payment page.");
}


window.addEventListener("load", () => {
    const productContainer = document.getElementById("productContainer");
    const seachValue = new URLSearchParams(window.location.search);

    searchItem(seachValue.get("search"));
    printProduct(productContainer, productList);
})