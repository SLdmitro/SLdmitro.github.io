let text = document.getElementById(`text`);
let name = prompt(`Як вас звати?`);
let m= document.getElementById(`imya`)
let login = false;
if(login==true){   

text.innerHTML = `<h1 align="center">Вітаю, ${name}!На вашу поштову скриньку<br> studyLink@gmail.com відправлено лист із підтвердженям.</h1>`;
m.innerHTML = `${name}`;
}else{
text.innerHTML `<h1 align="center">Будь ласка, увійдіть у свій акаунт або створіть новий.</h1>`
x.innerHTML=`Увійти`
}
