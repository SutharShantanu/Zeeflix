
let sub_btn = document.getElementById("loginBtn");
sub_btn.addEventListener("click", login);

function login () {
    // event.preventDefault()

    let email = document.getElementById('emailId').value;

    let email1 = localStorage.getItem('email1')


    if (email == email1) {
        alert("User Login Successful")
        window.location.href = 'index.html'
    } else {
        alert("Email is not valid")
    }

    document.getElementById('apple').addEventListener('click', appleWeb)

    function appleWeb () {
        window.location.href = 'https://www.apple.com/in/'
    }
}
