
document.getElementById('RegisteredBtn').addEventListener('click', valid)


function valid () {


    let email = document.getElementById('emailId').value;
    let password = document.getElementById('passwordId').value;

    if (email == '' && password == '') {
        alert('Please fill the details')
    }
    else if (email == "") {
        alert("Please enter a Email")
    }
    else if (password == "") {
        alert("Please enter a Password")
    }

    else if (email !== "" && password !== "") {
        localStorage.setItem('email1', email)
        localStorage.setItem('password1', password)
        alert(" Admin Registration Successful")
        window.location.href = "admin_login.html";
    }






}
