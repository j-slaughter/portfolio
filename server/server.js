const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.get('/', (req, res) => {
    //Landing page
    res.send('Welcome, World!');
    //return res.sendFile(path.join(__dirname, './index.html'));
});

// Server listening on port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});