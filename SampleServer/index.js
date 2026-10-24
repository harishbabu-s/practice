const express = require('express');
const app = express();

app.use(express());

app.get('/', (req, res) => {
    res.send('Hello from Node API server... ' + Date.now());
});

app.listen(3000, () => console.log('listening on port 3000'));