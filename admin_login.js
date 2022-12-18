
document.getElementById('loginBtn').addEventListener('click', checklogin)

function checklogin () {


    let email = document.getElementById('emailId').value;
    let password = document.getElementById('passwordId').value;

    // let email1 = JSON.parse(localStorage.getItem('email1')) || []
    // let password1 = JSON.parse(localStorage.getItem('password1')) || []

    let email1 = localStorage.getItem('email1') || []
    let password1 = localStorage.getItem('password1') || []

    if (email == '' || password == '') {
        alert('Please fill the details')
    }
    else if (email !== email1 && password !== password1) {
        alert("Email & Password are Invalid ⚠️")
    }
    else if (email !== email1) {
        alert("Email is Wrong ⚠️")
    }
    else if (password !== password1) {
        alert("Password is Wrong ⚠️")
    }
    else if (email == email1 && password == password1) {
        alert("Admin Login Successful")
        window.location.href = "admin.html";
    }

}

document.getElementById('apple').addEventListener('click', appleWeb)

function appleWeb () {
    window.location.href = 'https://www.apple.com/in/'
}
