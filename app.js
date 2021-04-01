// toglogchiin eeljiig hadgalah huwisagch 1-player 0, 2-player 1 gej temdeglii
var activePlayer=1;

// toglogchiin tsugluulsan onoog hadgalah huwisagch
var scores=[0, 0];

// toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch
var roundScore=0;

// shoonii ali talaar buussaniig hadgalah huwisagch heregtea, 1-6 gesen utgiig ene huwisagchid sanamsarguigeer uusgej ugnu
var dice=Math.floor(Math.random()*6)+1;

//<div class="player-score" id="score-0">43</div>
// window.document.querySelector('#score-0').textContent=dice;

// document.querySelector('#score-1').innerHTML="<em>Yes<em>"


document.querySelector('#score-0').textContent=0;
document.querySelector('#score-1').textContent=0;
document.querySelector('#current-0').textContent=0;
document.querySelector('#current-1').textContent=0;

document.querySelector('.dice').style.display="none";

console.log('shoo; '+dice );