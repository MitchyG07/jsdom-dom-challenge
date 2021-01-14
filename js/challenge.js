//to dom 
// grab the clock variable 
let counter = document.querySelector('#counter')
let countInt = 0  
let clock = setInterval(incrementSecond, 1000)

let likes = document.querySelector('#likes')



function countSeconds() { 
   clock
}

//increment counter grabs the countInt and increments the second 
function incrementSecond() {
    countInt += 1
    counter.textContent = countInt
}

//decrement counter, grabs countInt and subtracts 
function decrementSecond() {
    countInt -= 1
    counter.textContent = countInt
}

function pauseCount() {
    clearInterval(clock);
    document.querySelector('#pause').textContent = 'resume'
    document.querySelector('#pause').addEventListener('click', resumeCount)
}

function resumeCount() {
    clock = setInterval(incrementSecond, 1000)
    document.querySelector('#pause').textContent = 'pause'
}

//incrementing listener 
document.querySelector('#plus').addEventListener('click', incrementSecond)
//decrementing listener 
document.querySelector('#minus').addEventListener('click', decrementSecond)
//grabs the pause button
document.querySelector('#pause').addEventListener('click', pauseCount)




// As a user, I should see the timer increment every second once the page has loaded.
// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
