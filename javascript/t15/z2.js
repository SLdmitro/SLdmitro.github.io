let user = {
    name:"Петро",
    lastname:"Іванов",
    age: 14,
    email: "petro007@gmail.com",
    city:"Lviv"
}

function showUser(){
    document.getElementById("tbody").innerHTML = `
<tr>
    <td>${user.name}</td>
    <td>${user.lastname}</td>
    <td>${user.age}</td>
    <td>${user.email}</td>
    <td>${user.city}</td>
</tr>
    `
}
showUser()

function changeName(imya){
    user.name = imya;
    showUser();
}

function changeLastName(priz){
    user.lastname = priz;
    showUser();
}

function changeAge(vik){
    user.age = vik;
    showUser();
}

function changeEmail(em){
    user.email = em;
    showUser();
}
function changeCity(cit){
    user.city = cit;
    showUser();
}

function changeUsertab(imya,priz,vik,em,cit){
    user.name = imya;
    user.age = priz;
    user.lastname = vik;
    user.city = em;
    user.email = cit;
    showUser();
}


