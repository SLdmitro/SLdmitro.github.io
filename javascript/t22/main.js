function drawCards(){
let cards = document.getElementById(`cards`)
let cards_num = document.getElementById(`cards_num`).value
let cards_vidro = '';
for(i=0;i<cards_num;i++){
cards_vidro += `
<div class="card">
		  <div class="card-body my-2">
			<h5 class="card-title">Card ${i+1}</h5>
		  </div>
		</div>
`
}
cards.innerHTML= cards_vidro;
}

function change_color(){
let cards_text = document.getElementById(`cards_text`).value;
let cards_class = document.getElementsByClassName('card');
let edit_order = document.getElementById('edit_order').value;
Array.from(cards_class).map(function(kartoplya,index){
if((index+1) % edit_order == 0){
    kartoplya.style.color = cards_text;
}
})

}

function fon_color(){
  let card_fon = document.getElementById('cards_fon').value
  let cards = document.getElementsByClassName('card')  
  Array.from(cards).map(function(kartoplya){
    kartoplya.style.background = card_fon;
})
}
function card_del(){
    document.getElementById('cards').innerHTML= '';
}
function card_style(){
    let cards = document.getElementsByClassName('card') 
    Array.from(cards).map(function(kartoplya){ 
    kartoplya.style.color = '';
    kartoplya.style.background = '';
    })
}


