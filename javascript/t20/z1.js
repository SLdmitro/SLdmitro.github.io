 function reg(){
 let text = document.getElementById(`text`).value
 let email = document.getElementById(`email`).value
let password = document.getElementById(`password`).value
    if(text.length > 3 && email.includes(`@`) && password.length > 6){
    let user = {
        login: text,
        mail: email,
        parol: password
    }
    localStorage.setItem('user',JSON.stringify(user))
    document.getElementById(`div`).innerHTML = '<h1>Успіх</h1>'
    }else{
        document.getElementById(`div`).innerHTML = '<h1>Поразка</h1>'
    }
}