document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('clickButton');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.textContent = 'Button was clicked!';
    });
});
