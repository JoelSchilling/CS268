const PASSWORDLENGTH = 6;

function registerValidation() {
    var canProceed = true;

    const username = document.forms['registerForm']['username'].value;
    const password = document.forms['registerForm']['password'].value;
    const repass = document.forms['registerForm']['retypePassword'].value;

    var errorMessage = document.getElementById("errorMessage");


    //check if username exsits
    if(username.length == 0) {
        errorMessage.innerHTML = 'Enter a Username';
        canProceed = false; 
    }
    
    //check if password exsits
    if(password.length < PASSWORDLENGTH) {
        errorMessage.innerHTML = `password length must be bigger than ${PASSWORDLENGTH} character`;
        canProceed = false; 
    }
    
    //check if retyped password matches exsits
    if(repass != password) {
        errorMessage.innerHTML = 'Passwords do not match';
        canProceed = false; 
    }
    
    return canProceed;
}