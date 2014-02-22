/**
 * @author Chidinma Irene Nwoye
 */

console.log("My javascript file loaded properly!"); //I included this function to be sure my javascript file is working

function includeJSON(dataMovies){
	
	//In my event handler, I'm console.logging an attribute, title, from the second object in my json file
	console.log(dataMovies.myMovies[1].title);
	
}

//Here's my pageUp function
function pageUp(){
	
	console.log("I'm now at document ready!!");
	
	//This is my new div element that I created with jQuery
	var myNewDiv = $("<div>");          
	//I've included text to my new div element using jQuery, "$"
	//I've also added html i.e. the string          
	$(myNewDiv).html("I've created a new div");
	
	//I've prompted jQuery to put my new div into inside the div with the id, "DocumentBox"
	//I expect that the new div will therefore contain the text,"I've created a new div"
	$("#DocumentBox").append(myNewDiv);
	
	
	//I'm using the jQuery get function to load my dataMovies json file which I created from my Assignment 3 array of objects
	//It including 3 parameters: the 1st parameter is the name of my json file, dataMovies.json
	//The 2nd parameter is the function that will be called immediately the file loads i.e. includeJSON which I declared at the top of my code
	//The 3rd parameter is a string of the file type that is expected
	$.get("dataMovies.json",includeJSON,"json"); 
  	
  }


  $(document).ready(pageUp); //I've used $(document).ready to call my function, pageUp

console.log("My document is ready!!");
  
  





