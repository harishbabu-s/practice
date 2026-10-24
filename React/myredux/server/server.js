const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.join(__dirname, './sharing');

app.use("/share", express.static(publicPath));

app.get('/files', (req, res) => {
    res.sendFile(path.join(publicPath));

})

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(3000, () => console.log('Example app listening on port 3000!'));