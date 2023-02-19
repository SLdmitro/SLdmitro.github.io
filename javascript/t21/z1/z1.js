function change(){
let h1 = document.getElementById('h1')
let color = document.getElementById('color').value
let input = document.getElementById('input').value
h1.setAttribute('style',`color:${color}; background:${input};`)



}

