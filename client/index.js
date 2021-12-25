import { io } from 'socket.io-client';

const form = document.getElementsByTagName('form');
const messageInput = document.getElementById('message');
const roomInput = document.getElementById('room');
const joinRoom = document.getElementById('joinRoom');

form.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value;
    const room = roomInput.value;


    if (message === '') return
    displayMessage(message);

    messageInput.value = ''

})



const displayMessage = (message) => {

    // let x = document.querySelector('#message');
    // let message = msg | x.value;
    // x.value = '';
    const div = document.createElement('div');
    div.textContent = message;
    return document.querySelector('#message-container').append(div)

};



const socket = io('http://localhost:3000')
socket.on('connect', () => {
    displayMessage(`You connected with id: ${socket.id}`)
    socket.emit('send-message', displayMessage())
})

socket.on('recieve-message', message => {
    displayMessage(message)
})

