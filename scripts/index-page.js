// All CODES added to Line 127 on index.html

// Attempt 1 await/ async
// let myKey = "";
// copyKey().catch((error) => {
// 	console.log(error);
// });		// promise call - ends here

// async function copyKey() {
// 	const getKeyURL = await axios.get('https://project-1-api.herokuapp.com/register');
// 	const getKey = getKeyURL.data.api_key 
// 	//JSON.stringify(getKeyURL.data.api_key)
// 	myKey = myKey + getKey;
// }

// console.log(myKey);


// async function getComments() {
// 	await copyKey();
// 	let link = 'https://project-1-api.herokuapp.com/comments?api_key=' + myKey;
// 	const getCommentsURL = axios.get(link);
// 	const getComu = getCommentsURL.data;
	
// 	console.log(getComu)

// }

// getComments()

// Attempt 2 - works on console but doesnt output data
// let commentArray = []
// let myKey = "";
// async function copyKey() {
// 	const getKeyURL = await axios.get('https://project-1-api.herokuapp.com/register');
// 	const getKey = await getKeyURL.data.api_key;
// 	myKey = myKey + getKey;
// }
// copyKey().catch((error) => {
// 	console.log(error);
// });		// promise call - ends here
// console.log(myKey);

// async function getComments() {
// 	await copyKey();
// 	let link = 'https://project-1-api.herokuapp.com/comments?api_key=' + myKey;
// 	const getCommentsURL = await axios.get(link);
// 	// const getComu = getCommentsURL.data;
// 	console.log(getCommentsURL);
// 	commentArray = getCommentsURL.data;

// }
// getComments().catch((error) => {
// 	console.log(error);
// });
// console.log(commentArray);



// let commentArray = [];

// let getKeyURL = axios.get('https://project-1-api.herokuapp.com/register')
// .then(result => {
	
// 	console.log(result.data.api_key);
// 	// call whatEver() function created with target Array[result.data.data] as argument	
// 	return result.data.api_key;
	
// 	// myKey = myKey + getKey;
// 	// console.log(myKey);

// 	// Add Text info after converting JSON to 'String'
// 	// let selectAd = document.querySelector(".res__ad");
// 	// let stringedText = JSON.stringify(result.data.support.text);
// 	// selectAd.innerHTML = stringedText;
// }) 
// .catch((error) => {
// console.log(error);
// });		// promise call - ends here

let myKey = 'b74217e9-d527-4bc2-90ae-26d03176c467';

let getCommentsURL = axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${myKey}`)
.then(result => {
	// return JSON.stringify(result.data);
	return result.data
	// console.log(JSON.stringify({ x: 5, y: 6 }));
	// expected output: "{"x":5,"y":6}"
}) 
.catch((error) => {
console.log(error);
});		// promise call - ends here



// let postCommentsURL = axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${myKey}`)

// 	Step 1 - create an editable Array with 3 default objects
// let commentArray = [{
// 	id: "0",
// 	likes: 0,
// 	name: "Connor Walton",
// 	timestamp: "02/17/2021",
// 	comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
// },
// {
// 	id: "1",
// 	likes: 0,
// 	name: "Emilie Beach",
// 	timestamp: "01/09/2021",
// 	comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
// },
// {
// 	id: "2",
// 	likes: 0,
// 	name: "Miles Acosta",
// 	timestamp: "12/20/2020",
// 	comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
// }];

// 	Step 2 - Create function to display Data from the Array above
let displayComment = async () => {
	let commentArray = await getCommentsURL;
	for (i=0; i<commentArray.length; i++) {
		
		// A - Create p element, add name from above Array and add class		
		const nameTag = document.createElement('p');
		nameTag.innerText = commentArray[i].name;
		nameTag.classList.add("section__form-name");
		// B - Create p element, add timeStamp from above Array and add class
		const timeStampTag = document.createElement('p');
		let newTime = new Date(commentArray[i].timestamp);
		newTime = (newTime.getDate()) + '/' + (newTime.getMonth() + 1) + '/' + newTime.getFullYear();
		timeStampTag.innerText = newTime;
		timeStampTag.classList.add("section__form-timeStamp");
		// C - Create INNER div element, add class	
		const innerDiv = document.createElement('div');
		innerDiv.classList.add("section__form-innerDiv");
		// D - Append [A and B] to created INNER div element(C)
		innerDiv.appendChild(nameTag);
		innerDiv.appendChild(timeStampTag);
		// E - Create p element, add commentText from above Array and add class
		const commentTextTag = document.createElement('p');
		commentTextTag.innerText = commentArray[i].comment;
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
		commentSection.prepend(mainDiv);
	}
}

// 	Step 3 - Call the created funtion - before any event
displayComment()

// 	Step 4 - Create an event for Clicking COMMENT Button
// 	A - Select BUTTON element AND FORM element
const submitButton = document.querySelector("#myButton");
const sectionMain = document.querySelector(".section__form");
//	B
submitButton.addEventListener('click', async (event) => {
	let commentArray = await getCommentsURL;

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
		alert("400 Bad Request : Complete all required fields to proceed")
        return;
    }
	// 	IV. Clear input fields
	let clearAll = document.querySelector(".section__comment");
	clearAll.innerHTML = "";
	// 	V. Add Funtion for timestamp
	// function getTimeStamp() {
	// 	var now = new Date();
	// 	return ( (now.getDate()) + '/' + (now.getMonth() + 1) + '/' + now.getFullYear());
 	// }
	//  VI. Create a new OBJECT to collect INPUT VALUE from FORM INPUT fields and a Time Funtion

	//  VII. Add the created OBJECT[VI] to initial ARRAY[STEP 1]

	// 	VIII. Call the created funtion[line 60] again - DUE TO CLICK EVENT

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


	axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${myKey}`, {name: nameValue, comment: commentValue})
	.then(function (response) {
		let newObject = { id: response.data.id, name: response.data.name, timestamp: response.data.timestamp, comment: response.data.comment }
		// newObject.id = new Date().getTime();	
		// newObject.name = nameValue;
		// newObject.timestamp = new Date().getTime();
		// newObject.comment = commentValue;
		commentArray.push(newObject);
		displayComment()
	})
	.catch(function (error) { 
		console.log(error);
	});


})

// https://postman-echo.com/post





// let postCommentsURL = axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${myKey}`)
// .then(result => {
// 	// return JSON.stringify(result.data);
// 	return result.data
// 	// console.log(JSON.stringify({ x: 5, y: 6 }));
// 	// expected output: "{"x":5,"y":6}"
// }) 
// .catch((error) => {
// console.log(error);
// });		// promise call - ends here
