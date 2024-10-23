const express = require('express');
const app = express();
let pinged = false;

// Endpoint to receive pings from Termux
app.get('/ping', (req, res) => {
    pinged = true;
    res.send('Ping received');
});

// Endpoint to send the ping status to the frontend
app.get('/ping-status', (req, res) => {
    if (pinged) {
        res.json({ status: 'Ping detected!' });
        pinged = false; // Reset after sending the status
    } else {
        res.json({ status: 'Waiting for ping...' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
