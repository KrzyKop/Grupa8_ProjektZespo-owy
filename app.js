var mainpage="main.html"
var stage2 = "stage2.html"
var stage3 = "stage3.html"
var stage4 = "stage4.html"
var stage5 = "stage5.html" 
var stage6 = "stage6.html"
var stage7 = "stage7.html" //brak
var stage8 = "stage8.html" // train + przejscie
var stage9 = "stage9.html" // schemat
var stage10 = "stage10.html" //bomba


var password= [20]
for(var i=0; i<21;i++)
{
	password[i]=0
}
password[1]=stage2;
password[2]=stage3;
password[3]=stage4;
password[4]=stage5;
password[5]=stage6;
password[6]=stage7;
password[7]=stage8;
password[8]=stage9;
password[9]=stage10;
password[6+10]="pomocy bomba!"


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
	setstage(stage3);
	document.location.href = stage3;
}

	function stage3_next() //stage3
{
	document.location.href = stage4;
}

	function stage4_next() //stage4
{
	document.location.href = stage5;
}

	function stage5_next() //stage5
{
	document.location.href = stage6;
}
function stage6_next() //stage6
{
	document.location.href = stage7;
}
function stage7_next() //stage7
{
	document.location.href = stage8;
}
function stage8_next() //stage8
{
	document.location.href = stage9;
}
function move_stage_train() //stage8a
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
  btn.addEventListener("click", stage8_next);	
}
function stage9_next() //stage9
{
	document.location.href = stage10;
}
function stage10_next() //stage10
{
	document.location.href = stage10;
}







function  failed(){ document.location.href= stage_end_fail }
function  positive(){  document.location.href = stage_end_pos; }



/*function move_stage_transition()
{
  newDiv = document.createElement("div");
  newDiv.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et massa sit amet dui porttitor cursus at ut sapien. Pellentesque lorem erat, placerat a enim facilisis, euismod bibendum eros. <br> Fusce sit amet tristique erat, sed mattis nibh. Suspendisse quis viverra neque, vel tristique augue. Vivamus varius pulvinar velit, nec tempor dolor egestas non. zażółć gęślą jaźń "
  newDiv.classList.add("rectanglestyle");
  my_div = document.getElementById("org_div1");
  document.body.insertBefore(newDiv, my_div);
  var btn = document.createElement("button");
  btn.innerHTML = "Dalej!";
  document.body.appendChild(btn);
  btn.classList.add("buttonnext");
  
  //btn.onclick.add = searching_bomb();
  btn.addEventListener("click", searching_bomb);	
}*/

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
 /*
  $('.ml1 .letters').each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  var ml = { timelines: {}};
  ml.timelines["ml1"] = anime.timeline({loop: false})
    .add({
      targets: '.letter',
      scale: [0.3,1],
      opacity: [0,1],
      translateZ: 0,
      easing: "easeOutExpo",
      duration: 100,
      delay: function(el, i) {
        return 70 * (i+1)
      }
    })
*/
function changeimageone()
{
	document.body.style.backgroundImage = "url('img/schemat_pociagu_wagon1.jpeg')";
}
function changeimagetwo()
{
	document.body.style.backgroundImage = "url('img/schemat_pociagu_wagon2.jpeg')";
}
function changeimagethree()
{
	document.body.style.backgroundImage = "url('img/schemat_pociagu_wagon3.jpeg')";
}
function changeimagefour()
{
	document.body.style.backgroundImage = "url('img/schemat_pociagu_wagon4.jpeg')";
}
function changeimagefive()
{
	document.body.style.backgroundImage ="url('img/schemat_pociagu_wagon5.jpeg')";
}
		
