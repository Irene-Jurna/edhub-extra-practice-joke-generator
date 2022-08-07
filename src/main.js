console.log('Laten we grapjes ophalen')

import giveMeAJoke from 'give-me-a-joke'
import axios from 'axios'

giveMeAJoke.getRandomDadJoke((joke) => {
    console.log("Dad joke: " + joke);
    const jokeTwo = document.getElementById('dad-joke');
    jokeTwo.innerHTML = `Dad joke: ${joke}`;
});

async function fetchJoke() {
    try {
        const result = await axios.get('https://api.chucknorris.io/jokes/random');
        console.log('Chuck Norris grapje: ' + result.data.value);
        const jokeOne = document.getElementById('chuck-norris-joke');
        jokeOne.innerHTML = `Chuck Norris joke: ${result.data.value}`;
    } catch (e) {
        console.error(e);
    }
}

fetchJoke();

