function sign_in(){
    let email = document.getElementById(`email`).value
let password = document.getElementById(`password`).value
let user = JSON.parse(localStorage.getItem('user'))
console.log(email)
console.log(password)
console.log(user.mail)
console.log(user.parol)
}