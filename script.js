var library = 25;
var s1 = 0;


 function checkout() {

	 var p = parseInt(prompt("How many books will you checkout?"));
     s1 = s1 + p;
     library = library - p;
            document.getElementById("display").innerHTML = library;
	 return document.getElementById("p1").innerHTML = s1;
	console.log("hello")
 }




