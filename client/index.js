import { io } from 'socket.io-client';

const displayMessage = (message) => {
    e.preventDefault();
    let x = document.querySelector('#message');
    // let message = x.value;
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
    displayMessage(`You connected with id ${socket.id}`)
})

document.querySelector('#send-message').addEventListener('click', displayMessage);