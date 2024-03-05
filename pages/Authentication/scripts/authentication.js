let mail = "tranductdn@gmail.com"
let password = "Ptit@2003"

function checkValidEmail(){
    console.log("checkValidEmail");
    var email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let emailError = document.getElementById("emailError");
    if(emailPattern.test(email)){
        document.getElementById("email").style.borderColor = "green";
        emailError.style.display = "none";
        return true;
    } else {
        document.getElementById("email").style.borderColor = "red";
        emailError.innerHTML = "Email is not valid";
        emailError.style.display = "block";
        return false;
    }
}

function checkValidPassword(){
    var password = document.getElementById("password").value;
    var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let passwordError = document.getElementById("passwordError");
    if(passwordPattern.test(password)){
        document.getElementById("password").style.borderColor = "green";
        passwordError.style.display = "none";
        return true;
    } else {
        document.getElementById("password").style.borderColor = "red";
        passwordError.innerHTML = "Password is not valid";
        passwordError.style.display = "block";
        return false;
    }
}

function checkValidConfirmPassword(){
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    let confirmError = document.getElementById("confirmError");
    if(password === confirmPassword){
        document.getElementById("confirmPassword").style.borderColor = "green";
        confirmError.style.display = "none";
        return true;
    } else {
        document.getElementById("confirmPassword").style.borderColor = "red";
        confirmError.innerHTML = "Passwords are not identical";
        confirmError.style.display = "block";
        return false;
    }
}

function checkSignUp(){
    let check = document.getElementById("check").checked;
    if(check){
        if(checkValidEmail() && checkValidPassword() && checkValidConfirmPassword()){
            console.log("Sign up successful");
            window.location.href = "signin.html"
            // alert("Sign up successful");
            return true;
        } else {
            return false;
        }
    } else {
        alert("Please agree to the terms and conditions");
        return false;
    }
}

function checkSignIn(){
    // window.location.href = "../user/home.html";
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    if(email === "" || password === ""){
        alert("Please fill all fields");
        return false;
    } else {
        if(email === mail && pass === password){
            console.log("Login successful");
            window.location.href = "../user/home.html";
            return true;
        } else {
            console.log("Email or password is incorrect");
            alert("Email or password is incorrect");
            return false;
        }
    }
}
