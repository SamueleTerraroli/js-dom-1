const btnToggle = document.getElementById('toggle-button')
const lightBulb = document.getElementById('bulb')
const backgroundColor = document.getElementById('background')


btnToggle.addEventListener('click', () =>{
  lightBulb.classList.toggle('hide');  
  backgroundColor.classList.toggle('bg_black')
  btnToggle.innerHTML = lightBulb.classList.contains('hide') ? 'Accendi la lampadina' : 'Spegni la lampadina';


})