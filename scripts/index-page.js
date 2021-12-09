// 	Step 1 - create an editable Array with 3 default objects
let commentArray = [{
	id: "0",
	name: "Connor Walton",
	timeStamp: "02/17/2021",
	commentText: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
},
{
	id: "1",
	name: "Emilie Beach",
	timeStamp: "01/09/2021",
	commentText: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
},
{
	id: "2",
	name: "Miles Acosta",
	timeStamp: "12/20/2020",
	commentText: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
}];

// 	Step 2 - Create function to display Data from the Array above
let displayComment = function(){
	for (i=0; i<commentArray.length; i++) {
		// A - Create p element, add name from above Array and add class		
		const nameTag = document.createElement('p');
		nameTag.innerText = commentArray[i].name;
		nameTag.classList.add("section__form-name");
		// B - Create p element, add timeStamp from above Array and add class
		const timeStampTag = document.createElement('p');
		timeStampTag.innerText = commentArray[i].timeStamp;
		timeStampTag.classList.add("section__form-timeStamp");
		// C - Create INNER div element, add class	
		const innerDiv = document.createElement('div');
		innerDiv.classList.add("section__form-innerDiv");
		// D - Append [A and B] to created INNER div element(C)
		innerDiv.appendChild(nameTag);
		innerDiv.appendChild(timeStampTag);
		// E - Create p element, add commentText from above Array and add class
		const commentTextTag = document.createElement('p');
		commentTextTag.innerText = commentArray[i].commentText;
		commentTextTag.classList.add("section__form-commentText");
		// F - Create OUTER div element, add class
		const outerDiv = document.createElement('div');
		outerDiv.classList.add("section__form-outerDiv");
		// G - Append [D and E] to created OUTER div element(F)
		outerDiv.appendChild(innerDiv);
		outerDiv.appendChild(commentTextTag);
		// H - Create p element[for logo], add class and NOTHING ELSE FOR NOW
		const logoTag = document.createElement('p');
		logoTag.classList.add("section__form-logo");
		// I - Create MAIN div element, add class and id
		const mainDiv = document.createElement('div');
		mainDiv.classList.add("section__form-mainDiv");
		mainDiv.setAttribute("id", commentArray[i].id);
		// J - Append [G and H] to created MAIN div element(I)			
		mainDiv.appendChild(logoTag);
		mainDiv.appendChild(outerDiv);
		// K - Select parent element [div.shows__list] AND Append J to it
		const commentSection = document.querySelector(".section__comment");
		commentSection.appendChild(mainDiv);
	}
}

// 	Step 3 - Call the created funtion - before any event
displayComment()

// 	Step 4 - Create an event for Clicking COMMENT Button
// 	A - Select BUTTON element AND FORM element
const submitButton = document.querySelector("#myButton");
const sectionMain = document.querySelector(".section__form");
//	B
submitButton.addEventListener('click', (event) => {
    // 	I. 	Prevent refreshing the page
	event.preventDefault()
	// 	II. Collect value from input element
    const nameValue = document.querySelector("#name").value;
    const commentValue = document.querySelector("#comment").value;
    // 	III. Validate: ensure length is present
    if (nameValue.length < 1 || commentValue.length < 1) {
        //DOM Manipulation to add Visual error border
        const nameTag = document.querySelector("#name");
        nameTag.classList.add('error');
		nameTag.removeAttribute("placeholder");
		const commentTag = document.querySelector("#comment");
        commentTag.classList.add('error');
		commentTag.removeAttribute("placeholder");
        return;
    }
	// 	IV. Clear input fields
	let clearAll = document.querySelector(".section__comment");
	clearAll.innerHTML = "";
	// 	V. Add Funtion for timestamp
	function getTimeStamp() {
		var now = new Date();
		return ((now.getMonth() + 1) + '/' + (now.getDate()) + '/' + now.getFullYear());
 	}
	//  VI. Create a new OBJECT to collect INPUT VALUE from FORM INPUT fields and a Time Funtion
	let newObject = { id: "", name: "", timeStamp: "", commentText: "" }
	newObject.id = 1000 + commentArray.length;	
	newObject.name = nameValue;
	newObject.timeStamp = getTimeStamp();
	newObject.commentText = commentValue; 
	//  VII. Add the created OBJECT[VI] to initial ARRAY[STEP 1]
	commentArray.unshift(newObject);
	// 	VIII. Call the created funtion[line 60] again - DUE TO CLICK EVENT
	displayComment()
    // 	IX. On Successful Submission, Remove Error Visual and Clear Input Fields
	const nameTag = document.querySelector("#name");
	const commentTag = document.querySelector("#comment");
    // 	a. Remove Error Visual via removal and addition of classes
	nameTag.setAttribute("placeHolder", "Enter your name");
	nameTag.removeAttribute("class");
	commentTag.setAttribute("placeholder", "Add a new comment");
	commentTag.removeAttribute("class");
	// 	b. Clear Input Fields
	nameTag.value = "";
	commentTag.value = "";
})