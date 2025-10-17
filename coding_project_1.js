// Grab form IDs
const form = document.getElementById("feedback-form");
const formResponse = document.getElementById("form-response");
const tooltip = document.getElementById("tooltip");

function feedbackDisplay (feedbackText) {
    const box = document.getElementById("feedback-display")
    const item = document.createElement('div');
    item.textContent = feedbackText.trim();
    box.appendChild(item);
}

// Submit event listener
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = document.getElementById("comments").value;

    if (feedback.length > 10) {
        formResponse.textContent = "Thank you for your feedback."
        feedbackDisplay(feedback); 
        form.reset();
    }
    else {
        formResponse.textContent = "Please provide more feedback."
    }
})


// Character counter
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


// Event bubbling for all input fields
form.addEventListener('input', (e) => {
  const element = e.target;
  if (!element.matches('input, textarea')) return;

  if (element.name === 'name') {
    element.setCustomValidity(element.value.trim().length ? '' : 'Name is required');
  }

  if (element.name === 'email') {
    element.setCustomValidity(element.validity.typeMismatch ? 'Enter a valid email' : '');
  }

  if (element.name === 'comments') {
    formResponse.textContent = element.value.length > 10 ? '' : 'Please provide more feedback.';
  }
});

// Use stopPropogation() to prevent background clicks from triggering form-related events
form.addEventListener('click', function (event) {
    event.stopPropagation();
  });

document.addEventListener('click', function (event) {
    console.log('Background click');
  });


// Display tooltip on mouseover and hide on mousedown
function showTooltip(target, event) {
  const msg = target.getAttribute("data-tooltip");
  if (!msg) return;
  tooltip.textContent = msg;
  tooltip.style.left = `${event.clientX}px`;
  tooltip.style.top = `${event.clientY - 12}px`;
  tooltip.setAttribute("data-show", "true");
  tooltip.setAttribute("aria-hidden", "false");
}

function hideTooltip() {
  tooltip.removeAttribute("data-show");
  tooltip.setAttribute("aria-hidden", "true");
}

form.addEventListener('mouseover', (e) => {
  const el = e.target;
  if (el.matches('input, textarea')) showTooltip(el, e);
});

form.addEventListener('mousemove', (e) => {
  if (tooltip.hasAttribute('data-show')) {
    tooltip.style.left = `${e.clientX}px`;
    tooltip.style.top = `${e.clientY - 12}px`;
  }
});

form.addEventListener('mouseout', (e) => {
  const element = e.target;
  if (element.matches('input, textarea')) hideTooltip();
});