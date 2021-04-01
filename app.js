// toglogchiin eeljiig hadgalah huwisagch 1-player 0, 2-player 1 gej temdeglii
var activePlayer=1;

// toglogchiin tsugluulsan onoog hadgalah huwisagch
var scores=[0, 0];

// toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch
var roundScore=0;

// shoonii ali talaar buussaniig hadgalah huwisagch heregtea, 1-6 gesen utgiig ene huwisagchid sanamsarguigeer uusgej ugnu
var diceNumber=Math.floor(Math.random()*6)+1;



//program ehlehed belgie
document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;

var diceDom=document.querySelector(".dice");
document.querySelector('.dice').style.display="none";

document.querySelector(".btn-roll").addEventListener("click", function (){
    var diceNumber=Math.floor(Math.random()*6)+1;
    document.querySelector('.dice').style.display="block";
    var diceDom=document.querySelector(".dice");
    document.querySelector('.dice').src='dice-'+diceNumber+'.png';

    // alert('shoo buulaa: ' +diceNumber)
});


{/* <button class="btn-roll"><i class="ion-ios-loop"></i>Roll dice</button> */}