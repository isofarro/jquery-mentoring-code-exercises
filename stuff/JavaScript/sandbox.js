

/**********************************************************************
*
*	Add an event to onload 
*
***********************************************************************/

// W3C compliant browsers:
/**
window.addEventListener('load', function(e) {
	window.alert("Hello W3C World");
}, false);
**/

//IE6 and earlier:
/**
window.attachEvent('onload', function() {
	window.alert("Hello IE World");
});
**/


// jQuery
/**
$(function(e) {
	window.alert("Hello jQuery World");
});
**/