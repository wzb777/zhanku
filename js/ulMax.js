
//ajax
var xhr=new XMLHttpRequest();
xhr.open("get","js/data.json",false);
var data=null;
xhr.onreadystatechange=function(){
	if(xhr.readyState==4&&xhr.status==200){
		data=xhr.responseText;
		data=JSON.parse(data);
		console.log(data)
	}
}
xhr.send();
//
var ulMax=document.getElementById("ulMax");

function showData(){
	var str="";
	for(var i=0;i<data.length;i++){
		var cur=data[i]
		str+='<li>';
		str+='<img src="'+cur.src1+'">';
		str+='<p>'+cur.p1+'</p>';
		str+='<p>'+cur.p2+'</p>';
		str+='<p>';
		str+='<i class="iconfont">'+cur.i1+'</i>';
		str+='<span>'+cur.span1+'</span>';
		str+='<i class="iconfont">'+cur.i2+'</i>';
		str+='<span>'+cur.span2+'</span>';
		str+='<i class="iconfont">'+cur.i3+'</i>';
		str+='<span>'+cur.span3+'</span>';
		str+='</p>';
		str+='<p><img src="'+cur.src2+'"><i>'+cur.i4+'</i><span>'+cur.span4+'</sapn></p>';
		str+='</li>';
	}
	ulMax.innerHTML=str;
}
showData()
