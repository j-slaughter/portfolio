const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// statically serve everything in build folder
app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
    //Landing page
    return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// Server listening on port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});