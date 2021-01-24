
var mainpage = "main.html"
var stage2 = "stage2.html"
var stage3 = "stage3.html"
var stage3a = "stage3a.html"
var stage4 = "stage4.html"
var stage5 = "stage5.html"
var stage6 = "stage6.html"
var stage7 = "stage7.html"
var stage8 = "stage8.html"
var stage9 = "stage9.html"
var stage10 = "stage10.html"

var stage_end_fail = "stage_end_failed.html"
var stage_end_pos = "stage_end_pos.html";






var password = [10]

password[1] = stage2;
password[2] = "x"; //stage3
password[3] = "x"; //stage4
password[4] = stage5;
password[5] = "x"; //stage6
password[6] = stage7;
password[7] = stage8;
password[8] = "x";
var z = "wc4712";
z = z.toString();
password[9] = z;




var counter = 0;
var player = null;
var counterPodpowiedzi = 0;

window.localStorage.setItem('counterPodpowiedzi', counterPodpowiedzi);
function err_createElement(error) {

	newDiv = document.createElement("div");
	newDiv.id = "error_div"
	newDiv.innerHTML = error;
	newDiv.classList.add("error_div");
	my_div = document.getElementById("error_div");
	document.body.insertBefore(newDiv, my_div);

	var err_btn = document.createElement("div");
	err_btn.id = "error_btn"
	err_btn.innerHTML = "x";
	document.body.appendChild(err_btn);
	err_btn.classList.add("err_btn");
	err_btn.addEventListener("click", err_close);

	document.getElementById("button_play").disabled = true;
}
function err_close() {
	var removed_div = document.getElementById("error_div");
	var removed_btn = document.getElementById("error_btn");

	removed_div.remove();
	removed_btn.remove();
	document.getElementById("button_play").disabled = false;
}
function setplayer() {
	var decision = false;
	tmp = document.getElementById('main_textbox').value
	if (tmp == null || tmp == "") {
		var error = "BŁĄD!!! <BR> PROSZĘ SPRAWDZIĆ WPROWADZONE DANE!!!";
		err_createElement(error);
		decision = false;
	}
	else {
		player = tmp;
		window.localStorage.setItem('user', player);
		//alert(window.localStorage.getItem('user'));
		window.localStorage.clear();
		createMytime();
		startfun();
	}
}
/*przejscia*/
function backtomainpage() // niedkonczone
{
	document.location.href = mainpage;
}
function startfun() {
	
	document.location.href = stage2;
}

function stage2_next() //stage2
{
	document.location.href = stage3;
}

function stage3_next() //stage3
{
	var nextto = false;
	var password_from_users = document.getElementById("stage3_input").value;
	password_from_users = password_from_users.toLowerCase()

	if (password_from_users == password[2]) {
		nextto = true;
	}
	else {
		checkPassword();
	}
	if (nextto == true) {
		document.location.href = stage4;
	}
}
function stage3a_next() //stage3a
{
	var nextto = false;
	var password_from_users = document.getElementById("stage3a_input").value;
	password_from_users = password_from_users.toLowerCase()

	if (password_from_users == password[2]) {
		nextto = true;
	}
	else {
		checkPassword();
	}
	if (nextto == true) {
		document.location.href = stage4;
	}
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
	//window.localStorage.clear();
	var nextto = false;
	var password_from_users = document.getElementById("stage4_input").value;
	password_from_users = password_from_users.toLowerCase()

	if (password_from_users == password[3]) {
		nextto = true;
	}
	else {
		checkPassword();
	}
	if (nextto == true) {
		document.location.href = stage5;
	}
}

