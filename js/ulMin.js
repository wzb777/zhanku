
var ulMin=document.getElementById("ulMin");
var dataMin=[
	{
		"img1":"images/bottom-nav-1.jpg",
		"p1":"《游乐园》-创作考试"
	},
	{
		"img1":"images/bottom-nav-1.jpg",
		"p1":"《游乐园》-创作考试"
	},
	{
		"img1":"images/bottom-nav-1.jpg",
		"p1":"《游乐园》-创作考试"
	},
	{
		"img1":"images/bottom-nav-1.jpg",
		"p1":"《游乐园》-创作考试"
	},
	{
		"img1":"images/bottom-nav-1.jpg",
		"p1":"《游乐园》-创作考试"
	}
]
function showdataMin(){
	var str="";
	for(var i=0;i<dataMin.length;i++){
		var cur=dataMin[i];
		str+='<li><a href="###"><img src="'+cur.img1+'"><p>'+cur.p1+'</p></a></li>';
	}
	ulMin.innerHTML=str;
}
showdataMin()
