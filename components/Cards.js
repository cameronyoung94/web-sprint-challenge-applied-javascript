// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
import axios from 'axios'

const cards = document.querySelector('.cards-container')
const articleURL = 'https://lambda-times-backend.herokuapp.com/articles'

axios.get(articleURL)
.then((r) => {
    const articles = r.data.articles
    for(let obj in articles){
        articles[obj].forEach(element => {
            cards.appendChild(createCard(element))
        });
    }
})

function createCard (obj){
    const cardDiv = document.createElement('div')
    const cardHeadLine = document.createElement('div')
    const cardAuthor = document.createElement('div')
    const cardImgDiv = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardSpan = document.createElement('span')

    cardAuthor.classList.add("card")
    cardHeadLine.classList.add("headline")
    cardAuthor.classList.add("author")
    cardImgDiv.classList.add("img-container")

    cardHeadLine.textContent = obj.headline 
    cardImg.src = obj.authorPhoto
    cardSpan.textContent = obj.authorName

    cardDiv.appendChild(cardHeadLine)
    cardDiv.appendChild(cardAuthor)
    cardAuthor.appendChild(cardImg)
    cardImgDiv.appendChild(cardImg)
    cardAuthor.appendChild(cardSpan)

    cardDiv.addEventListener('click', () => {
        console.log(obj.headline)
    })

    return cardDiv
}
