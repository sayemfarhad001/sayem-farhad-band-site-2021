document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";

  var input = document.getElementById("stuffed");
  var x = input.value;
  document.getElementById("paragraph").innerHTML += "<br>&lt;me&gt; " + x;

  input.value = '';
  input.focus();

}

// document.getElementById("myBtn").addEventListener("click", function() {
//     document.getElementById("demo").innerHTML = "Hello World";
//   });





// Empty Comments after Post
// JS
// function post() {
//   var x = document.getElementById("stuffed").value;
//   document.getElementById("paragraph").innerHTML += "<br>&lt;me&gt; " + x;
  
//   document.getElementById("stuffed").value = ''
// }

// Add to HTML
/*   
<input type="text" aria-label="Comments" placeholder="Comments" value="" 
    style="padding:10px 50px 10px 5px" id="stuffed"></input>

<button onclick="post()" style="text-decoration: none; color: #ffffff; 
    background-color: #5dbbd4; padding: 12px 10px 12px 10px; border-width: 0px;">Post</button>


<p style="color: #000;" id="paragraph"></p> */





// AddEVENTLISTENER
// document.getElementById('postbtn').addEventListener('click', post);

// function post() {
//   var input = document.getElementById("stuffed");
//   var x = input.value;
//   document.getElementById("paragraph").innerHTML += "<br>&lt;me&gt; " + x;

//   input.value = '';
//   input.focus();
// }

// HTML INPUT BUTTON
/* <input type="text" aria-label="Comments" placeholder="Comments" value="" 
	style="padding:10px 50px 10px 5px" id="stuffed">
	</input>
<button id="postbtn" style="text-decoration: none; color: #ffffff; 
	background-color: #5dbbd4; padding: 12px 10px 12px 10px; 
	border-width: 0px;">
	Post</button>

<p style="color: #000;" id="paragraph"></p> */