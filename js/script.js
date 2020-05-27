
// Alert Bar
const alertBanner = document.getElementById('alert');
alertBanner.innerHTML = 
`
    <p><strong>Alert:</strong> You have unread notifications!</p>
    <p class="alertClose">X</p>

`;
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.className === 'alertClose') {
        alertBanner.style.display = 'none';
    }
});

// Message box
const user = document.getElementById('userField');
const message = document.getElementById('messageField');
const send = document.getElementById('send');



send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert('Please fill out the user and message fields before sending');
    } else if (user.value === "") {
        alert('Please fill out the user field before sending')
    } else if (message.value === "") {
        alert('Please fill out th emessage field before sending');
    } else {
        alert(`Message successfully sent to ${user.value}`);
    }
});