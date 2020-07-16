function zindex(){
	var pos = document.getElementsByClassName("menubar")[0];
	var pos1 = window.getComputedStyle(pos, null).getPropertyValue("left");
	if(pos1 == "0px")
	{
		document.getElementsByClassName("navbar")[0].style.zIndex="5000";
	}
	else if(pos1 > "0px")
	{
		document.getElementsByClassName("navbar")[0].style.zIndex="100";
	}
	else{
		console.log("ERROR");
	}
}
function left(){
	
	var mpos = document.getElementsByClassName("img_icons")[1];
	var mpos1 = window.getComputedStyle(mpos, null).getPropertyValue("margin-left");
	var wpos1 = window.getComputedStyle(mpos, null).getPropertyValue("width");
	y = parseInt(wpos1);
	wpos1 = parseInt(wpos1);
	wpos1 = wpos1 / 3;
	mpos1 = parseInt(mpos1);
	wpos1 = parseInt(wpos1);
	console.log(mpos1);
	console.log(wpos1);
	mpos1 = mpos1 + wpos1;
	var x = (1) * mpos1;

	if(mpos1 <= 0)
	{
		mpos1 = mpos1 + "px";
		document.getElementsByClassName("img_icons")[1].style.marginLeft=mpos1;
	}
	else
	{
		x = y / 3;
		x = x * 2 * (-1);
		x = x + "px";
		document.getElementsByClassName("img_icons")[1].style.marginLeft=x;
	}
}	
function right(){

	var mpos = document.getElementsByClassName("img_icons")[1];
	var mpos1 = window.getComputedStyle(mpos, null).getPropertyValue("margin-left");
	var wpos1 = window.getComputedStyle(mpos, null).getPropertyValue("width");
	y = parseInt(wpos1);
	y = y / 3;
	y = y * 2;
	wpos1 = parseInt(wpos1);
	wpos1 = wpos1 / 3;
	mpos1 = parseInt(mpos1);
	mpos1 = mpos1 - wpos1;
	var x = (-1) * mpos1;
	y = parseInt(y);
	x = parseInt(x);
	if(x > y)
	{
		document.getElementsByClassName("img_icons")[1].style.marginLeft="0px";
	}
	else
	{
		mpos1 = mpos1 + "px";
		document.getElementsByClassName("img_icons")[1].style.marginLeft=mpos1;
	}	
}
function left0(){
	
	var mpos = document.getElementsByClassName("img_icons")[0];
	var mpos1 = window.getComputedStyle(mpos, null).getPropertyValue("margin-left");
	var wpos1 = window.getComputedStyle(mpos, null).getPropertyValue("width");
	y = parseInt(wpos1);
	wpos1 = parseInt(wpos1);
	wpos1 = wpos1 / 3;
	mpos1 = parseInt(mpos1);
	wpos1 = parseInt(wpos1);
	console.log(mpos1);
	console.log(wpos1);
	mpos1 = mpos1 + wpos1;
	var x = (1) * mpos1;

	if(mpos1 <= 0)
	{
		console.log("IF");
		console.log(mpos1);
		mpos1 = mpos1 + "px";
		document.getElementsByClassName("img_icons")[0].style.marginLeft=mpos1;
	}
	else
	{
		console.log("ELSE");
		console.log(mpos1);
		x = y / 3;
		x = x * 2 * (-1);
		x = x + "px";
		document.getElementsByClassName("img_icons")[0].style.marginLeft=x;
	}
}	
function right0(){
	var mpos = document.getElementsByClassName("img_icons")[0];
	var mpos1 = window.getComputedStyle(mpos, null).getPropertyValue("margin-left");
	var wpos1 = window.getComputedStyle(mpos, null).getPropertyValue("width");
	y = parseInt(wpos1);
	y = y / 3;
	y = y * 2;
	wpos1 = parseInt(wpos1);
	wpos1 = wpos1 / 3;
	mpos1 = parseInt(mpos1);
	mpos1 = mpos1 - wpos1;
	var x = (-1) * mpos1;
	y = parseInt(y);
	x = parseInt(x);
	if(x > y)
	{	
		document.getElementsByClassName("img_icons")[0].style.marginLeft="0px";
	}
	else
	{
		mpos1 = mpos1 + "px";
		document.getElementsByClassName("img_icons")[0].style.marginLeft=mpos1;
	}	
}