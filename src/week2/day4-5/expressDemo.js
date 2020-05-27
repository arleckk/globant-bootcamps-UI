const express   = require('express');
const fs        = require('fs');
const app       = express();
const port      = 3000;

app.get('/', (req, res) => {
    res.send('Hello There!');
})

app.listen(port, () => {
    console.log('Example server listening on port ' + port);
    console.log('Enter http://localhost:' + port + ' on your browser')
})

app.get('/random', (req, res) => {
    let randomNum = Math.floor(Math.random() * 101);
    res.send(`random number ${randomNum}`);
})

app.get('/something', (req, res) => {
    let cat = `There is a cat staring at you
    <br>\\\xa0\xa0\xa0\xa0/\\
    <br>)\xa0\xa0(\xa0')
    <br>(\xa0\xa0/\xa0\xa0)
    <br>\\(__)|`;
    /**
     * \    /\
       )  ( ')
      (  /  )
      \(__)|
     */
    res.send(cat);
})

app.get('/json', (req, res) => {
    let rawData = fs.readFileSync('package.json');
    let json = JSON.parse(rawData);
    res.send(json);
})


// First things first, this won't work. It's your job to fix it
// Just a clue, that variable called express is a module, so you need to bring it in.
// If only there was some kind of MANAGER for that ;) (make sure you save it though)

// Once the server is working, add a new route, called "/random" that
// sends out a random number between 0 and 100 as a response.

// ******BONUS POINTS*******
// Add 2 other routes, one that does whatever you want, and another one
// that load up a JSON file from the server (if you don't know what that is, Google it)
// and sends the content as a string (little tip, theres a Js method for that)
