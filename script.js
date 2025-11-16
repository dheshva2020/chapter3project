const buttons = document.querySelectorAll(".toggle-btn");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");

    });
});

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const details = btn.nextElementSibling;

    if (details.style.display === "none") {
      details.style.display = "block";
      btn.textContent = "Hide Details";
    } else {
      details.style.display = "none";
      btn.textContent = "Show Details";
    }
    });
});
        const targetElement = document.getElementById(targetId);
        if (targetElement.style.display === "none") {
            targetElement.style.display = "block";
        } else {
            targetElement.style.display = "none";
        }
        const form = document.getElementById("data-form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const nameinput = document.getElementById("name-input").value;
            const ageInput = document.getElementById("age-input").value;
            console.log(`Name: ${nameInput}, Age: ${ageInput}`);
        });
        const emailinput = document.getElementById("email-input");
        emailinput.addEventListener("input", () => {
            const emailValue = emailinput.value;    
            const messageinput = document.getElementById("message-input");
            if (emailValue.includes("@")) {
                messageinput.disabled = false;
            } else {
                messageinput.disabled = true;
            }
        });
        const error = document.getElementById("error-message");
        const passwordInput = document.getElementById("password-input");
        passwordInput.addEventListener("input", () => {
            const passwordValue = passwordInput.value;  
            if (passwordValue.length < 8) {
                error.textContent = "Password must be at least 8 characters long.";
            } else {
                error.textContent = "";
            }
        });
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = document.getElementById("name-input").value;
        const ageInput = document.getElementById("age-input").value;
        console.log(`Name: ${nameInput}, Age: ${ageInput}`);
    });
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;  
                const longitude = position.coords.longitude;

fetch(`https://api.example.com/weather?lat=${latitude}&lon=${longitude}`)
                    .then(response => response.json())
                    .then(data => { 
                        const weatherDiv = document.getElementById("weather-info");
                        weatherDiv.textContent = `Temperature: ${data.temperature}°C, Condition: ${data.condition}`;
                    });
            }
        );
