let calendar = document.getElementById(`calendar`);
let den = 0;
let days =``;
let month = prompt('календар місяця');
if(month == 'квітень'|| month ==`вересень`||month== `листопад`|| month == `червень`){
den=30;
}else if(month == `лютий`){
den=28;
}

for(i=1;i<32;i++){
    if(i%7==0 || i%7==6){
days +=`
<div id="card" class="day">${i}<br>січня
</div>
`;
}else{
    days +=`
    <div class="day">${i}<br>січня
    </div>
    `;
}
}

calendar.innerHTML = days;