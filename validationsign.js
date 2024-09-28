var fullname = document.forms['form']['fullname'];
var email = document.forms['form']['email'];
var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var full_error = document.getElementById('full_error');
var email_error = document.getElementById('email_error');
var username_error = document.getElementById('username_error');
var password_error = document.getElementById('password_error');

fullname.addEventListener('textInput', fullname_verify);
email.addEventListener('textInput', email_verify);
username.addEventListener('textInput', username_verify);
password.addEventListener('textInput', password_verify);

function validated() {
    if (fullname.value.length < 10) {
        fullname.style.border = "1px solid orange";
        full_error.style.display = "block";
        fullname.focus();

        return false;
    }
    if (email.value.length < 9) {
        email.style.border = "1px solid orange";
        email_error.style.display = "block";
        email.focus();

        return false;
    }
    if (username.value.length < 8) {
        username.style.border = "1px solid orange";
        username_error.style.display = "block";
        username.focus();

        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid orange";
        password_error.style.display = "block";
        password.focus();

        return false;
    }
}

function fullname_verify()
{
    if(fullname.value.length >= 9)
    {
        fullname.style.border = "1px solid orange";
        full_error.style.display = "none";


        return true;
    }
}
function email_verify()
{
    if(email.value.length >= 8)
        {
            email.style.border = "1px solid orange";
            email_error.style.display = "none";
           
    
            return true;
        }
}
function username_verify()
{
    if(username.value.length >= 7)
    {
        username.style.border = "1px solid orange";
        username_error.style.display = "none";


        return true;
    }
}
function password_verify()
{
    if(password.value.length >= 5)
        {
            password.style.border = "1px solid orange";
            password_error.style.display = "none";
           
    
            return true;
        }
}