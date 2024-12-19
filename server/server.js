const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// serve static files in build folder
app.use(express.static(path.join(__dirname, '../build')));

// Landing page
app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// Server listening on port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});