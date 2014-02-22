/**
 * @author Chidinma Irene Nwoye
 */
function pageUp(){
	
	//This is my jQuery div
	var myNewDiv = $("<div>");                         
	$(myNewDiv).html("I've created a new div");
	
	$("#DocumentBox").append(myNewDiv);
	
	console.log("my document loads!");
  	
  }


  $(document).ready(pageUp);

console.log("my javascript file works!");
  
  





