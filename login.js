
function login() {
    // event.preventDefault()
    console.log('yes');

    let email = document.getElementById('emailId').value;
    console.log(email);



    let email1 = localStorage.getItem('email1')


    if (email == email1) {
        alert("login successful")
        window.location.href = 'register.html'
    } else {
        alert("Email is not valid")
    }

    document.getElementById('apple').addEventListener('click', appleWeb)

    function appleWeb() {
        window.location.href = 'https://www.apple.com/in/'
    }
}
