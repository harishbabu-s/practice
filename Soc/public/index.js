// console.log("---------\n",io);

//io() connects to the server at the url
const socket = io('http://localhost:4000');

socket.on('welcome_message', (data) => {
    console.log("server : ",data);

    socket.emit('reply', 'hello from the client');
})


