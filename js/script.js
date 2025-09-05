// Lamp toggle logic
const sw = document.getElementById('switch');
const profile = document.getElementById('profile');
const lampState = document.getElementById('lampState');
const beam = document.querySelector('.beam');
let on = false;

function setLamp(state){
  on = state;
  sw.classList.toggle('on', on);
  profile.classList.toggle('on', on);
  beam.classList.toggle('on', on);
  sw.setAttribute('aria-checked', on ? 'true' : 'false');
  lampState.textContent = on ? 'On' : 'Off';
}

sw.addEventListener('click', ()=> setLamp(!on));
sw.addEventListener('keydown', (e)=>{ 
  if(e.key==='Enter' || e.key===' ') { 
    e.preventDefault(); 
    setLamp(!on);
  } 
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
