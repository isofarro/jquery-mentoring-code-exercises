//window.alert("Hello inline");


// Setting variables
var myVariable = 'Hello';
var myOtherVariable = 27;

// Setting an empty array
var emptyList = [];

// Setting an array with starting values
var myList = [1, 2, 5, 7, 11];

// Creating a new Object
var nextVar  = {};

// Adding a property to an object
nextVar.name = "Me"; 

nextVar.data = {};

// Object dot notation
nextVar.data.item1 = "Item 1";

// Object square bracket notation
nextVar.data["item1"]

// Getting an element in an array
myList[0];

nextVar.name; // "Me"
nextVar["name"]; // "Me"

// Square bracket notation to get "variable properties"
var key = "name";
nextVar[key];


// Object Literal (creating a new object)
// Almost JSON
var myObject = {
	"name": "Mike",
	"surname": "Davies",
	"myData": {
		"item1": "Item1",
	}
};

// Referring to properties inside an object
myObject.name;
myObject.surname;


// One way of declaring a new function
function newFunction() {
	
};
newFunction();

// Another way of declaring a new function
var newFunction = function() {
	
};
newFunction();

// Objects with variable data
var globVar = "XYZ"
var anObject = {
	name: "Mike",
	localVar: globVar,
	getName: function() {
		return anObject.name;
	}
}

// calling a function inside an object
anObject.getName();
anObject.getName;

var myName = anObject.getName;
myName();


// variable scope
var thisIsGlobal = true;
function aFunction() {
	// this makes the variables listed local to the function scope
	var localVariable, localVar2, i, j;

	thisIsGlobal = "still true";
	thisIsGlobal = newFunction;
	
	localVariable = 2;
	
	localVariable += 2;
	
	for(i=0, j=thisIsGlobal.length; i<j; i++) {
		
	}

	var callback = function() {
		var innerVariable = '';
		// We can see: localVariable, thisIsGlobal, i, j
		// closure
	}
	
	window.ourFunction = callback;
	YAHOO.ourFunction  = callback;
	// innerVariable doesn't exist
}



// Global objects in a browser
window;
document; // DOM


var myNode = document.getElementById("winners");
var myNodes = document.getElementsByTagName("a");
var myNodes = document.getElementsByTagName("*");


window.onload; // property: function
// Primitive way of adding an event handler to an event
window.onload = function() {
	window.alert("Inline hello");
};
// This next event handler replaces the previous one
window.onload = function() {
	window.alert("A second hello");
}

// Simon Willison's hack of not trashing existing event handlers
if (typeof window.onload == "function") {
	var funcRef = window.onload;
	window.onload = function() {
		funcRef();
		alert("A second hello");
	}
}

// the contents of the onload attribute become the content of
// an anonymous function attached to the load event.
<body onload="window.alert(\"Inline hello\");">


// Object detection. Do you support DOM?
if (document) {
	// DOM is supported
}



document.documentElement
document.body
getElementById("anId");
//All return DomNode

var node = document.getElementById("winners");


// W3C Dom Level-2 Adding an event handler to a node's event
node.addEventListener(
	'click', // event name (no "on" before the event name)
	function(e) {
		// function that's called when event happens on that node
	},
	false // don't worry about this yet. Always false. Blame IE
);


// IE6 method of adding DOM event listeners to a node.
node.attachEvent(
	'onclick',
	function() {
		
	}
);


// Attempt to abstract away differences between W3C Dom Events,
// IE6's Dom Events, and other browsers
function addEvent(node, event, func) {
	if (node.addEventListener) {
		node.addEventListener(event, func, false);
	} else if (node.attachEvent) {
		node.attachEvent('on'+event, func);
	} else {
		if (typeof node['on' + event] == 'function') {
			var oldFunc = node['on' + event];
			node['on' + event] = function() {
				oldFunc();
				func();
			}
		} else {
			node['on' + event] = func;
		}
	} 
}

window.event; // IE6 global variable detailling the event that occurred.

function handleOurEvent(e) {
	var e = e || window.event; // Hack for IE6 - e doesn't get passed in.
	window.alert("Hello " + e.target.tagName);	
}


// YUI abstracts away browser differences, so we don't have to.
YUI.addEventListener(node, event, func);

function handleClick(e) {
	window.alert(e.target.tagName);
}




function functionName() {
	
	
}

function $() {
	
}

$(); // This is just a function, called $

