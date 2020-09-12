// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const headerDiv = document.createElement('div')
    const headerSpan = document.createElement('span')
    const headerH1 = document.createElement('h1')
    const headerTemp = document.createElement('span')
    //created the elements

    headerDiv.classList.add("header")
    headerSpan.classList.add("date")
    headerTemp.classList.add("temp")
    //added classes to my elements

    headerSpan.textContent = "MARCH 28, 2020"
    headerH1.textContent = "Lambda Times"
    headerTemp.textContent = "98°"
    //added content

    headerDiv.appendChild(headerSpan)
    headerDiv.appendChild(headerH1)
    headerDiv.appendChild(headerTemp)
    //appended elements togther

    return headerDiv
}

console.log(Header())

const header = document.querySelector('.header-container')
header.appendChild(Header())
//appended component to the dom