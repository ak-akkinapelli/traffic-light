const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');

const redButton = document.getElementById('red_button');
const yellowButton = document.getElementById('yellow_button');
const greenButton = document.getElementById('green_button');
const buttonsSection = document.getElementById('buttons');
const textSection = document.getElementById('text');

let mode = 'manual';
window.onload = () => {
  redLight?.classList.add('red');
  textSection?.classList?.add('hidden');
};
redButton.addEventListener('click', () => {
  redLight.classList.add('red');
  yellowLight.classList.remove('yellow');
  greenLight.classList.remove('green');
});
yellowButton.addEventListener('click', () => {
  yellowLight.classList.add('yellow');
  redLight.classList.remove('red');
  greenLight.classList.remove('green');
});
greenButton.addEventListener('click', () => {
  greenLight.classList.add('green');
  redLight.classList.remove('red');
  yellowLight.classList.remove('yellow');
});

const onChange = () => {
  mode = document.getElementById('mode').selectedOptions[0].value;
  const handleAutoLights = () => {
    if (mode !== 'auto') clearInterval(interval);
    if (redLight.classList.contains('red')) {
      redLight.classList.remove('red');
      yellowLight.classList.add('yellow');
    } else if (yellowLight.classList.contains('yellow')) {
      yellowLight.classList.remove('yellow');
      greenLight.classList.add('green');
    } else {
      greenLight.classList.remove('green');
      redLight.classList.add('red');
    }
  };
  const interval = setInterval(handleAutoLights, 2000);

  if (mode === 'auto') {
    buttonsSection?.classList?.add('hidden');
    textSection?.classList?.remove('hidden');
  } else {
    buttonsSection?.classList?.remove('hidden');
    textSection?.classList?.add('hidden');
  }
};
