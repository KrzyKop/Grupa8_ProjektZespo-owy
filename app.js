var mainpage="main.html"
var stage2 = "stage2.html"

var stage4_end="radio.html"//brak
var train="train.html" /// zagadka5 +wybor
var schemat="schemat.html" //zagadka6_schemat

var stageBomb= "bomb.html"
var stage_end_fail = "stage_end_failed.html"
var stage_end_pos_b = "stage_positive_a.html"; ///brak
var stage_end_pos_b = "stage_positive_b.html"; ///brak

var counter =0;
var player=null;
	

function setplayer() 
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
	document.location.href = train;
}
function stage5_next()
{
	document.location.href =schemat ;
}
function stage6_next()
{
	document.location.href =stageBomb ;
}




function  failed(){ document.location.href= stage_end_fail }
function  positive(){  document.location.href = stage_end_pos; }

function move_stage_train()
{
  newDiv = document.createElement("div");
  newDiv.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa sit amet dui porttitor cursus at ut sapien. Pellentesque lorem erat, placerat a enim facilisis, euismod bibendum eros. <br> Fusce sit amet tristique erat, sed mattis nibh. Suspendisse quis viverra neque, vel tristique augue. Vivamus varius pulvinar velit, nec tempor dolor egestas non. zażółć gęślą jaźń "
  newDiv.classList.add("mystyle");
  my_div = document.getElementById("org_div1");
  document.body.insertBefore(newDiv, my_div);
  var btn = document.createElement("button");
  btn.innerHTML = "Dalej!";
  document.body.appendChild(btn);
  btn.classList.add("buttonnext");
  
  //btn.onclick.add = searching_bomb();
  btn.addEventListener("click", stage5_next);	
}
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