window.addEventListener("load", () => {

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
            paymentForm.submit();
            alert("Submitted");
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
            quantity.value = Math.round(quantity.value);
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