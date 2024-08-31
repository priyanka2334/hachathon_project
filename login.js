const mainLoginbtn = document.querySelector(".login-btn")
const crossbtn = document.querySelector(".cross")
const loginPage = document.querySelector(".login-wrapper")
// ==============form=============
const loginbtn = document.querySelector("#addForm")

loginbtn.addEventListener("submit", formSubmit)

const user = document.getElementById("email")
const pass= document.getElementById("password")
function formSubmit(e) {
    e.preventDefault();

const userMail=user.value;
const password=pass.value;

    const payload = {
        userMail: userMail,
        password: password,
    };
    console.log(payload, "this is payload");
    clearInputField();
}

function clearInputField() {
    //    loginPage.classList.remove("open-modal")
    userMail.value = "";
    password.value = "";
}




mainLoginbtn.addEventListener("click", openpage)

function openpage() {
    loginPage.classList.add("open-modal")
}

crossbtn.addEventListener("click", function () {
    loginPage.classList.remove("open-modal")
})