function stage5_next() //stage5
{
	document.location.href = stage6;
}
function stage6_next() //stage6
{
	var nextto = false;
	var password_from_users = document.getElementById("stage6_input").value;
	password_from_users = password_from_users.toLowerCase()

	if (password_from_users == password[5]) {
		nextto = true;
	}
	else {
		checkPassword();
	}
	if (nextto == true) {
		document.location.href = stage7;
	}
}
function stage7_next() //stage7
{
	document.location.href = stage8;
}
function stage8_next() //stage8
{
	document.location.href = stage9;
}
var keyCode = [5];
keyCode[0] = 38;
keyCode[1] = 39;
keyCode[2] = 37;
keyCode[3] = 37;
keyCode[4] = 38;
var keyCode_users = [5];
keyCode_users[0] = 87;
keyCode_users[1] = 87;
keyCode_users[2] = 87;
keyCode_users[3] = 87;
keyCode_users[4] = 87;

counter_stage8 = 0;
function setcounterstage8() {
	counter_stage8++;
	console.log("counter_stage8" + counter_stage8)
	if (counter_stage8 == 5) {
		console.log("Licznik to 5!");
		comparekey();
	}
}
function comparekey() {
	var stage8_next = false;
	var tmp = 0;
	for (i = 0; i < 5; i++) {
		if (keyCode[i] == keyCode_users[i]) {
			console.log("keycode" + keyCode[i])
			console.log("keycodeu" + keyCode_users[i])
			tmp++;
		}
	}
	if (tmp == 5) {
		move_stage_train();
	}
	else {
		counter_stage8 = 0;
		var error = "spróbuj ponownie!!!";
		err_createElement(error);

	}
}

function checkkey() {

	document.addEventListener('keydown', function (event) {
		if (event.keyCode == 37) {
			console.log('lewo was pressed');
			keyCode_users[counter_stage8] = 37;
			setcounterstage8();
		}
		else if (event.keyCode == 38) {
			console.log('gora was pressed');
			keyCode_users[counter_stage8] = 38;
			setcounterstage8();
			//return 38;
		}
		else if (event.keyCode == 39) {
			console.log('prawo was pressed');
			keyCode_users[counter_stage8] = 39
			setcounterstage8();
			//	return 39
		}
		else if (event.keyCode == 40) {
			keyCode_users[counter_stage8] = 40
			setcounterstage8();
			console.log('dol was pressed');
			//	return 40;
		}
	});
}

function move_stage_train() //stage8
{

	var game = document.getElementById("game");

	mystyle = document.createElement("div");
	mystyle.classList.add("mystyle");
	// mystyle.addEventListener("onload", Literki);
	game.appendChild(mystyle);

	mv = document.createElement("div");
	mv.classList.add("moving-letters");
	mystyle.appendChild(mv);

	h1 = document.createElement("h1");
	h1.classList.add("ml1");
	mv.appendChild(h1);

	tw = document.createElement("div");
	tw.classList.add("text-wrapper");
	h1.appendChild(tw);

	lett = document.createElement("div");
	lett.classList.add("letters");
	tw.appendChild(lett);


	lett.innerHTML = "Zespół saperski:  Udało Ci się wyjechałeś poza miasto, za chwile ktoś od nas wskoczy do pociągu. Musisz znaleźć bombę w tym czasie czasie. Poszukiwania zacznij od łazienek - tam najczęściej podkładane są ładunki wybuchowe.";
	lett.innerHTML += "Zespół saperski: MAMY ŻĄDANIE SZANTAŻYSTÓW! BOMBA JUŻ TYKA! MUSISZ JĄ NATYCHMIAST ZNALEŹĆ I ROZBROIĆ... ";
	Literki();

	/*
	  newDiv = document.createElement("div");
	  lett.innerHTML ="Zespół saperski:  Udało Ci się wyjechałeś poza miasto, za chwile ktoś od nas wskoczy do pociągu. Musisz znaleźć bombę w tym czasie czasie. Poszukiwania zacznij od łazienek - tam najczęściej podkładane są ładunki wybuchowe.";
	  lett.innerHTML +="Zespół saperski: MAMY ŻĄDANIE SZANTAŻYSTÓW! BOMBA JUŻ TYKA! MUSISZ JĄ NATYCHMIAST ZNALEŹĆ I ROZBROIĆ... ";
	  newDiv.classList.add("mystyle");
	  my_div = document.getElementById("org_div1");
	  document.body.insertBefore(newDiv, my_div);
	  */
	var btn = document.createElement("button");
	btn.innerHTML = "DALEJ!";
	document.body.appendChild(btn);
	btn.classList.add("buttonnext");
	btn.addEventListener("click", stage8_next);
}
function stage9_next() {
	var nextto = false;
	var password_from_users = document.getElementById("stage9_input").value;

	password_from_users = password_from_users.toLowerCase()

	if (password_from_users == password[9]) {
		nextto = true;
	}
	else {
		checkPassword();
	}
	if (nextto == true) {
		document.location.href = stage10;
	}


}

