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
	mpos1 = mpos1 + wpos1;
	var x = (1) * mpos1;
	if(mpos1 <= 0)
	{
		mpos1 = mpos1 + "px";
		document.getElementsByClassName("img_icons")[1].style.marginLeft=mpos1;
	}
	else
	{
		document.getElementsByClassName("img_icons")[1].style.marginLeft="-800px";
	}
}	
function right(){
	var mpos = document.getElementsByClassName("img_icons")[1];
	var mpos1 = window.getComputedStyle(mpos, null).getPropertyValue("margin-left");
	var wpos1 = window.getComputedStyle(mpos, null).getPropertyValue("width");
	y = parseInt(wpos1);
	wpos1 = parseInt(wpos1);
	wpos1 = wpos1 / 3;
	mpos1 = parseInt(mpos1);
	mpos1 = mpos1 - wpos1;
	var x = (-1) * mpos1;
	if(x == y)
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
	mpos1 = mpos1 + wpos1;
	var x = (1) * mpos1;
	if(mpos1 <= 0)
	{
		mpos1 = mpos1 + "px";
		document.getElementsByClassName("img_icons")[0].style.marginLeft=mpos1;
	}
	else
	{
		document.getElementsByClassName("img_icons")[0].style.marginLeft="-800px";
	}
}	
function right0(){
	var mpos = document.getElementsByClassName("img_icons")[0];
	var mpos1 = window.getComputedStyle(mpos, null).getPropertyValue("margin-left");
	var wpos1 = window.getComputedStyle(mpos, null).getPropertyValue("width");
	y = parseInt(wpos1);
	wpos1 = parseInt(wpos1);
	wpos1 = wpos1 / 3;
	mpos1 = parseInt(mpos1);
	mpos1 = mpos1 - wpos1;
	var x = (-1) * mpos1;
	if(x == y)
	{
		document.getElementsByClassName("img_icons")[0].style.marginLeft="0px";
	}
	else
	{
		mpos1 = mpos1 + "px";
		document.getElementsByClassName("img_icons")[0].style.marginLeft=mpos1;
	}	
}