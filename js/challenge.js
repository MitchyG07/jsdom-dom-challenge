//to dom 
// grab the clock variable 
let counter = document.querySelector('#counter')
let countInt = 0  
let clock = setInterval(incrementSecond, 1000)
let life = true


//comment to the DOM 
function postComment(comment) {
    let div = document.querySelector("#list")
    let p = document.createElement('p')
    p.textContent = comment.content
    div.appendChild(p)
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
    if (life) {
        clearInterval(clock);
        document.querySelector('#pause').textContent = 'resume'
        life = false
    } 
    else {
       clock = setInterval(incrementSecond, 1000)
       document.querySelector('#pause').textContent = 'pause'
       life = true
    }
}

//handler for making a comment 
function makeComment(e) {
    e.preventDefault()
    let newComment = {
        "content": e.target.comment.value
    }
    postComment(newComment)
}

let like = {}

function addLike() {
    let ul = document.querySelector('.likes')
    // let countInteger = countInt
    if (like[countInt]) {
        like[countInt] ++
        let li = document.getElementById(`${countInt}`)
        li.textContent = `${countInt} has ${like[countInt]} like(s)!`
    }
    else {
        like[countInt] = 1 
        let li = document.createElement('li')
        li.textContent = `${countInt} has ${like[countInt]} like(s)!`
        li.id = `${countInt}`
        ul.appendChild(li)
    }  
}

//incrementing listener 
document.querySelector('#plus').addEventListener('click', incrementSecond)
//decrementing listener 
document.querySelector('#minus').addEventListener('click', decrementSecond)
//grabs the pause button
document.querySelector('#pause').addEventListener('click', pauseCount)
//grabs the comment
document.querySelector('#comment-form').addEventListener('submit', makeComment)
document.querySelector('#heart').addEventListener('click',addLike)




// As a user, I should see the timer increment every second once the page has loaded.
// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
