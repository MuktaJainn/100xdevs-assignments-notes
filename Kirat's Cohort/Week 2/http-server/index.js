//Creating an HTTP server.



//Difference between fs and express, fs was there in node js, for express u need to run npm install express

const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


//rn at lecture 2.2 - lwft with last 1 hr 10 mins.

//
