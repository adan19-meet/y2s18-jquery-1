// Write all your JavaScript and JQuery code in this file! :)



function updateSize(newSize) {
	$("#logo").css("width", newSize);
  // FINISH ME! Set the width of the MEET logo to be newSize in pixels.
}


function updateLeftPosition(newX) {
	$("#logo").css({left: newX,  position:'absolute'});
	
	// FINISH ME

}

function updateTopPosition(newY) {
	$("#logo").css({top: newY,  position:'absolute'});

	
	// FINISH ME
}
updateSize("60px");
updateLeftPosition("100px");
updateTopPosition("100px");