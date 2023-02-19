function register(){
 let name = document.getElementById(`name`).value
let email = document.getElementById(`email`).value
let  password = document.getElementById(`password`).value
if(name.length > 5 && email.includes('@') && password.length > 7){
let user ={
 login: name,
 mail: email,
 parol: password
}
localStorage.setItem('user',JSON.stringify(user))
document.getElementById(`div`).innerHTML = '<div class="alert alert-success col-6">Успішна реєстрація</div>'
}else{
document.getElementById(`div`).innerHTML = '<div class="alert alert-danger col-6">Помилка</div>' 
}

}