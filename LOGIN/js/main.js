var loginForm = document.getElementById('loginForm');
var loginEmail = document.getElementById('loginEmail');
var loginPassword = document.getElementById('loginPassword');
var alertLogin = document.getElementById('alertLogin');
var allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    login();
});

function login() {
    var userData = {
        email: loginEmail.value,
        password: loginPassword.value
    };
    if (isLoginValid(userData)) {
        console.log("You can log in");
        alertLogin.classList.replace('d-block', 'd-none');
        window.location.href = "../Home/home.html";
    } else {
        alertLogin.classList.replace('d-none', 'd-block');
        console.log('User Not Found');
    }
}

function isLoginValid(userData) {
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() === userData.email.toLowerCase() && allUsers[i].password === userData.password) {
            console.log("User Found");
            localStorage.setItem('userName', allUsers[i].name);
            return true;
        }
    }
    return false;
}