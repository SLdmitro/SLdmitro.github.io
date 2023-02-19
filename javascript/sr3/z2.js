function enter(){
let email = document.getElementById(`email`).value
let  password = document.getElementById(`password`).value
let user = JSON.parse(localStorage.getItem(`user`))
if(email == user.mail && password == user.parol ){
document.getElementById(`div`).innerHTML = '<div class="alert alert-success col-6">Успіх</div>' 
user.loged = true;
localStorage.setItem('user',JSON.stringify(user)) 
window.location = "z3.html"
}else{
    document.getElementById(`div`).innerHTML = '<div class="alert alert-danger col-6">Помилка</div>' 
    user.loged = false;
    localStorage.setItem('user',JSON.stringify(user)) 
}
}
