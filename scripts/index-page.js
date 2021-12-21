// ASSIGN API KEY
let myKey = 'b74217e9-d527-4bc2-90ae-26d03176c467';

// PROMISE FROM API [GET AXIOS]
let getCommentsURL = axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${myKey}`)
.then(result => {
	return sortComments(result.data)
})
.catch((error) => {
console.log(error);
});

// 	Step 2 - DISPLAY DATA FROM API ON BROWSER
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
		// E1 - Create p element, add commentText from above Array and add class
		const commentTextTag = document.createElement('p');
		commentTextTag.innerText = commentArray[i].comment;
		commentTextTag.classList.add("section__form-commentText");
		// E2 - Add Like and Delete Buttons		
		const likeButton = document.createElement('p');
		likeButton.classList.add("like__button", "fa", "fa-thumbs-up");
		likeButton.setAttribute("id", commentArray[i].id);
		const likeCount = document.createElement('p');
		likeCount.innerText = commentArray[i].likes;
		likeCount.classList.add("like__count");
		const likeDiv = document.createElement('div');
		likeDiv.classList.add("section__form-likeDiv");
		likeDiv.appendChild(likeButton);
		likeDiv.appendChild(likeCount);
		const deleteButton = document.createElement('p');
		deleteButton.classList.add("delete__button", "fa", "fa-trash");
		deleteButton.setAttribute("id", commentArray[i].id);
		const innerDivBottom = document.createElement('div');
		innerDivBottom.classList.add("section__form-innerDiv--bottom");
		innerDivBottom.appendChild(likeDiv);
		innerDivBottom.appendChild(deleteButton);
		// F - Create OUTER div element, add class
		const outerDiv = document.createElement('div');
		outerDiv.classList.add("section__form-outerDiv");
		// G - Append [D and E] to created OUTER div element(F)
		outerDiv.appendChild(innerDiv);
		outerDiv.appendChild(commentTextTag);
		outerDiv.appendChild(innerDivBottom);
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
displayComment()

// 	Step 4 - EVENT LISTENER ON FORM SUBMISSION
// 	A - Select BUTTON element AND FORM element
const submitButton = document.querySelector("#myButton");
const sectionMain = document.querySelector(".section__form");
//	B - Add Event Listener
submitButton.addEventListener('click', async (event) => {
	await getCommentsURL;
    // 	I. 	Prevent refreshing the page
	event.preventDefault()
	// 	II. Collect value from input element
    const nameValue = document.querySelector("#name").value;
    const commentValue = document.querySelector("#comment").value;
    // 	III. Validate: ensure length is present
    if (nameValue.length < 1 || commentValue.length < 1) {
        //Add Visual error border and alert message
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
    // 	V. On Successful Submission, Remove Error Visual and Clear Input Fields
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
	// 	VI.	Post request to the API 
	axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${myKey}`, {name: nameValue, comment: commentValue})
	.then(function (response) {
		location.reload()
		displayComment()
	})
	.catch(function (error) { 
		console.log(error);
	});
})

// LIKE FUNCTION [PUT AXIOS]
async function addLikeEvent() {
	let commentArray = await getCommentsURL;
	const clickLike = document.querySelectorAll(".like__button")
	if (commentArray){
		for (var i = 0; i < clickLike.length; i++) {
			let id = clickLike[i].getAttribute("id");
			clickLike[i].addEventListener('click', (event) => {				
				event.preventDefault();
				axios.put(`https://project-1-api.herokuapp.com/comments/${id}/like?api_key=${myKey}`)
				.then((response) => {					
					location.reload()
				}) 
				.catch((error) => { 
					console.log(error)
				})
			}); 
		}
	}
}
addLikeEvent()

// DELETE FUNCTION [DELETE AXIOS]
async function addDeleteEvent() {
	let commentArray = await getCommentsURL;
	const clickDelete = document.querySelectorAll(".delete__button")
	if (commentArray){
		for (var i = 0; i < clickDelete.length; i++) {
			let id = clickDelete[i].getAttribute("id");
			clickDelete[i].addEventListener('click', (event) => {
				if (window.confirm("Are you sure you want to delete this post?")) {
					event.preventDefault();
					axios.delete(`https://project-1-api.herokuapp.com/comments/${id}?api_key=${myKey}`)
					.then((response) => {
						location.reload()
					}) 
					.catch((error) => { 
						console.log(error)
					})
				}
			}); 
		}
	}
}
addDeleteEvent()

//SORT FUNCTION
function sortComments(posts){
    return posts.sort( (a,b) => {
        return a.timestamp - b.timestamp;
    })
}