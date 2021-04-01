//togloom duussan esehiig hadgalah
var isNewGame;

// toglogchiin eeljiig hadgalah huwisagch 1-player 0, 2-player 1 gej temdeglii
var activePlayer;

// toglogchiin tsugluulsan onoog hadgalah huwisagch
var scores;

// toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch
var roundScore;

//shoonii zurag uzuuleh DOM-s haij olood end hadgalii
var diceDom=document.querySelector(".dice");

//togloom ehluuleh
initGame();

function initGame(){
//togloom ehellee gedeg tuluwt oruulna
    isNewGame=true;

    // toglogchiin eeljiig hadgalah huwisagch 1-player 0, 2-player 1 gej temdeglii
    activePlayer=0;
    
    // toglogchiin tsugluulsan onoog hadgalah huwisagch
    scores=[0, 0];
    
    // toglogchiin eeljindee tsugluulj bgaa onoog hadgalah huwisagch
    roundScore=0;
    
    //program ehlehed belgie
    document.getElementById('score-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;

    //toglogchiin neriig butsaaj gargah
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");

    document.querySelector(".player-0-panel").classList.add("active");
    
    diceDom.style.display="none";
};

//shoog shideh event lister
document.querySelector(".btn-roll").addEventListener("click", function (){
    if(isNewGame){
        //1-6 dotorh sanamsargui toog gargaj awna
    var diceNumber=Math.floor(Math.random()*6)+1;

    //shoonii zurgiig web deer gargaj irne
    diceDom.style.display='block';
    // document.querySelector('.dice').style.display="block";
    // var diceDom=document.querySelector(".dice");

    //buusan sanamsargui toond hargalzah zurgiig gargaj ugnu
    diceDom.src='dice-'+diceNumber+'.png';
    // alert('shoo buulaa: ' +diceNumber)

    //buusan too ni 1s ylgaatai bol idevhitei toglogchiin eeljiin onoog nemegduulne
    if(diceNumber !==1){
        //1s ylgaatai too buula.Buusan toog toglogchid nemj ugnu
        roundScore=roundScore+diceNumber;
        document.getElementById('current-'+ activePlayer).textContent=roundScore;
    }else{
        // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu
        // ENE toglogchiin eeljindee bussan onoog 0 bolgono
        switchNextPlayer();
    }
    }else{
        alert('togloom duusan new game towch darj ehelne uu');
    }
});

//HOLD towchnii event lister
        // button class="btn-hold"><i class="ion-ios-download-outline"></i>Hold</button>
        document.querySelector(".btn-hold").addEventListener("click", function(){
            if(isNewGame){
                // Ug toglogchiin onoog nemj hadgalah
            // if(activePlayer===0){
            //     scores[0]=scores[0]+roundScore;
            // }else{
            //     scores[1]=scores[1]+roundScore;
            // }
            scores[activePlayer]=scores[activePlayer]+roundScore;

            //display onoog uurchluh
            document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];

            //ug toglogchiig hojson esehiig shalgah
            if(scores[activePlayer]>=100) {
                //togloom duussan tuluwt oruulna
                isNewGame=false;

                document.getElementById('name-'+activePlayer).textContent="winner";
                document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
                document.querySelector('.player-' +activePlayer+'-panel').classList.remove('active');
            }else{
                //eeljiin onoog solino
                switchNextPlayer();
            }
            }else{
                alert('togloom duusan new game towch darj ehelne uu');
            }
        });
//ene funtion daraachiin toglogch ruu shiljuulne
function switchNextPlayer(){
 //eeljiin onoog solino
        // ENE toglogchiin eeljindee bussan onoog 0 bolgono
        roundScore=0;
        document.getElementById('current-'+ activePlayer).textContent=0;

        //herev idevhitei togloch ni 0 baiwal idewhtei toglogchiig 1 bolgo.
        //ugui bol 0 bolgo
        activePlayer === 0 ? (activePlayer=1) : (activePlayer=0);
       
        //ulaan tsegiig shiljvvleh
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');


        //shoog tur alga bolgono
        diceDom.style.display='none';
};

//shine togloom ehluuleh event list
document.querySelector('.btn-new').addEventListener('click', initGame);
