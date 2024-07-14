
const jokeContainer = document.getElementById('joke');
const generateBtn = document.getElementById('produce-btn');
const apiURL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let createJoke = () => { 
    jokeContainer.classList.remove('fade-in-out');

    fetch(apiURL).then(data => data.json()).then(content => {
        jokeContainer.textContent = `${content.joke}`;
        jokeContainer.classList.add('fade-in-out');
    });
}

generateBtn.addEventListener('click', createJoke);
console.log('Hello World!');
//! First the first time the page loads
createJoke();