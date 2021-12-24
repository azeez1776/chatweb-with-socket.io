const io = require('socket.io')(3000, {
    cors: {
        origin: ['https://localhost:3000']
    }
});

io.on('connection', socket => {
    console.log(socket.id)
})