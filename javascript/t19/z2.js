function test(){
let div = document.getElementById(`stored_test`); 
let input = document.getElementById(`input`).value;
localStorage.setItem('text',input)

div.innerHTML = input;
}

function textDraw(){
 let but = document.getElementById(`num`);
 localStorage.clear('')   
}


