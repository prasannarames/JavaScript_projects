const homeScore = document.getElementById('home-score');
const guestScore = document.getElementById('guest-score');

let countHome = 0;

// HOME functions
function incrementOneHome(){
    countHome += 1;
    homeScore.textContent = countHome;
}
function incrementTwoHome(){
    countHome += 2;
    homeScore.textContent = countHome;
}
function incrementThreeHome(){
    countHome += 3;
    homeScore.textContent = countHome;
}

let countGuest = 0;
//GUEST functions

function incrementOneGuest(){
    countGuest += 1;
    guestScore.textContent = countGuest;
}
function incrementTwoGuest(){
    countGuest += 2;
    guestScore.textContent = countGuest;
}
function incrementThreeGuest(){
    countGuest += 3;
    guestScore.textContent = countGuest;
}





