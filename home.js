function zindex(){
	var pos = document.getElementsByClassName("menubar")[0];
	var pos1 = window.getComputedStyle(pos, null).getPropertyValue("left");
	if(pos1 < "0px")
	{
		document.getElementsByClassName("navbar")[0].style.zIndex="5000";
	}
	else if(pos1 == "0px")
	{
		document.getElementsByClassName("navbar")[0].style.zIndex="100";
	}
	else{
		console.log("ERROR");
	}
}