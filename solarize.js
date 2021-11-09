const darkButton = document.querySelector('#dark');
const lighthButton = document.querySelector('#light');
const solarButton = document.querySelector('#solar');
const body = document.body;

// Applying a chached theme on reload
const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme){
    body.classList.add(theme);
    isSolar && body.classList.add('solar');
}

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
};

lighthButton.onclick = () => {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
};

solarButton.onclick = () => {
    if(body.classList.contains('solar')){
        
        body.classList.remove('solar');
        
        solarButton.style.cssText = 
            `--bg-solar: var(--yellow);`
        solarButton.innerText = 'solar';

        localStorage.removeItem('isSolar');

    } else {
        solarButton.style.cssText = 
            `--bg-solar: white;`
        body.classList.add('solar');
        solarButton.innerText = 'polar';

        localStorage.setItem('isSolar', true);
    }
};