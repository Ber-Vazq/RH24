const express = require('express');
const app = express();
const path = require('path');

// Serve static files from their respective directories
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/NES.css-2.3.0', express.static(path.join(__dirname, 'NES.css-2.3.0')));

// Serve index.html from the root directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
