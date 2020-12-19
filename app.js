var mainpage="main.html"
var stage2 = "stage2.html"

var stage4_end="radio.html"//brak
var stage5_driving="choose_road"; // brak 
var contact_defuse_team="defuse.html" // brak
var searching_bomb="searching.html" //brak

var stageBomb= "bomb.html"
var stage_end_fail = "stage_end_failed.html"
var stage_end_pos_b = "stage_positive_a.html"; ///brak
var stage_end_pos_b = "stage_positive_b.html"; ///brak

var counter =0;
var player=null;
	

function setplayer() // niedkonczone
{
	var decision=false;
	tmp=document.getElementById('main_id').value
	console.log(document.getElementById('main_id').value)
	alert(tmp)
	if(tmp==null || tmp=="")
	{
		alert("Prosze Podac nazwe gracza!")
		decision = false;
	}
	else
	{
		decision = true
	}

 if(decision==true)
 {
	 player=tmp;
	 startfun();
 }
 else
 {
	 addcounter();
 }
}
	function backtomainpage() // niedkonczone
	{
		document.location.href = mainpage;
	}	
	function startfun() 
	{
           alert("Witaj "+ player)
		   document.location.href = stage2;	
	}
	
    function stage2_next() //stage2
{
	document.location.href = stageBomb;
}
function  failed(){ document.location.href= stage_end_fail }
function  positive(){  document.location.href = stage_end_pos; }

/* Mechanizm liczenia bledow */
function addcounter()
	{
		counter++
		checkcounter()
	}
	function printCounter(){alert("counter: "+ counter)}
	function checkcounter()
	{
		printCounter()
		if(counter >3)
		{
			alert("przekroczono ilosc mozliwych bledow!")
			failed()
		}
	}