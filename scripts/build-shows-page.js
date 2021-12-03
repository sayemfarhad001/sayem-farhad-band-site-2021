// var main = document.querySelector("main");

// main.setAttribute("class", "build__list");


// // let main = document.querySelector('main');
// let ul = document.createElement('ul');

// document.querySelector('#shows__container').appendChild(document.querySelector('#shows__container').createElement('ul').setAttribute("id","show__list"));


// let shows__container = document.querySelector('#shows__container');
// document.querySelector('#shows__container').appendChild(ul);

// document.querySelector("#shows__container").appendChild(document.createElement('ul'));

// get the ul#showsList
let shows__list = document.querySelector(".shows__list");

// Create Array of Concerts
const concert0 = ['Date            ', 'Venue        ', 'Location         ', '           ']
const concert1 = ['Mon Sept 06 2021', 'Ronald Lane  ', 'San Francisco, CA', 'BUY TICKETS']
const concert2 = ['Tue Sept 21 2021', 'Pier 3 East  ', 'San Francisco, CA', 'BUY TICKETS']
const concert3 = ['Fri Oct 15 2021 ', 'View Lounge  ', 'San Francisco, CA', 'BUY TICKETS']
const concert4 = ['Sat Nov 06 2021 ', 'Hyatt Agency ', 'San Francisco, CA', 'BUY TICKETS']
const concert5 = ['Fri Nov 26 2021 ', 'Moscow Center', 'San Francisco, CA', 'BUY TICKETS']
const concert6 = ['Wed Dec 15 2021 ', 'Press Club   ', 'San Francisco, CA', 'BUY TICKETS']

// shows__list.


// Create function to add list of show

// 1st Copy
// function createShowsItem(show) {
//     let li = document.createElement('li');
//     li.textContent = show[0] + ' ' + show[1] + ' ' + show[2] + ' ' + show[3];
//     return li;
// }

// 2nd Copy
// function createShowsItem(show) {
//     let li = document.createElement("li");
//     let p = document.createElement("p");
//     li.appendChild(p).textContent = show[0]    
//     // textContent = show[0] + ' ' + show[1] + ' ' + show[2] + ' ' + show[3];
//     return li;
// }
 
// 3rd Copy
function createShowsDate(showDate) {
    let li = document.createElement("li");
    let p = document.createElement("p");
    
    for (i=0; i<4; i++) {
        li.setAttribute("class","show"); 
        li.appendChild(p).textContent = showDate[0];
        li.appendChild(p).setAttribute("class","date");   
        // return li;
        // if (document.querySelector(".date").textContent !== '') {
        //    document.querySelector(".date").textContent = show[0];
        //    return document.querySelector(".date");
        // }  
        return li;
    }
    // textContent = show[0] + ' ' + show[1] + ' ' + show[2] + ' ' + show[3];
    return li;
}

function createShowsVenue(showVenue) {
    let li = document.querySelector(".show");
    let p = document.createElement("p");
    
    for (i=0; i<4; i++) {
        li.appendChild(p).textContent = showVenue[1];
        li.appendChild(p).setAttribute("class","venue");   
        return li;
    }
    return li;
}

function createShowsLocation(showLocation) {
    let li = document.querySelector(".show");
    let p = document.createElement("p");
    
    for (i=0; i<4; i++) {
        li.appendChild(p).textContent = showLocation[2];
        li.appendChild(p).setAttribute("class","location");   
        return li;
    }
    return li;
}

function createShowsTicket(showTicket) {
    let li = document.querySelector(".show");
    let button = document.createElement("button");
    for (i=0; i<4; i++) {
        li.appendChild(button).textContent = showTicket[3];
        li.appendChild(button).setAttribute("class","ticket");
        // li.appendChild(button).setAttribute("id","myButton");
        li.appendChild(button).setAttribute("type","button");
        li.appendChild(button).setAttribute("href","./shows.html");
        return li;
    }
    return li;
}


// function createShowsTitle(showTitle) {
//     let li = document.querySelector(".show");
//     let p = document.createElement("p");
    
//     for (i=0; i<4; i++) {
//         li[0].prependChild(p).textContent = showTitle[0];
//         li[0].prependChild(p).setAttribute("class","ticket");   
//         return li;
//     }
//     return li;
// }


// shows__list.appendChild(createShowsTitle(concert0));

shows__list.appendChild(createShowsDate(concert1));
shows__list.appendChild(createShowsDate(concert2));
shows__list.appendChild(createShowsDate(concert3));
shows__list.appendChild(createShowsDate(concert4));
shows__list.appendChild(createShowsDate(concert5));
shows__list.appendChild(createShowsDate(concert6));


shows__list.appendChild(createShowsVenue(concert1));
shows__list.appendChild(createShowsVenue(concert2));
shows__list.appendChild(createShowsVenue(concert3));
shows__list.appendChild(createShowsVenue(concert4));
shows__list.appendChild(createShowsVenue(concert5));
shows__list.appendChild(createShowsVenue(concert6));

shows__list.appendChild(createShowsLocation(concert1));
shows__list.appendChild(createShowsLocation(concert2));
shows__list.appendChild(createShowsLocation(concert3));
shows__list.appendChild(createShowsLocation(concert4));
shows__list.appendChild(createShowsLocation(concert5));
shows__list.appendChild(createShowsLocation(concert6));

shows__list.appendChild(createShowsTicket(concert1));
shows__list.appendChild(createShowsTicket(concert2));
shows__list.appendChild(createShowsTicket(concert3));
shows__list.appendChild(createShowsTicket(concert4));
shows__list.appendChild(createShowsTicket(concert5));
shows__list.appendChild(createShowsTicket(concert6));
// let date = document.querySelector(".date");
//     if (date.innerHTML === '') {
//        date[0].innerHTML = concert1[0];
//        date[1].innerHTML = concert2[0];
//        date[2].innerHTML = concert3[0];
//        date[3].innerHTML = concert4[0];
//        date[4].innerHTML = concert5[0];
//     }


// add the shows content
// shows__list.appendChild(createShowsItem(concert1));
// shows__list.appendChild(createShowsItem(concert2));
// shows__list.appendChild(createShowsItem(concert3));
// shows__list.appendChild(createShowsItem(concert4));
// shows__list.appendChild(createShowsItem(concert5));
// shows__list.appendChild(createShowsItem(concert6));








// main.setAttribute('class','list')
// main.appendChild(ul);

// let li = document.createElement("li");
// document.getElementById('ul').appendChild(li);



// function myFunction() {
//     var node = document.createElement("LI");
//     var textnode = document.createTextNode("Water");
//     node.appendChild(textnode);
//     document.getElementById("myList").appendChild(node);
// }



// function myFunction() {
//     document.getElementById("myDIV").style.display = "none";
// }