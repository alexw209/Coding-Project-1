const form = document.getElementById("feedback-form")
const formResponse = document.getElementById("form-response")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = document.getElementById("comments").value;

    if (feedback.length > 10) {
        formResponse.textContent = "Thank you for your feedback."
        form.reset();
    }
    else {
        formResponse.textContent = "Please provide more feedback."
    }
})