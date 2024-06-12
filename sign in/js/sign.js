var registerForm = document.getElementById('registerForm');
var signName = document.getElementById('signName');
var signEmail = document.getElementById('signEmail');
var signPassword = document.getElementById('signPassword');
var successAlert = document.getElementById('successAlert');
var existAlert = document.getElementById('existAlert');
var allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];

registerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    signup();
});

function signup() {
    var userData = {
        name: signName.value,
        email: signEmail.value,
        password: signPassword.value
    };

    if (isSignupValid(userData)) {
        console.log("Signup successful.");
        existAlert.classList.add('d-none');
        allUsers.push(userData);
        localStorage.setItem('allUsers', JSON.stringify(allUsers));
        successAlert.classList.remove('d-none');
    } else {
        console.log('Signup failed.');
        successAlert.classList.add('d-none');
        existAlert.classList.remove('d-none');
    }
}

function isSignupValid(userData) {
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() === userData.email.toLowerCase()) {
            return false;
        }
    }
    return true;
}