
let claviatura = {
  action:true, 
   name:"Клавіатура дротова Logitech G209 Prodigy USB",
    vidguc:204,
    price:1399,
    image:"z1-2.jpg"
}
let claviatura2 = {
    action:false, 
     name:"Клавіатура Cougar Vantar",
      vidguc:6,
      price:1286
      image:"z1-3.jpg"
      }
let products = document.getElementById(`products`);
let cards = `
<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="${claviatura.image}" alt="">
</div>

<div class="card_info">
    <div class="name">
        ${claviatura.name}
    </div>
    
    <div class="reviews">
     ${claviatura.vidguc}відгуки
    </div>
    
    <div class="price">
       ${claviatura.price} &#8372;
    </div>
</div>
</div>
`
cards+=` 
<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="${claviatura2.image}" alt="">
</div>

<div class="card_info">
    <div class="name">
        ${claviatura2.name}
    </div>
    
    <div class="reviews">
     ${claviatura2.vidguc}відгуки
    </div>
    
    <div class="price">
       ${claviatura2.price} &#8372;
    </div>
</div>
</div>
`


products.innerHTML= cards;