// ASSIGN API KEY
let myKey = 'b74217e9-d527-4bc2-90ae-26d03176c467';

// PROMISE FROM API [GET AXIOS]
let getShowDatesURL = axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${myKey}`)
.then(result => {
	return result.data
}) 
.catch((error) => {
console.log(error);
});	

// STEP 2 - SETUP THE DOM STRUCTURE
// 2A - Create 4 p elements
let desktopDateTitle = document.createElement('p');
desktopDateTitle.classList.add("show__title__date")
desktopDateTitle.classList.add("show__title")
desktopDateTitle.innerHTML = "DATE";
let desktopVenueTitle = document.createElement('p');
desktopVenueTitle.classList.add("show__title__venue")
desktopVenueTitle.classList.add("show__title")
desktopVenueTitle.innerHTML = "VENUE";
let desktopLocationTitle = document.createElement('p');
desktopLocationTitle.classList.add("show__title__location")
desktopLocationTitle.classList.add("show__title")
desktopLocationTitle.innerHTML = "LOCATION";
let desktopTicketTitle = document.createElement('p');
desktopTicketTitle.classList.add("show__title__ticket")
desktopTicketTitle.classList.add("show__title")
desktopTicketTitle.innerHTML = "";
// 2B - Create Div to contain the 4 elements
let titleDiv = document.createElement("div")
titleDiv.classList.add("title__div")
// 2C - Append the elements to the div
titleDiv.appendChild(desktopDateTitle)
titleDiv.appendChild(desktopVenueTitle)
titleDiv.appendChild(desktopLocationTitle)
titleDiv.appendChild(desktopTicketTitle)
// 2D - Now create a ul to contain the div(2B)
let ul = document.createElement("ul");
ul.classList.add("shows__list");
// 2F - seclect the parent HTML element - div.shows__container and append the 'titleDiv'(2B) and the 'ul'(2D)
let div = document.querySelector(".shows__container");
div.appendChild(titleDiv)
div.appendChild(ul);

// 	Step 2 - DISPLAY DATA FROM API ON BROWSER
let displayShow = async () => {
	let showArray = await getShowDatesURL;
	for (i=0; i<showArray.length; i++) {
		// (I) Add Date & Title
        // A - Create p element, add date title and add class		
		const titleDate = document.createElement('p');
		titleDate.innerText = "DATE";
		titleDate.classList.add("show__title__date");
        titleDate.classList.add('hide__later');
		// B - Create p element, add date from above Array and add class
		const showDate = document.createElement('p');
		let newTime = formatDate(Number(showArray[i].date))
		showDate.innerText = newTime;
		showDate.classList.add("show__date");
		// C - Create Div element, add class	
		const dateDiv = document.createElement('div');
		dateDiv.classList.add("date__div");
		// D - Append [A and B] to created Div element(C)
		dateDiv.appendChild(titleDate);
		dateDiv.appendChild(showDate);
		// E - Create List element, add class
		const mainList = document.createElement('li');
		mainList.classList.add("show");
		mainList.setAttribute("id", showArray[i].id);
		// F - Append Div element(C) to created List element(E)			
		mainList.appendChild(dateDiv);
		
        // (II)	Add Venue & Title
        // A - Create p element, add venue title and add class		
		const titleVenue = document.createElement('p');
		titleVenue.innerText = "VENUE";
		titleVenue.classList.add("show__title__venue");
        titleVenue.classList.add('hide__later');
		// B - Create p element, add venue from above Array and add class
		const showVenue = document.createElement('p');
		showVenue.innerText = showArray[i].place;
		showVenue.classList.add("show__venue");
		// C - Create Div element, add class	
		const venueDiv = document.createElement('div');
		venueDiv.classList.add("venue__div");
		// D - Append [A and B] to created Div element(C)
		venueDiv.appendChild(titleVenue);
		venueDiv.appendChild(showVenue);
        // F - Append Div element(C) to created List element(I.E)			
		mainList.appendChild(venueDiv);

        // (III) Add Location & Title
        // A - Create p element, add location title and add class		
		const titleLocation = document.createElement('p');
		titleLocation.innerText = "LOCATION";
		titleLocation.classList.add("show__title__location");
        titleLocation.classList.add('hide__later');
		// B - Create p element, add date from above Array and add class
		const showLocation = document.createElement('p');
		showLocation.innerText = showArray[i].location;
		showLocation.classList.add("show__location");
		// C - Create Div element, add class	
		const locationDiv = document.createElement('div');
		locationDiv.classList.add("location__div");
		// D - Append [A and B] to created Div element(C)
		locationDiv.appendChild(titleLocation);
		locationDiv.appendChild(showLocation);
		// E - Append Div element(C) to created List element(I.E)			
		mainList.appendChild(locationDiv);

        // (IV) Add Ticket
        // A - Create p element, add ticket and add class		
		const titleTicket = document.createElement('button');
		titleTicket.innerText = "BUY TICKETS";
		titleTicket.classList.add("show__title__ticket");
        // B - Create Div element, add class	
		const ticketDiv = document.createElement('div');
		ticketDiv.classList.add("ticket__div");
		// C - Append (A) to created Div element(B)
		ticketDiv.appendChild(titleTicket);
		// F - Append Div element(B) to created List element(I.E)			
		mainList.appendChild(ticketDiv);

        // (V) Final Selection of Parent element and appending
		// G - Select the globally created Unordered List(ul.shows__list)
        const showsList = document.querySelector(".shows__list");
		// K - Select parent element [ul.shows__list] AND Append the created List element(I.E) to it
		showsList.appendChild(mainList);
	}
}
displayShow()

// FORMAT SHOW DATE
function formatDate(dateString){
    let dateIn = new Date(Number(dateString));
    let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let year = dateIn.getUTCFullYear();
    let month = months[dateIn.getUTCMonth()];
    let day = days[dateIn.getUTCDay()];
    let date = `0${dateIn.getUTCDate()}`.slice(-2);
    return `${day} ${month} ${date} ${year}`;
}