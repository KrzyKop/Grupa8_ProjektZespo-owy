var stage2 = "stage2.html"
var stageBomb= "bomb.html"
var mainpage="main.html"
var stage_end_fail = "stage_end_failed.html"
var stage_end_pos = "stage_positive.html"; ///brak
var stage_driving_train="train.html"   // brak
	function backtomainpage()
	{
		document.location.href = mainpage;
	}	
	function startfun() 
	{
           // alert("Witaj Graczu")
		   document.location.href = stage2;
	
    }
    function next_page() //stage2
{
	document.location.href = stageBomb;
}
function  failed(){ document.location.href= stage_end_fail }
function  positive(){  document.location.href = stage_end_pos; }