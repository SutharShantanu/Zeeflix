
// document.getElementById('goggleSign').addEventListener('click', goggleWeb)

// function goggleWeb() {
//     window.location.href = 'https://www.google.com/'

//     document.getElementById('RegisteredBtn').addEventListener('click', valid)




document.getElementById('RegisteredBtn').addEventListener('click', valid)



function valid() {


    let email = document.getElementById('emailId').value;
    let password = document.getElementById('passwordId').value;


    // if (email === '' || null) {
    //     window.alert('please enter mail id');
    // }
    // else if (password === '' || null) {
    //     window.alert('please enter your password');
    // }
    // else {
    //     window.alert('Thanks for sign in');
    // }
    localStorage.setItem('email1', email)
    // localStorage.setItem('ConfirmEmai1', JSON.stringify(ConfirmEmail))
    localStorage.setItem('password1', password)
    // localStorage.setItem('ConfirmPassword1', JSON.stringify(ConfirmPassword))
    // localStorage.setItem('CellPhone1', JSON.stringify(CellPhone))





}
