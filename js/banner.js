var banner=document.getElementsByClassName("banner")[0];
var btn=banner.getElementsByClassName("btn");
var banLunbo=document.getElementById("banLunbo");
//轮播开始
var index=0;
var lunbo=document.getElementById("lunbo");
var list=lunbo.getElementsByTagName("li");
for(var i=0;i<list.length;i++){
}
function limit(){//越界处理
	if(index>list.length-1){
		index=0;
	}
	if(index<0){
		index=list.length-1;
	}
	lunbo.style.left=-list[0].offsetWidth*index+"px";
}
btn[0].onclick=function(){
	index--;
	limit();
}
btn[1].onclick=function(){
	index++;
	limit();
}
var time=setInterval(btn[1].onclick,2000);
banLunbo.onmouseover=function(){
	clearInterval(time);
}
banLunbo.onmouseout=function(){
	time=setInterval(btn[1].onclick,2000);
}
//






//
function bannerHover(){
	banner.onmouseover=function(){
		btn[0].style.display="block";
		btn[1].style.display="block";
	}
	banner.onmouseout=function(){
		btn[0].style.display="none";
		btn[1].style.display="none";
	}
	return false;
}
bannerHover()
