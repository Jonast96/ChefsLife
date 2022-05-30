import {
    openAndCloseHamburgerMenu
} from "./utils.js";



const submitButton = document.querySelector(".submit_btn");

const subjectInput = document.getElementById("subject")
const subjectError = document.querySelector(".subject_error")

const nameInput = document.getElementById("name")
const nameError = document.querySelector(".name_error")

const questionInput = document.getElementById("question")
const questionError = document.querySelector(".question_error")

const emailInput = document.getElementById("email")
const emailError = document.querySelector(".email_error")

const openModal = document.querySelector(".modal_container")




submitButton.addEventListener("click", () => {

    function checkLength(inputLength, minimumLength, failMessage, failColor) {
        if (inputLength >= minimumLength) {
            failColor.style.borderColor = "green"
            failMessage.style.display = "none"
        } else {
            failMessage.style.color = "red"
            failColor.style.borderColor = "red"
            failMessage.style.display = "block"
        }
    }

    checkLength(questionInput.value.length, 25, questionError, questionInput)
    checkLength(subjectInput.value.length, 15, subjectError, subjectInput)
    checkLength(nameInput.value.length, 5, nameError, nameInput)





    function validateEmail(email) {
        const regEx = /\S+@\S+\.\S+/
        const patterMatches = regEx.test(email)
        return patterMatches
    };

    if (validateEmail(email.value)) {
        emailError.style.display = "none"
        emailInput.style.borderColor = "green"
    } else {
        emailError.style.display = "block"
        emailInput.style.borderColor = "red"
        emailError.style.color = "red"
    };

    if (questionInput.value.length >= 25 && subjectInput.value.length >= 15 && nameInput.value.length >= 5 && validateEmail(email.value)) {
        openModal.classList.add("open")

    } else {
        console.log("no work")
        openModal.classList.remove("open")
    }

    openModal.addEventListener("click", (x) => {
        if (x.target.classList.contains("modal_container")) {
            openModal.classList.remove("open")
        }
    })
})