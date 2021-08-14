function validateLogin(email, password) {
    var emailRegex = "^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]{2,}$"
    var emailValid = $("#email").val().match(emailRegex); 
    var passwordValid =  $("#password").val().length > 7; 

    if(!emailValid) {
        console.log("Email failed"); 
        document.getElementById("email").className="red-border"
        return false; 
    }
    else if (!passwordValid) {
        console.log("Password failed"); 
        document.getElementById("email").className="blue-border"
        document.getElementById("password").className="red-border"
        return false; 
    }
    return true; 
}

