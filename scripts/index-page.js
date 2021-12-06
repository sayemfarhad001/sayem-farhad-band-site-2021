// Final JS - Index Page

// Step 1 - create JS Array with 3 default objects
let commentArray = [{
	name: "Connor Walton",
	timeStamp: "02/17/2021",
	commentText: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
},
{
	name: "Emilie Beach",
	timeStamp: "01/09/2021",
	commentText: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
},
{
	name: "Miles Acosta",
	timeStamp: "12/20/2020",
	commentText: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
}];

// Step 2 - Create function to display default comments
let displayComment = function(){
	for (i=0; i<commentArray.length; i++) {
		// Make a new element, and set input default comment		
		const nameTag = document.createElement('p');
		nameTag.innerText = commentArray[i].name;
		nameTag.classList.add("section__form-name");

		const timeStampTag = document.createElement('p');
		timeStampTag.innerText = commentArray[i].timeStamp;
		timeStampTag.classList.add("section__form-timeStamp");

		// Create Inner Div	
		const innerDiv = document.createElement('div');
		innerDiv.classList.add("section__form-innerDiv");
		
		innerDiv.appendChild(nameTag);
		innerDiv.appendChild(timeStampTag);

		const commentTextTag = document.createElement('p');
		commentTextTag.innerText = commentArray[i].commentText;
		commentTextTag.classList.add("section__form-commentText");
		
		// Create Outer Div
		const outerDiv = document.createElement('div');
		outerDiv.classList.add("section__form-outerDiv");
			
		outerDiv.appendChild(innerDiv);
		outerDiv.appendChild(commentTextTag);

		const logoTag = document.createElement('p');
		logoTag.classList.add("section__form-logo");

		// Create Main Div
		const mainDiv = document.createElement('div');
		mainDiv.classList.add("section__form-mainDiv");
			
		mainDiv.appendChild(logoTag);
		mainDiv.appendChild(outerDiv);

		// Grab comment section
		const commentSection = document.querySelector(".section__comment");
		// Add a Complete Comment 
		commentSection.appendChild(mainDiv);
	}
}

// Step 3 - Call the created funtion - before any event
displayComment()


// Step 4 - Create an event for Clicking COMMENT Button

const submitButton = document.querySelector("#myButton");
const sectionMain = document.querySelector(".section__form");

submitButton.addEventListener('click', (event) => {
    event.preventDefault()

	// grab text inside input element via query selector
    const nameValue = document.querySelector("#name").value;
    const commentValue = document.querySelector("#comment").value;

    // validation: ensure comment is lengthy enough
    if (nameValue.length < 1 || commentValue.length < 1) {
        // add visual feedback
        const nameTag = document.querySelector("#name");
        nameTag.classList.add('error');
		nameTag.removeAttribute("placeholder");
		const commentTag = document.querySelector("#comment");
        commentTag.classList.add('error');
		commentTag.removeAttribute("placeholder");

        // add message telling user there's an error
        // sectionMain.appendChild(errorStyle);
        return;
    }

	let clearAll = document.querySelector(".section__comment");
	clearAll.innerHTML = "";

	// Make new Object format
	// const commentObject = documrnt.querySelector(".section__form-mainDiv");
	// commentObject.innerHTML =
	


	// Function for live date
	// 	GetTime();

	// function GetTime(){
	//   var CurrentTime = new Date()
	//   var hour = CurrentTime.getHours()
	//   var minute = CurrentTime.getMinutes()
	//   var second = CurrentTime.getSeconds()

	//   if(minute < 10){
	//     minute = "0" + minute
	//   }

	//   if(second < 10){
	//     second = "0" + second
	//   }

	//   var GetCurrentTime = hour + ":" + minute + ":" + second + " ";

	//   if(hour > 11){
	//     GetCurrentTime += "p.m."
	//   }else{
	//     GetCurrentTime += "a.m."
	//   }

	//   document.getElementById("CurrentTime").innerHTML = GetCurrentTime;
	//   setTimeout(GetTime,1000)
	// }

	// Funtion for timestamp
	function getTimeStamp() {
		var now = new Date();
		return ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear());
 	}

	//  function getTimeStamp() {
	// 	var now = new Date();
	// 	return ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear() + " " + now.getHours() + ':'
	// 				  + ((now.getMinutes() < 10) ? ("0" + now.getMinutes()) : (now.getMinutes())) + ':' + ((now.getSeconds() < 10) ? ("0" + now
	// 				  .getSeconds()) : (now.getSeconds())));
 	// }

	// function setTime() {
	// 	document.getElementById('field').value = getTimeStamp();
	// }



	let newObject = { name: "", timeStamp: "", commentText: "" }
	newObject.name = nameValue;
	newObject.timeStamp = getTimeStamp();
	newObject.commentText = commentValue; 

	commentArray.unshift(newObject);
	displayComment()


    // make a new element, and set input to to innerText -> this becomes our comment
    // const nameElement = document.createElement('p');
    // nameElement.innerText = nameValue;
   
	
	
	// grab comment section
    // const commentSection = document.querySelector(".section__comment");
    
	// commentSection.prepend(nameElement)

    // upon successful submission, remove error message
    nameTag.setAttribute("placeHolder", "Enter your name");
	nameTag.removeAttribute("class");
	
    commentTag.setAttribute("placeholder", "Add a new comment");
	commentTag.removeAttribute("class");
})







window.onload = () => {
	const commentForm = document.getElementById("form");

	commentForm.addEventListener("submit", (event) => {
		event.preventDefault();		//prevent refreshing page
		
		const formTarget = event.target;

		const userName = formTarget.name.value;
		const userComment = formTarget.comment.value;

		console.log(userName, userComment);
	})
}


// document.getElementById("myButton").addEventListener("click", myFunction);

// function myFunction() {
//   let addP = document.createElement()
  
//   document.getElementById("demo").innerHTML = "YOU CLICKED ME!";

//   var input = document.getElementById("stuffed");
//   var x = input.value;
//   document.getElementById("paragraph").innerHTML += "<br>&lt;me&gt; " + x;

//   input.value = '';
//   input.focus();

// }



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