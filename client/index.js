import { io } from 'socket.io-client';

const form = document.getElementsByTagName('form');

const displayMessage = (message) => {

    // let x = document.querySelector('#message');
    // let message = msg | x.value;
    // x.value = '';
    const div = document.createElement('div');
    div.textContent = message;
    return document.querySelector('#message-container').append(div)

};

const joinRoom = () => {
    const room = document.querySelector('#room')
}

const socket = io('http://localhost:3000')
socket.on('connect', () => {
    displayMessage(`You connected with id: ${socket.id}`)
    socket.emit('send-message', displayMessage())
})

socket.on('recieve-message', message => {
    displayMessage(message)
})

document.querySelector('#send-message').addEventListener('click', displayMessage);