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

let charCount = 0

document.querySelector("html").addEventListener("keydown", event => {
    if (event.key.length === 1) {
    charCount += 1;
  }
  else if (event.key === "Backspace") {
    charCount = Math.max(0, charCount - 1);
  }

  console.log(charCount);
});