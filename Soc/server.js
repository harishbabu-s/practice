const express = require('express');
const app = express();

//serve the files in the public folder statically
app.use(express.static('public'));

const expressServer = app.listen(4000, () => {
    console.log('listening on : 4000');  
})


const socketio = require('socket.io');
//io is our socket.io server
const io = socketio(expressServer, {
    cors : [ 
        'http://localhost:3000'
    ]
});

//on is a regular javascript/node event listener
io.on('connection', (socket) => {
    console.log(socket.id, ' has connected');

    socket.emit('welcome_message', 'welcome to the server');
    socket.on('reply', (data) => {
        console.log("client : ",data);
    })
    socket.on('disconnect', () => {
        console.log(socket.id, 'has disconnected');
    });
})





// const {createServer} = require('http');
// const httpServer = createServer();

// const { Server } = require('socket.io');
// const io = new Server(httpServer, {
//     cors : [ 
//         'http://localhost:3000'
//     ]
// });

// io.on('connection', (socket) => {
//     console.log(socket);
//     console.log('a user connected');
//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
// });


// httpServer.listen(3000, () => {
//     console.log('listening on *:3000');
// });