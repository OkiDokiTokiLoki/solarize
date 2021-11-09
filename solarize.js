const darkButton = document.querySelector('#dark');
const lighthButton = document.querySelector('#light');
const solarButton = document.querySelector('#solar');
const body = document.body;

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
}

lighthButton.onclick = () => {
    body.classList.replace('dark', 'light');
}

