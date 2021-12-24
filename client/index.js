import { io } from 'socket.io-client';

const displayMessage = (e) => {
    e.preventDefault();
    let x = document.querySelector('#message');
    let message = x.value;
    x.value = '';
    const div = document.createElement('div');
    div.innerHTML = message;
    return document.querySelector('#message-container').append(div)

};

const joinRoom = () => {
    const room = document.querySelector('#room')
}
document.querySelector('#send-message').addEventListener('click', displayMessage);