var passWord  = document.getElementById('userPassword');
var showPassToggler  = document.getElementById('showPassToggler');
var projectYear = document.getElementById('projectYear');
// Create the function:
showHidePassword = () => {
    if (passWord.type == 'password') {
        passWord.setAttribute('type', 'text');
        showPassToggler.classList.remove('fa-eye-slash');
        showPassToggler.classList.add('fa-eye');
    }
    else {
        showPassToggler.classList.add('fa-eye-slash');
        showPassToggler.classList.remove('fa-eye');
        passWord.setAttribute('type', 'password');
    }
};
// EventListener:  
showPassToggler.addEventListener('click', showHidePassword);

// Dynamic year:
let copyrightYear =  new Date().getFullYear();
projectYear.innerText = copyrightYear;