function stage10_next() {
	document.location.href = stage10;
}
/*stage10*/
function question_final_V1() {
	final = document.createElement("div");
	final.id = "final"
	final.innerHTML = "ZESPÓŁ SAPERSKI: JESTES PEWIEN?";
	final.classList.add("div_q");
	my_div1 = document.getElementById("final");
	document.body.insertBefore(final, my_div1)

	btn1 = document.createElement("div");
	btn1.id = "final_no"
	btn1.innerHTML = "NIE";
	btn1.classList.add("final_no");
	my_div2 = document.getElementById("final_no");
	document.body.insertBefore(btn1, my_div2)

	btn2 = document.createElement("div");
	btn2.id = "final_yes"
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
	final.id = "final"
	final.innerHTML = "ZESPÓŁ SAPERSKI: JESTES PEWIEN?";
	final.classList.add("div_q");
	my_div1 = document.getElementById("final");
	document.body.insertBefore(final, my_div1)

	btn1 = document.createElement("div");
	btn1.id = "final_no"
	btn1.innerHTML = "NIE";
	btn1.classList.add("final_no");
	my_div2 = document.getElementById("final_no");
	document.body.insertBefore(btn1, my_div2)

	btn2 = document.createElement("div");
	btn2.id = "final_yes"
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

function failed() { document.location.href = stage_end_fail }
function positive() { document.location.href = stage_end_pos; }



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
function addcounter() {
	counter++
	checkcounter()
}
function checkcounter() {
	if (counter < 4) {
		var error = "Błedne hasło!!!";
		err_createElement(error);
	} else if (counter == 4) {
		failed()
	}
	else { console.log("error") }
}
function checkPassword() {
	if (counter < 4) {
		var error = "Błedne hasło!!!";
		err_createElement(error);
	} else if (counter == 4) {
		failed()
	}
	else { console.log("error") }
}
/*stage2*/

function Literki() {


	$('.ml1 .letters').html($('.ml1 .letters').html().replace(/\S+/g, "<span class='word'>$&</span>"));

	$('.ml1 .letters .word').each(function () {
		$(this).html($(this).text().replace(/\S/g, "<div class='letter'>$&</div>"));
	});
	var ml = { timelines: {} };
	ml.timelines["ml1"] = anime.timeline({ loop: false })
		.add({
			targets: '.letter',
			scale: [0.3, 1],
			opacity: [0, 1],
			translateZ: 0,
			easing: "easeOutExpo",
			duration: 100,
			delay: function (el, i) {
				return 70 * (i + 1)
			}
		})

}
/*stage 9*/
function changeimageone() {
	document.getElementById("game").style.backgroundImage = "url('img/schemat_pociagu_wagon1.jpeg')";
}
function changeimagetwo() {
	document.getElementById("game").style.backgroundImage = "url('img/schemat_pociagu_wagon2.jpeg')";
}
function changeimagethree() {
	document.getElementById("game").style.backgroundImage = "url('img/schemat_pociagu_wagon3.jpeg')";
}
function changeimagefour() {
	document.getElementById("game").style.backgroundImage = "url('img/schemat_pociagu_wagon4.jpeg')";
}
function changeimagefive() {
	document.getElementById("game").style.backgroundImage = "url('img/schemat_pociagu_wagon5.jpeg')";
}

/* minutnik i stoper*/

function createMytime() {
	var TimeStartGame = Date.now(); ///czas w mili sekundach
	window.localStorage.setItem('MyTime', TimeStartGame);
	console.log("utworzono zmienna localstorage o wartosci:  " + TimeStartGame)
}
function getlocalstarage() {
	return window.localStorage.getItem('MyTime');
}
function getlocalstarage_play() {
	window.localStorage.getItem('player');
}
function getT_doTeraz() {
	var x = getlocalstarage();
	var tmp = Date.now();
	var T = tmp - x;
	console.log("czas do teraz" + T);
	T = T / 1000;
	T = parseInt(T);
	console.log("czas do teraz" + T);
	return T;
}
function wypiszTime() {
	var x = getlocalstarage();
	var tmp = Date.now();
	var T = tmp - x;
	T = T / 1000;
	T = parseInt(T);
	function ShowTime(duration, display) {
		minutes = parseInt(T / 60, 10);
		seconds = parseInt(T % 60, 10);
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		display.textContent = "Wynik: " + minutes + ":" + seconds;
	}
	function ShowPodpowiedzi(duration, display) {
		//alert(counterPodpowiedzi);
		counterPodpowiedzi = window.localStorage.getItem("podpowiedzicounter")
		counterPodpowiedzi = counterPodpowiedzi == null ? "0" : counterPodpowiedzi;
		display.textContent = "podpowiedzi: " + counterPodpowiedzi;
	}
	window.onload = function () {
		display = document.querySelector('#score');
		display2 = document.querySelector('#podpowiedzi');
		ShowTime(T, display);
		ShowPodpowiedzi(T, display2);
	};


}


function stoper() {
	function startTimer(duration, display) {
		var timer = duration, minutes, seconds;
		var id = setInterval(function () {
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			display.textContent = minutes + ":" + seconds;
			if (++timer < 0) {
				clearInterval(id);
			}
		}, 1000);
	}

	window.onload = function () {
		var fiveMinutes = getT_doTeraz();
		display = document.querySelector('#time');
		startTimer(fiveMinutes, display);
	};
}
function stageBomb() {
	function startTimer(duration, display) {
		var timer = duration, minutes, seconds;
		var id = setInterval(function () {
			minutes = parseInt(timer / 60, 10);
			seconds = parseInt(timer % 60, 10);
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			display.textContent = minutes + ":" + seconds;
			if (++timer < 0) {
				clearInterval(id);
			}
		}, 1000);
	}
	function startTimer2(duration2, display2) {
		var timer2 = duration2, minutes2, seconds2;
		var id2 = setInterval(function () {
			minutes2 = parseInt(timer2 / 60, 10);
			seconds2 = parseInt(timer2 % 60, 10);
			minutes2 = minutes2 < 10 ? "0" + minutes2 : minutes2;
			seconds2 = seconds2 < 10 ? "0" + seconds2 : seconds2;
			display2.textContent = minutes2 + ":" + seconds2;
			if (--timer2 < 0) {
				clearInterval(id2);
				failed();
			}
		}, 1000);
	}
	window.onload = function () {
		var fiveMinutes = getT_doTeraz();
		display2 = document.querySelector('#timer');
		display = document.querySelector('#time');
		startTimer(fiveMinutes, display);
		startTimer2(5 * 60, display2);
	};
}
/*stage7*/
function padLeadingZeros(num, size) {
	var s = num + "";
	while (s.length < size) s = "0" + s;
	return s;
}
function getRandomIntInclusive(min, max,) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function setRandomvalue() {

	var a = document.getElementById("a").innerText;
	var c = document.getElementById("c").innerText;
	var a_ = getRandomIntInclusive(0, 10);
	var c_ = getRandomIntInclusive(0, 90);
	c = c_ < 10 ? "0" + c_ : c_;
	if (c_ < 10) {

		document.getElementById("c").innerHTML = "0" + c_;
	}


	document.getElementById("a").innerHTML = a_;
	document.getElementById("c").innerHTML = padLeadingZeros(c_, 2)

}
function addToRadiov1() {
	var a = document.getElementById("a").innerText;
	if (a > -1 && a < 9) {
		a++
		document.getElementById("a").innerHTML = a;
	}

}
function addToRadiov2() {

	var c = document.getElementById("c").innerText;
	if (c > -1 && c < 99) {
		c++
		document.getElementById("c").innerHTML = padLeadingZeros(c, 2)
	}

}
function minusFromRadiov1() {
	var a = document.getElementById("a").innerText;
	if (a > 0 && a <= 9) {
		a--
		document.getElementById("a").innerHTML = a;
	}
}
function minusFromRadiov2() {
	var c = document.getElementById("c").innerText;
	if (c > 0 && c <= 99) {
		c--
		document.getElementById("c").innerHTML = padLeadingZeros(c, 2)
	}
}
function checkfreq() {
	var a_user = document.getElementById("a").innerText;
	var c_user = document.getElementById("c").innerText;

	var a_corr = 0;
	var c_corr = 42;

	if (a_user == a_corr && c_user == c_corr) {
		movestageradio();
	}
	else {

	}
}

function setcaounterPodpowiedz() {
	var counter = window.localStorage.getItem('podpowiedzicounter');
	//alert(counter);
	counter++;
	window.localStorage.setItem('podpowiedzicounter', counter);

}
function movestageradio() {

	var game = document.getElementById("game");

	mystyle = document.createElement("div");
	mystyle.classList.add("mystyle");
	// mystyle.addEventListener("onload", Literki);
	game.appendChild(mystyle);

	mv = document.createElement("div");
	mv.classList.add("moving-letters");
	mystyle.appendChild(mv);

	h1 = document.createElement("h1");
	h1.classList.add("ml1");
	mv.appendChild(h1);

	tw = document.createElement("div");
	tw.classList.add("text-wrapper");
	h1.appendChild(tw);

	lett = document.createElement("div");
	lett.classList.add("letters");
	tw.appendChild(lett);


	lett.innerHTML = "Udało Ci się nastawić radio! W związku z tym masz kontakt z centrum kryzysowym....  GRACZ: Halo, odbiór, jest tu ktoś?  KTOŚ PO DRUGIEJ STRONIE: Odbiór. Twoim zadaniem jest poprowadzić pociąg. Aktualnie dojeżdzasz na stację Kościuszki, powtarzam - KOŚCIUSZKI. Wysyłamy na stację Stoki, powtarzam - STOKI, brygadę saperską. Skoro maszynista nie żyje, musisz poprowadzić pociąg! NIE MASZ WYBORU, POWODZENIA!"
	Literki();


	var btn = document.createElement("button");
	btn.innerHTML = "DALEJ!";
	document.body.appendChild(btn);
	btn.classList.add("buttonnext");
	btn.addEventListener("click", stage7_next);
}

function gethelpstage7_v1() {

	setcaounterPodpowiedz();
	var tekst = "Kod alarmowy składa się z trzech cyfr, a o ich kolejności musisz się dowiedzieć z tabliczki “Kanał alarmowy"
	var removed_div = document.getElementById("p1");

	var game = document.getElementById("game");

	mystyle = document.createElement("div");
	mystyle.classList.add("podpowiedz_box");
	game.appendChild(mystyle);
	mystyle.innerHTML = tekst;
	mystyle.id = "podpowiedz_box"
	removed_div.remove();
	var err_btn = document.createElement("div");
	err_btn.id = "closed"
	err_btn.innerHTML = "x";
	game.appendChild(err_btn);
	err_btn.classList.add("err_btn");
	err_btn.addEventListener("click", podpowiedzclosev1);
}
function podpowiedzclosev1() {
	game.appendChild(mystyle);
	var removed_div1 = document.getElementById("podpowiedz_box");
	var removed_div2 = document.getElementById("closed");
	removed_div1.remove();
	removed_div2.remove();

	newD = document.createElement("div");
	newD.classList.add("podpowiedz");
	newD.id = "p1";
	game.appendChild(newD);
	newD.addEventListener("click", gethelpstage7_v2);

}
function gethelpstage7_v2() {
	setcaounterPodpowiedz();
	var tekst = "Zacznij od linijki 4, która podaje najwięcej informacji. Wykreśl wszystkie te liczby, które na pewno nie mogą pojawić się w kodzie. "
	var removed_div = document.getElementById("p1");

	var game = document.getElementById("game");

	mystyle = document.createElement("div");
	mystyle.classList.add("podpowiedz_box");
	game.appendChild(mystyle);
	mystyle.innerHTML = tekst;
	mystyle.id = "podpowiedz_box"
	removed_div.remove();
	var err_btn = document.createElement("div");
	err_btn.id = "closed"
	err_btn.innerHTML = "x";
	game.appendChild(err_btn);
	err_btn.classList.add("err_btn");
	err_btn.addEventListener("click", podpowiedzclosev2);
}
function podpowiedzclosev2() {
	game.appendChild(mystyle);
	var removed_div1 = document.getElementById("podpowiedz_box");
	var removed_div2 = document.getElementById("closed");
	removed_div1.remove();
	removed_div2.remove();

	newD = document.createElement("div");
	newD.classList.add("podpowiedz");
	newD.id = "p1";
	game.appendChild(newD);
	newD.addEventListener("click", gethelpstage7_v3);

}
function gethelpstage7_v3() {

	setcaounterPodpowiedz();
	var tekst = "Na którym miejscu powinno stać 0?  "
	var removed_div = document.getElementById("p1");

	var game = document.getElementById("game");

	mystyle = document.createElement("div");
	mystyle.classList.add("podpowiedz_box");
	game.appendChild(mystyle);
	mystyle.innerHTML = tekst;
	mystyle.id = "podpowiedz_box"
	removed_div.remove();
	var err_btn = document.createElement("div");
	err_btn.id = "closed"
	err_btn.innerHTML = "x";
	game.appendChild(err_btn);
	err_btn.classList.add("err_btn");
	err_btn.addEventListener("click", podpowiedzclosev3);
}
function podpowiedzclosev3() {

	game.appendChild(mystyle);
	var removed_div1 = document.getElementById("podpowiedz_box");
	var removed_div2 = document.getElementById("closed");
	removed_div1.remove();
	removed_div2.remove();

	newD = document.createElement("div");
	newD.classList.add("podpowiedz");
	newD.id = "p1";
	game.appendChild(newD);
	newD.addEventListener("click", gethelpstage7_v4);

}

function gethelpstage7_v4() {
	setcaounterPodpowiedz();

	var tekst = "Na pierwszym. Teraz skup się na pierwszej linijce.?  "
	var removed_div = document.getElementById("p1");

	var game = document.getElementById("game");

	mystyle = document.createElement("div");
	mystyle.classList.add("podpowiedz_box");
	game.appendChild(mystyle);
	mystyle.innerHTML = tekst;
	mystyle.id = "podpowiedz_box"
	removed_div.remove();
	var err_btn = document.createElement("div");
	err_btn.id = "closed"
	err_btn.innerHTML = "x";
	game.appendChild(err_btn);
	err_btn.classList.add("err_btn");
	err_btn.addEventListener("click", podpowiedzclosev4);
}
function podpowiedzclosev4() {
	game.appendChild(mystyle);
	var removed_div1 = document.getElementById("podpowiedz_box");
	var removed_div2 = document.getElementById("closed");
	removed_div1.remove();
	removed_div2.remove();

	newD = document.createElement("div");
	newD.classList.add("podpowiedz");
	newD.id = "p1";
	game.appendChild(newD);
	newD.addEventListener("click", gethelpstage7_v5);
}
function gethelpstage7_v5() {
	setcaounterPodpowiedz();

	var tekst = "Ostatnią cyfrą jest 2 last"
	var removed_div = document.getElementById("p1");

	var game = document.getElementById("game");

	mystyle = document.createElement("div");
	mystyle.classList.add("podpowiedz_box");
	game.appendChild(mystyle);
	mystyle.innerHTML = tekst;
	mystyle.id = "podpowiedz_box"
	removed_div.remove();
	var err_btn = document.createElement("div");
	err_btn.id = "closed"
	err_btn.innerHTML = "x";
	game.appendChild(err_btn);
	err_btn.classList.add("err_btn");
	err_btn.addEventListener("click", podpowiedzclosev5);
}
function podpowiedzclosev5() {
	game.appendChild(mystyle);
	var removed_div1 = document.getElementById("podpowiedz_box");
	var removed_div2 = document.getElementById("closed");
	removed_div1.remove();
	removed_div2.remove();

}
function gethelpstage9_v1() {
	setcaounterPodpowiedz();

	var tekst = "Przypomnij sobie informację z maila. O którym wagonie nie mógł zapomnieć odbiorca? ";
	var removed_div = document.getElementById("p1");

	var game = document.getElementById("game");

	mystyle = document.createElement("div");
	mystyle.classList.add("podpowiedz_box");
	game.appendChild(mystyle);
	mystyle.innerHTML = tekst;
	mystyle.id = "podpowiedz_box"
	removed_div.remove();
	var err_btn = document.createElement("div");
	err_btn.id = "closed"
	err_btn.innerHTML = "x";
	game.appendChild(err_btn);
	err_btn.classList.add("err_btn2");
	err_btn.addEventListener("click", podpowiedzCloseStage9_v1);
}
function podpowiedzCloseStage9_v1() {
	game.appendChild(mystyle);
	var removed_div1 = document.getElementById("podpowiedz_box");
	var removed_div2 = document.getElementById("closed");
	removed_div1.remove();
	removed_div2.remove();

	newD = document.createElement("div");
	newD.classList.add("podpowiedz");
	newD.id = "p1";
	game.appendChild(newD);
	newD.addEventListener("click", gethelpstage9_v2);

}
function gethelpstage9_v2() {
	setcaounterPodpowiedz();

	var tekst = "W której części pociągu podkładane są najczęściej ładunki wybuchowe?  ";
	var removed_div = document.getElementById("p1");

	var game = document.getElementById("game");

	mystyle = document.createElement("div");
	mystyle.classList.add("podpowiedz_box");
	game.appendChild(mystyle);
	mystyle.innerHTML = tekst;
	mystyle.id = "podpowiedz_box"
	removed_div.remove();
	var err_btn = document.createElement("div");
	err_btn.id = "closed"
	err_btn.innerHTML = "x";
	game.appendChild(err_btn);
	err_btn.classList.add("err_btn2");
	err_btn.addEventListener("click", podpowiedzCloseStage9_v2);
}
function podpowiedzCloseStage9_v2() {
	game.appendChild(mystyle);
	var removed_div1 = document.getElementById("podpowiedz_box");
	var removed_div2 = document.getElementById("closed");
	removed_div1.remove();
	removed_div2.remove();

	newD = document.createElement("div");
	newD.classList.add("podpowiedz");
	newD.id = "p1";
	game.appendChild(newD);
	newD.addEventListener("click", gethelpstage9_v3);
}
function gethelpstage9_v3() {
	setcaounterPodpowiedz();

	var tekst = " Wagon 4 + toaleta.   ";
	var removed_div = document.getElementById("p1");
	var game = document.getElementById("game");

	mystyle = document.createElement("div");
	mystyle.classList.add("podpowiedz_box");
	game.appendChild(mystyle);
	mystyle.innerHTML = tekst;
	mystyle.id = "podpowiedz_box"
	removed_div.remove();
	var err_btn = document.createElement("div");
	err_btn.id = "closed"
	err_btn.innerHTML = "x";
	game.appendChild(err_btn);
	err_btn.classList.add("err_btn2");
	err_btn.addEventListener("click", podpowiedzCloseStage9_v3);
}
function podpowiedzCloseStage9_v3() {
	game.appendChild(mystyle);
	var removed_div1 = document.getElementById("podpowiedz_box");
	var removed_div2 = document.getElementById("closed");
	removed_div1.remove();
	removed_div2.remove();

}