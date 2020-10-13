var hidden = false;
function more() {
	if(!hidden){
    	document.getElementById("more1").style.visibility = 'visible';
        document.getElementById("more1").style.display = "block";
        document.getElementById("moreBtn").style.visibility = 'hidden';
        document.getElementById("moreBtn").style.display = 'none';
        document.getElementById("lessBtn").style.visibility = "visible";
        document.getElementById("lessBtn").style.display = "block";
    }
   	
}
function less(){
	document.getElementById("more1").style.visibility = 'hidden';
    document.getElementById("more1").style.display = "none";
    document.getElementById("lessBtn").style.visibility = "hidden";
    document.getElementById("lessBtn").style.display = "none";
    document.getElementById("moreBtn").style.visibility = 'visible';
    document.getElementById("moreBtn").style.display = 'block';
}
function more2() {
	if(!hidden){
    	document.getElementById("more2").style.visibility = 'visible';
        document.getElementById("more2").style.display = "block";
        document.getElementById("moreBtn2").style.visibility = 'hidden';
        document.getElementById("moreBtn2").style.display = 'none';
        document.getElementById("lessBtn2").style.visibility = "visible";
        document.getElementById("lessBtn2").style.display = "block";
    }
   	
}
function less2(){
	document.getElementById("more2").style.visibility = 'hidden';
    document.getElementById("more2").style.display = "none";
    document.getElementById("lessBtn2").style.visibility = "hidden";
    document.getElementById("lessBtn2").style.display = "none";
    document.getElementById("moreBtn2").style.visibility = 'visible';
    document.getElementById("moreBtn2").style.display = 'block';
}
function more3() {
	if(!hidden){
    	document.getElementById("more3").style.visibility = 'visible';
        document.getElementById("more3").style.display = "block";
        document.getElementById("moreBtn3").style.visibility = 'hidden';
        document.getElementById("moreBtn3").style.display = 'none';
        document.getElementById("lessBtn3").style.visibility = "visible";
        document.getElementById("lessBtn3").style.display = "block";
    }
   	
}
function less3(){
	document.getElementById("more3").style.visibility = 'hidden';
    document.getElementById("more3").style.display = "none";
    document.getElementById("lessBtn3").style.visibility = "hidden";
    document.getElementById("lessBtn3").style.display = "none";
    document.getElementById("moreBtn3").style.visibility = 'visible';
    document.getElementById("moreBtn3").style.display = 'block';
}