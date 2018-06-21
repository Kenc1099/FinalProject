var library = 25;
var s1 = 0;
var s2 = 0;
var s3 = 0;

  function checkout() {

	  var p = parseInt(prompt("How many books will you checkout?"));
	  if (p > library){
	  	alert("LIBRARY DOESN'T HAVE ENOUGH BOOKS")
	  } else if(isNaN(p)){
      alert("NOT A VALID NUMBER")
	  }else{
      s1 = s1 + p;
      library = library - p;
             document.getElementById("display").innerHTML = library;
	  return document.getElementById("p1").innerHTML = s1;
	 console.log("hello")}
  }

 function checkout2() {

 	 var p = parseInt(prompt("How many books will you checkout?"));
 	 if (p > library){
 	 	alert("LIBRARY DOESN'T HAVE ENOUGH BOOKS")
 	 	} else if(isNaN(p)){
      alert("NOT A VALID NUMBER")
	  } else {
      s2 = s2 + p;
      library = library - p;
             document.getElementById("display").innerHTML = library;
 	 return document.getElementById("p2").innerHTML = s2;
 	console.log("hello")}
  }

   function checkout3() {

 	  var p = parseInt(prompt("How many books will you checkout?"));
 	  if (p > library){
 	  	alert("LIBRARY DOESN'T HAVE ENOUGH BOOKS")
 	  	} else if(isNaN(p)){
      alert("NOT A VALID NUMBER")
	  } else {
       s3 = s3 + p;
       library = library - p;
              document.getElementById("display").innerHTML = library;
 	  return document.getElementById("p3").innerHTML = s3;
 	 console.log("hello")}
   }

function checkin() {

	var p = parseInt(prompt("How many books will you return?"));
	  if (p > s1){
	  	alert("STUDENT 1 DOESN'T HAVE ENOUGH BOOKS")
	  	} else if(isNaN(p)){
      alert("NOT A VALID NUMBER")
	  } else {
      s1 = s1 - p;
      library = library + p;
             document.getElementById("display").innerHTML = library;
	  return document.getElementById("p1").innerHTML = s1;
}

}

function checkin2() {

	var p = parseInt(prompt("How many books will you return?"));
	  if (p > s2){
	  	alert("STUDENT 2 DOESN'T HAVE ENOUGH BOOKS")
	  	} else if(isNaN(p)){
      alert("NOT A VALID NUMBER")
	  } else {
      s2 = s2 - p;
      library = library + p;
             document.getElementById("display").innerHTML = library;
	  return document.getElementById("p2").innerHTML = s2;
}

}

function checkin3() {

	var p = parseInt(prompt("How many books will you return?"));
	  if (p > s3){
	  	alert("STUDENT 3 DOESN'T HAVE ENOUGH BOOKS")
	  	} else if(isNaN(p)){
      alert("NOT A VALID NUMBER")
	  } else {
      s3 = s3 - p;
      library = library + p;
             document.getElementById("display").innerHTML = library;
	  return document.getElementById("p3").innerHTML = s3;
}

}








