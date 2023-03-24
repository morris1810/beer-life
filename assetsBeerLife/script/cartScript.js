//This productList is duplocate form productScript.js
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

window.addEventListener("load", () => {

    //Print out the item that user was selected.
    function printItem(target, list) {
        const listLength = list.length;
        const container = target;
    
        target.innerHTML = " ";
    
        if (list.length > 0) {
            for (let i = 0; i < listLength; i++) {

                //<div class="listItem" id="Guinness"></div>
                const listItem = document.createElement("div");
                listItem.classList.add("listItem");
                listItem.id = list[i].productName;
                //<div class="imgContainer"></div>
                const imgContainer = document.createElement("div");
                imgContainer.classList.add("imgContainer");
                //<img src="imagePath.png" alt="item photo" class="itemImg">
                const itemImg = document.createElement("img");
                itemImg.classList.add("itemImg");
                itemImg.setAttribute("src", list[i].imgUrlPath);
                itemImg.setAttribute("alt", "item photo");
                //<div class="infoContainer"></div>
                const infoContainer = document.createElement("div");
                infoContainer.classList.add("infoContainer");
                //<p class="itemName">Guinness</p>
                const itemName = document.createElement("p");
                itemName.classList.add("itemName");
                itemName.innerText = list[i].productName;
                //<div class="amountContainer"></div>
                const amountContainer = document.createElement("div");
                amountContainer.classList.add("amountContainer");
                //<p class="itemAmount"></p>
                const itemAmount = document.createElement("p");
                itemAmount.classList.add("itemAmount");
                //<span class="currency">RM</span>
                const currency1 = document.createElement("span");
                currency1.classList.add("currency");
                currency1.innerHTML = "RM";
                //<input type="text" readonly class="subPrice"value="10.00">
                const subPrice = document.createElement("input");
                subPrice.classList.add("subPrice");
                subPrice.setAttribute("type", "text");
                subPrice.setAttribute("readonly", true);
                subPrice.setAttribute("value", list[i].productPrice);
                //<span class="times">x</span>
                const times = document.createElement("span");
                times.classList.add("times");
                times.innerText = "x";
                // <input type="number" name="quantity" class="quantity" min="0" value="1" step="1" targetItem="Guinness"></input>
                const quantity = document.createElement("input");
                quantity.classList.add("quantity");
                quantity.setAttribute("type", "number");
                quantity.setAttribute("name", "quantity");
                quantity.setAttribute("min", "0");
                quantity.setAttribute("value", "1");
                quantity.setAttribute("step", "1");
                quantity.setAttribute("targetItem", list[i].productName);
                //<p class="itemPrice"></p>
                const itemPrice = document.createElement("p");
                itemPrice.classList.add("itemPrice");
                //<span class="currency">RM</span>
                const currency2 = document.createElement("span");
                currency2.classList.add("currency");
                currency2.innerHTML = "RM";
                // <input type="text" readonly value="0.00" class="subTotal">
                const subTotal = document.createElement("input");
                subTotal.classList.add("subTotal");
                subTotal.setAttribute("type", "text");
                subTotal.setAttribute("readonly", true);
                subTotal.setAttribute("value", "0.00");

                //Make hierarchy
                imgContainer.appendChild(itemImg);
                listItem.appendChild(imgContainer);

                itemAmount.appendChild(currency1);
                itemAmount.appendChild(subPrice);
                itemAmount.appendChild(times);
                itemAmount.appendChild(quantity);

                amountContainer.appendChild(itemAmount);

                itemPrice.appendChild(currency2);
                itemPrice.appendChild(subTotal);
                amountContainer.appendChild(itemPrice);

                infoContainer.appendChild(itemName);
                infoContainer.appendChild(amountContainer);
                listItem.appendChild(infoContainer);
        
                //Add HTML Element into the target
                container.appendChild(listItem);                
            }
        } else {
            const noItemFound = document.createElement("p");
            noItemFound.classList.add("noItemFound");
            noItemFound.innerHTML = "Please select add something to cart from the <a href=\"product.html\">product page</a>."
            target.appendChild(noItemFound);
        }
    }

    function getCartItem(selectedItem) {
        let tmpList = [];
        const searchItemList = selectedItem != null ? selectedItem.split("|") : [];
        if (searchItemList.length > 0) {
            productList.forEach((element) => {
                if(searchItemList.includes(element.productName)) {
                    tmpList.push(element);
                }
            })
        }
        return tmpList;
    }

    const searchParam = window.localStorage.getItem("cartItem");
    const selectedItemList = getCartItem(searchParam);

    const listItemContainer = document.getElementById("listItemContainer");

    printItem(listItemContainer, selectedItemList);

    


    //Check Valid
    const paymentForm = document.getElementById("paymentForm");
    const payBtn = document.getElementById("payBtn");
    let inputList = document.querySelectorAll("#paymentForm .check");
    var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    function checkValid(e) {
        switch (e.name) {
            case "customerName":
                if(e.value.length > 0) {
                    e.classList.add("valid");
                } else {
                    e.classList.remove("valid");
                }
                break;
            case "customerEmail":
                if(emailPattern.test(e.value)) {
                    e.classList.add("valid");
                } else {
                    e.classList.remove("valid");
                }
                break;
            case "customerAddress":
                if(e.value.length > 0) {
                    e.classList.add("valid");
                } else {
                    e.classList.remove("valid");
                }
                break;
            default:
                break;
        }
        checkAllValid();
    }

    function checkAllValid() {
        var allValid = false;
        for (const element of inputList) {
            if (!(element.classList.contains("valid"))) {
                allValid = false;
                break;
            }
            allValid = true;
        }
        if(allValid) {
            payBtn.classList.add("active")
        } else {
            payBtn.classList.remove("active")
        }
    }

    function showInvalidInput() {
        for (const element of inputList) {
            if (!(element.classList.contains("valid"))) {
                alert(`Invalid input for [${(element.name).replace("customer", " ")} ]`)
                break;
            }
        }
    }

    inputList.forEach(element => {
        element.addEventListener("input", (e) => {
            checkValid(element);
        })
    });

    payBtn.addEventListener("click", (e)=> {
        e.preventDefault();
        if (!(payBtn.classList.contains("active"))) {
            showInvalidInput();
        } else if (parseFloat(document.getElementById("total").value) <= 0) {
            alert("Amount cannot be RM 0!");
        } else {
            window.localStorage.removeItem("cartItem");
            paymentForm.submit();
            alert("The order was send to us, please wait for the confirmation email. Thank you. 🍺-(￣▽￣o)ノ");
        }
    })

    //Change quantity
    function calcPrice() {
        //Calc for each
        const buyItems = document.querySelectorAll(".listItem");
        for (let i = 0; i < buyItems.length; i++) {
            
            const quantity = buyItems[i].querySelector(".quantity");
            const itemPrice = buyItems[i].querySelector(".subPrice");
            const itemAmount = buyItems[i].querySelector(".subTotal");
            if (quantity.value == NaN) {
                quantity.value = "0";
            } else {
                quantity.value = Math.round(quantity.value);
            }
            itemAmount.value = (parseFloat(itemPrice.value) * parseFloat(quantity.value)).toFixed(2);
        }

        //Calc for total
        const eachPrice = document.querySelectorAll(".subTotal");
        var totalAmount = 0;
        eachPrice.forEach((element) => {
            totalAmount += parseFloat(element.value);
        })
        document.getElementById("total").value = totalAmount.toFixed(2);
    }
    calcPrice();

    const quantityList = document.querySelectorAll(".quantity");
    quantityList.forEach((element) => {
        element.addEventListener("input", calcPrice)
    })
})