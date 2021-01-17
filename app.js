var mainpage="main.html" ///ogarniete +porzadek w kodzie zrobiony
var stage2 = "stage2.html" /// porzadek w kodzie zrobiony ///przecinki!!!
var stage3 = "stage3.html"
var stage4 = "stage4.html"
var stage5 = "stage5.html" 
var stage6 = "stage6.html"
var stage7 = "stage7.html" //brak
var stage8 = "stage8.html" // train + przejscie
var stage9 = "stage9.html" // schemat
var stage10 = "stage10.html" //bomba

var stage_end_fail = "stage_end_failed.html"
var stage_end_pos = "stage_end_pos.html"; 


var password= [10]

password[1]=stage2;
password[2]=stage3;
password[3]=stage4;
password[4]=stage5;
password[5]=stage6;
password[6]=stage7;
password[7]=stage8;
password[8]="x";
password[9]="x";




var counter =0;
var player=null;

function err_createElement(error)
{
	
  newDiv = document.createElement("div");
  newDiv.id="error_div"
  newDiv.innerHTML = error;
  newDiv.classList.add("error_div");
  my_div = document.getElementById("error_div");
  document.body.insertBefore(newDiv, my_div);
  
  var err_btn = document.createElement("div");
  err_btn.id="error_btn"
  err_btn.innerHTML = "x";
 document.body.appendChild(err_btn);
 err_btn.classList.add("err_btn"); 
 err_btn.addEventListener("click", err_close);	

 document.getElementById("button_play").disabled = true;
}
function err_close()
{
	var removed_div = document.getElementById("error_div");
	var removed_btn = document.getElementById("error_btn");
	
	 removed_div.remove();
	 removed_btn.remove();
	document.getElementById("button_play").disabled = false;	
}
function setplayer() 
{
	var decision=false;
	tmp=document.getElementById('main_textbox').value 
	if(tmp==null || tmp=="")
	{
		var error="BŁĄD!!! <BR> PROSZĘ SPRAWDZIĆ WPROWADZONE DANE!!!" ;
		err_createElement(error);
		decision = false;
	}
	else
	{
		player=tmp;
	 	startfun();
	}
}
	function backtomainpage() // niedkonczone
	{
		document.location.href = mainpage;
	}	
	function startfun() 
	{
		   document.location.href = stage2;	
	}
	
    function stage2_next() //stage2
{
	document.location.href = stage3;
}

	function stage3_next() //stage3
{
	document.location.href = stage4;
}

	function stage3_close() //stage3
{
	document.location.href = stage3a;
}

	function stage3a_far() //stage3a
{
	document.location.href = stage3;
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
  btn.innerHTML = "DALEJ!";
  document.body.appendChild(btn);
  btn.classList.add("buttonnext"); 
  btn.addEventListener("click", stage8_next);	
}
function stage9_next() //stage9
{
	var nextto=false;
	var password_from_users = document.getElementById("stage9_input").value;
	password_from_users=password_from_users.toLowerCase()

	if(password_from_users==password[9])
	{
		nextto=true;
	}
	else
	{
		checkPassword();
	}
	if(nextto==true)
	{
		document.location.href = stage10;
	}
}
function stage10_next() //stage10
{
	document.location.href = stage10;
}

function question_final_V1() //stage 10 - pozytywne rozbrojenie bomby okienko
{	
	final = document.createElement("div");
	final.id="final"
	final.innerHTML = "ZESPÓŁ SAPERSKI: JESTES PEWIEN?";
	final.classList.add("div_q");
  	my_div1 = document.getElementById("final");
  	document.body.insertBefore(final, my_div1)

	btn1 = document.createElement("div");
	btn1.id="final_no"
	btn1.innerHTML = "NIE";
	btn1.classList.add("final_no");
	my_div2 = document.getElementById("final_no");
	document.body.insertBefore(btn1, my_div2) 

	btn2 = document.createElement("div");
	btn2.id="final_yes"
	btn2.innerHTML = "TAK";
	btn2.classList.add("final_yes");
	my_div3 = document.getElementById("final_yes");
	document.body.insertBefore(btn2, my_div3)

	btn1.addEventListener("click", question_final_close_no);	 //no 
	btn2.addEventListener("click", question_finalv1_close);	 //yes
}
function question_final_V2() //stage 10 - negatywne rozbrojenie bomby okienko
{	
	final = document.createElement("div");
	final.id="final"
	final.innerHTML = "ZESPÓŁ SAPERSKI: JESTES PEWIEN?";
	final.classList.add("div_q");
  	my_div1 = document.getElementById("final");
  	document.body.insertBefore(final, my_div1)

	btn1 = document.createElement("div");
	btn1.id="final_no"
	btn1.innerHTML = "NIE";
	btn1.classList.add("final_no");
	my_div2 = document.getElementById("final_no");
	document.body.insertBefore(btn1, my_div2) 

	btn2 = document.createElement("div");
	btn2.id="final_yes"
	btn2.innerHTML = "TAK";
	btn2.classList.add("final_yes");
	my_div3 = document.getElementById("final_yes");
	document.body.insertBefore(btn2, my_div3)

	btn1.addEventListener("click", question_final_close_no);	
	btn2.addEventListener("click", question_finalv2_close);	
}
function question_final_close_no() //zamkniecie okienka 
{
	var removed_div = document.getElementById("final");
	var removed_btn1 = document.getElementById("final_yes");
	var removed_btn2 = document.getElementById("final_no");
	 removed_div.remove();
	 removed_btn1.remove();
	 removed_btn2.remove();
}
function question_finalv2_close() //negatywne rozbrojenie - stage 10  failed
{
	var removed_div = document.getElementById("final");
	var removed_btn1 = document.getElementById("final_yes");
	var removed_btn2 = document.getElementById("final_no");
	
	 removed_div.remove();
	 removed_btn1.remove();
	 removed_btn2.remove();
	 failed();
}
function question_finalv1_close() //negatywne rozbrojenie - stage 10  positive
{
	var removed_div = document.getElementById("final");
	var removed_btn1 = document.getElementById("final_yes");
	var removed_btn2 = document.getElementById("final_no");
	
	 removed_div.remove();
	 removed_btn1.remove();
	 removed_btn2.remove();
	 positive();
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
	function checkcounter()
	{
		if(counter <4)
		{
			var error="Błedne hasło!!!";
				err_createElement(error);		
		}else if(counter==4)
		{
			failed()
		}
		else{console.log("error")}
	}
	function checkPassword()
	{
		if(counter <4)
		{
			var error="Błedne hasło!!!";
				err_createElement(error);		
		}else if(counter==4)
		{
			failed()
		}
		else{console.log("error")}
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
	document.getElementById("game").style.backgroundImage = "url('img/schemat_pociagu_wagon1.jpeg')";
}
function changeimagetwo()
{
	document.getElementById("game").style.backgroundImage = "url('img/schemat_pociagu_wagon2.jpeg')";
}
function changeimagethree()
{
	document.getElementById("game").style.backgroundImage = "url('img/schemat_pociagu_wagon3.jpeg')";
}
function changeimagefour()
{
	document.getElementById("game").style.backgroundImage = "url('img/schemat_pociagu_wagon4.jpeg')";
}
function changeimagefive()
{
	document.getElementById("game").style.backgroundImage = "url('img/schemat_pociagu_wagon5.jpeg')";

}
		
