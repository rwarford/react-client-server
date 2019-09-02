// src/app.js

import express from 'express';

const {
    PORT = 3001
} = process.env;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/test-data', (req, res) => {
    res.json({text: 'Hello from server!'});
});

app.listen(PORT, () => 
    console.log(`Listening on http://localhost:${PORT}`)
);