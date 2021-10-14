const displayMessage = (e) => {
    e.preventDefault();
    let x = document.querySelector('#message');
    let message = x.value;
    x.value = '';
    const div = document.createElement('div');
    div.innerHTML = message;
    return document.querySelector('#message-container').append(div)

};

document.querySelector('#send-message').addEventListener('click', displayMessage);