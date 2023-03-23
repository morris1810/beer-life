window.addEventListener("load", () => {
    const leadForm = document.getElementById("leadForm");
    const submitBtn = document.getElementById("submitBtn");
    const submitBtnContainer = document.getElementById("submitBtnContainer");
    const inputList = document.querySelectorAll("#leadForm input");
    var emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    function checkValid(e) {
        switch (e.name) {
            case "FirstName":
                if(e.value.length > 0) {
                    e.classList.add("valid");
                } else {
                    e.classList.remove("valid");
                }
                break;
            case "LastName":
                if(e.value.length > 0) {
                    e.classList.add("valid");
                } else {
                    e.classList.remove("valid");
                }
                break;
            case "Email":
                if(emailPattern.test(e.value)) {
                    e.classList.add("valid");
                } else {
                    e.classList.remove("valid");
                }
                break;
            case "Subject":
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
            submitBtnContainer.classList.add("active")
        } else {
            submitBtnContainer.classList.remove("active")
        }
    }

    function showInvalidInput() {
        for (const element of inputList) {
            if (!(element.classList.contains("valid"))) {
                alert(`Invalid input for [ ${element.name} ]`)
                break;
            }
        }
    }

    inputList.forEach(element => {
        element.addEventListener("input", (e) => {
            checkValid(element);
        })
    });

    submitBtn.addEventListener("click", (e)=> {
        e.preventDefault();
        if (!(submitBtnContainer.classList.contains("active"))) {
            showInvalidInput();
        } else {
            leadForm.submit();
            alert("Submitted");
        }
    })
})