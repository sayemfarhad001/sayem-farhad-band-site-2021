// Create "Arrays of Show Data"
const dateArray = ['Mon Sept 06 2021', 'Tue Sept 21 2021', 'Fri Oct 15 2021', 'Sat Nov 06 2021', 'Fri Nov 26 2021', 'Wed Dec 15 2021'];
const venueArray = ['Ronald Lane', 'Pier 3 East', 'View Lounge', 'Hyatt Agency', 'Moscow Center', 'Press Club'];
const locationArray = ['San Francisco, CA', 'San Francisco, CA', 'San Francisco, CA', 'San Francisco, CA', 'San Francisco, CA', 'San Francisco, CA'];
const ticketArray = ['BUY TICKETS', 'BUY TICKETS', 'BUY TICKETS', 'BUY TICKETS', 'BUY TICKETS', 'BUY TICKETS'];

// Create an Unordered list within a div with class(shows__container)
let div = document.querySelector(".shows__container");
let ul = document.createElement("ul");
ul.classList.add("shows__list");
div.appendChild(ul);

// Higher order function for adding data from "Arrays of Show Data" above to HTML
// Total Funtions created - 4
// Funtion 1/4 - creates "dates" and adds classes
dateArray.forEach((element) => {
    let defaultTitle = document.createElement('p');
    defaultTitle.classList.add('hide__later');
    defaultTitle.classList.add('show__title__date');
	defaultTitle.innerText = "DATE";
	let p = document.createElement('p');
	p.innerText = element;
    p.classList.add('show__date');
    let inShow = document.createElement('div');
	inShow.classList.add('date__div');
    inShow.appendChild(defaultTitle);
    inShow.appendChild(p);

    let show = document.createElement('li');
	show.classList.add('show');
    show.appendChild(inShow);  

    let showsList = document.querySelector('.shows__list');
    showsList.appendChild(show);
})

// Funtion 2/4 - creates "venues" and adds classes
venueArray.forEach((element) => {
	let showsList = document.querySelector('.shows__list');

    let defaultTitle = document.createElement('p');
    defaultTitle.classList.add('hide__later');
    defaultTitle.classList.add('show__title__venue');
	defaultTitle.innerText = "VENUE";

	let p = document.createElement('p');
	p.innerText = element;
    p.classList.add('show__venue');

    let inShow = document.createElement('div');
	inShow.classList.add('venue__div');

    inShow.appendChild(defaultTitle);
    inShow.appendChild(p);

    let show = document.querySelector('.show');
  
    show.appendChild(inShow);
  
    showsList.appendChild(show);
})

// Funtion 3/4 - creates "locations" and adds classes
locationArray.forEach((element) => {
	let showsList = document.querySelector('.shows__list');

    let defaultTitle = document.createElement('p');
    defaultTitle.classList.add('hide__later');
    defaultTitle.classList.add('show__title__location');
	defaultTitle.innerText = "LOCATION";

	let p = document.createElement('p');
	p.innerText = element;
    p.classList.add('show__location');

    let inShow = document.createElement('div');
	inShow.classList.add('location__div');

    inShow.appendChild(defaultTitle);
    inShow.appendChild(p);

    let show = document.querySelector('.show');
  
    show.appendChild(inShow);
  
    showsList.appendChild(show);
})

// Funtion 4/4 - creates "tickets" and adds classes
ticketArray.forEach((element) => {
	let showsList = document.querySelector('.shows__list');

    let defaultTitle = document.createElement('p');
    defaultTitle.classList.add('hide__later');
    defaultTitle.classList.add('show__title__ticket');
	defaultTitle.innerText = "";

	let p = document.createElement('button');
	p.innerText = element;
    p.classList.add('show__ticket');

    let inShow = document.createElement('div');
	inShow.classList.add('ticket__div');

    inShow.appendChild(defaultTitle);
    inShow.appendChild(p);

    let show = document.querySelector('.show');
  
    show.appendChild(inShow);
  
    showsList.appendChild(show);
});


// Final touch - adding special classes - for styling
let selectFirstDate = document.querySelector('.show__title__date');
selectFirstDate.classList.add('keep');
let selectFirstVenue = document.querySelector('.show__title__venue');
selectFirstVenue.classList.add('keep');
let selectFirstLocation = document.querySelector('.show__title__location');
selectFirstLocation.classList.add('keep');
let selectFirstTicket = document.querySelector('.ticket__div');
selectFirstTicket.classList.add('keep__down');

