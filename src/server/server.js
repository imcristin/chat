const http = require('http')
const express = require('express')

const app = express()
const server = http.createServer(app) //io requires raw http

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
    },
    allowEIO3: true
});



io.on('connection', socket => {
    socket.broadcast.emit("showMessage", {text: 'A NEW USER HAS JOINED'})
    socket.on('sendMessage', message => io.emit('showMessage', {text:message.text}))
    socket.on('disconnect', () => {})

})

const port = process.env.PORT || 8000
server.listen(port, () => console.log('Server is running...'))

