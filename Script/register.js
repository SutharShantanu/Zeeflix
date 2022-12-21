
document.getElementById('goggleSign').addEventListener('click', goggleWeb)

function goggleWeb() {
    window.location.href = 'https://www.google.com/'
}
// document.getElementById('ancherRegister').addEventListener('click', loginPage)

// function loginPage() {
//     window.location.href = 'login.html'
// }

document.getElementById('RegisteredBtn').addEventListener('click', valid)



function valid(event) {
    event.preventDefault()

    let email = document.getElementById('emailId').value;

    if (email == "") {
        alert("Please enter a Email")
    }
    else if (email !== "") {
        localStorage.setItem('email1', email)
        alert(" User Registration Successful")
        window.location.href = "login.html";
    }

}
