

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('I am going to be a node boss');
})

app.listen(3400, () => console.log('Hello Hello Hello'));