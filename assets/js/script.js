document.addEventListener('DOMContentLoaded', () => {
  
  const appContainer = document.getElementById('app');
  let counterValue = parseInt(localStorage.getItem('counterValue')) || 0;
  let backgroundColor = localStorage.getItem('appBackgroundColor') || '#fff';
  appContainer.style.backgroundColor = backgroundColor;

  const counterDisplay = document.createElement('div');
  counterDisplay.classList.add('counter-display');
  counterDisplay.textContent = counterValue; 

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons-container');

  const decrementBtn = document.createElement('button');
  decrementBtn.textContent = '−'; 
  decrementBtn.id = 'decrementBtn'; 

  const incrementBtn = document.createElement('button');
  incrementBtn.textContent = '+'; 
  incrementBtn.id = 'incrementBtn'; 

  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Reset';
  resetBtn.id = 'resetBtn'; 

  buttonsContainer.appendChild(decrementBtn);
  buttonsContainer.appendChild(incrementBtn);

  const settingsContainer = document.createElement('div');
  settingsContainer.classList.add('settings-container');

  const colorLabel = document.createElement('label');
  colorLabel.textContent = 'Change color counter:';
  colorLabel.htmlFor = 'backgroundColorPicker';

  const colorPicker = document.createElement('input');
  colorPicker.type = 'color';
  colorPicker.id = 'backgroundColorPicker';
  colorPicker.value = backgroundColor; 

  settingsContainer.appendChild(colorLabel);
  settingsContainer.appendChild(colorPicker);

  appContainer.appendChild(counterDisplay);
  appContainer.appendChild(buttonsContainer);
  appContainer.appendChild(resetBtn);
  appContainer.appendChild(settingsContainer);

  function updateCounterDisplay() {
      counterDisplay.textContent = counterValue;
      localStorage.setItem('counterValue', counterValue);
  }

  decrementBtn.addEventListener('click', () => {
      counterValue--; 
      updateCounterDisplay(); 
  });

  incrementBtn.addEventListener('click', () => {
      counterValue++; 
      updateCounterDisplay(); 
  });

  resetBtn.addEventListener('click', () => {
    counterValue = 0; 
    updateCounterDisplay(); 
  });

  colorPicker.addEventListener('input', (event) => {
      const newColor = event.target.value;
      appContainer.style.backgroundColor = newColor; 
      localStorage.setItem('appBackgroundColor', newColor);
  });
});