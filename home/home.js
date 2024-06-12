var userName = localStorage.getItem('userName');
var logBtn = document.getElementById('logBtn');
var userNameWrapper = document.getElementById('userNameWrapper');

console.log(userName);
userNameWrapper.innerHTML = userName;

logBtn.addEventListener('click', function () {
    localStorage.removeItem('userName');
});
