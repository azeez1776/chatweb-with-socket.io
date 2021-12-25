import { io } from 'socket.io-client';
const socket = io('http://localhost:3000')
const form = document.getElementById('form');
const messageInput = document.getElementById('message');
const roomInput = document.getElementById('room');
const joinRoom = document.getElementById('join-room');

form.addEventListener("submit", e => {
    e.preventDefault();
    const message = messageInput.value;
    const room = roomInput.value;


    if (message === '') return
    displayMessage(message);
    socket.emit('send-message', message, room);
    messageInput.value = ''

})

joinRoom.addEventListener('click', () => {
    const room = roomInput.value;

})



const displayMessage = (message) => {

    // let x = document.querySelector('#message');
    // let message = msg | x.value;
    // x.value = '';
    const div = document.createElement('div');
    div.textContent = message;
    return document.querySelector('#message-container').append(div)

};



socket.on('connect', () => {
    displayMessage(`You connected with id: ${socket.id}`)
})
socket.on('receive-message', message => displayMessage(message))
socket.emit('join-room', room)
