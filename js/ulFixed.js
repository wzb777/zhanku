var ulFixed=document.getElementById("ulFixed");
window.onscroll=function(){
	var onscrollTop=610;
	var sTop=document.body.scrollTop||document.documentElement.scrollTop;
	if(sTop>onscrollTop){
		ulFixed.style.position="fixed";
		ulFixed.style.top=0;
	}else{
		ulFixed.style.position="static";
	}
}
