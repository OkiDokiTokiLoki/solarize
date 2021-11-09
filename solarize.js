const darkButton = document.querySelector('#dark');
const lighthButton = document.querySelector('#light');
const solarButton = document.querySelector('#solar');
const body = document.body;

darkButton.onclick = () => {
    body.classList.replace('light', 'dark');
};

lighthButton.onclick = () => {
    body.classList.replace('dark', 'light');
};

solarButton.onclick = () => {
    if(body.classList.contains('solar')){
        
        body.classList.remove('solar');
        
        solarButton.style.cssText = 
            `--bg-solar: var(--yellow);`
        solarButton.innerText = 'solarize';

    } else {
        solarButton.style.cssText = 
            `--bg-solar: white;`
        body.classList.add('solar');
        solarButton.innerText = 'normalize';
    }
};