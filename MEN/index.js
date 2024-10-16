console.log('hello world');
const express = require('express');
const mongoose = require('mongoose');

const Product = require("./models/product.models")
 
const username = "dev_user";
const password = "DeVPaSsWoRd";
const creds = username + ":" + password;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Node API server... ' + Date.now());
});



// mongoose.connect('mongodb+srv://harrisbobiot:AdMiNPaSsWoRd@mensterdb.jmlbp.mongodb.net/?retryWrites=true&w=majority&appName=mensterDB').then(() => console.log('MongoDB connected')).catch(err => console.log(err));

mongoose.connect('mongodb+srv://harrisbobiot:AdMiNPaSsWoRd@mensterdb.jmlbp.mongodb.net/?retryWrites=true&w=majority&appName=mensterDB')
.then(() => {
    console.log('Connected to MongoDB...');
    app.listen(3000, () => console.log('listening on port 3000'));
})
.catch(err => console.error('Could not connect to MongoDB...', err));





