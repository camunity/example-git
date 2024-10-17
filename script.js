
let rootDiv = document.getElementById("root") // returns an HTML Element Object


function handleClick() {
    // do whatever! 
    renderHomePage()
}

function renderHomePage(){
    rootDiv.innerHTML = `
        <h1> HOME </h1>
        <p> It is Sep 30th, 2024 </p>

        <button type="button" onclick="renderDataPage()"> Check out your tasks! </button>
        <button type="button" onclick="renderSignUp()"> Log Out </button>
    `
}


function renderDataPage(){
    rootDiv.innerHTML = `
        <h1> TASKS </h1>
        <ul>
            <li> Go get groceries! </li>
            <li> Sign up for class </li>
            <li> Watch some anime! </li>
        </ul>

        <button type="button" onclick="renderHomePage()"> HOME </button>
    `
}


function renderSignUp() {
    rootDiv.innerHTML = `
        <form>
            <label> Email </label>
            <input type="text"> 

            <label> Password </label>
            <input type="password">
        
            <button type="button" onclick="handleClick()"> Log In! </button>
        </form>
    `
}



renderSignUp()










/*
rootDiv.innerHTML = 
`
    <h1>Yo I made this in Javascript</h1>
    <p id="detail"> This is a paragraph made entirely by Javascript! </p>

    <div>
        <img src="https://placehold.co/600x400" />
    </div>
`

let detailParagraph = document.getElementById("detail") // HTML Element Object
detailParagraph.style.color = "yellow"

document.body.style.textAlign = "center"
*/

/*
<h1> define some text here </h1>
let h1 = document.getElementById("message")
h1.innerHTML = "We changed this with Javascript!"
*/