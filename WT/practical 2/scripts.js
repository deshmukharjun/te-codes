document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");
    const userTable = document.querySelector("#userTable tbody");
    const logoutBtn = document.getElementById("logoutBtn");

    // Function to validate email format
    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z]+_[a-zA-Z]+_[a-zA-Z]+@moderncoe\.edu\.in$/;
        return emailPattern.test(email);
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const users = JSON.parse(localStorage.getItem("users")) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem("loggedInUser", email);
                window.location.href = "profile.html";
            } else {
                document.getElementById("loginError").textContent = "Invalid email or password";
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("regEmail").value;
            const password = document.getElementById("regPassword").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            // Validate email format
            if (!validateEmail(email)) {
                document.getElementById("registerError").textContent = "Invalid email format. Use firstname_lastname_branch@moderncoe.edu.in";
                return;
            }

            if (password !== confirmPassword) {
                document.getElementById("registerError").textContent = "Passwords do not match";
                return;
            }

            let users = JSON.parse(localStorage.getItem("users")) || [];
            if (users.some(u => u.email === email)) {
                document.getElementById("registerError").textContent = "Email is already registered";
                return;
            }

            users.push({ email, password });
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("loggedInUser", email);
            window.location.href = "profile.html";
        });
    }

    if (userTable) {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.email}</td>
                <td><button class="delete" data-email="${user.email}">Delete</button></td>
            `;
            userTable.appendChild(row);
        });

        userTable.addEventListener("click", function (e) {
            if (e.target.classList.contains("delete")) {
                const email = e.target.getAttribute("data-email");
                let users = JSON.parse(localStorage.getItem("users")) || [];
                users = users.filter(u => u.email !== email);
                localStorage.setItem("users", JSON.stringify(users));
                e.target.parentElement.parentElement.remove();
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("loggedInUser");
            window.location.href = "login.html";
        });
    }
});
