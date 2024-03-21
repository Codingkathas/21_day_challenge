// Function to play sound
function playSound(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    const title = document.querySelector('.title');
    if (!audio) return;
  
    audio.currentTime = 0;
    audio.play();
  
    key.classList.add('playing');
    title.classList.add('playing');
    setTimeout(() => {
      key.classList.remove('playing');
      title.classList.remove('playing');
    }, 500); // Adjust the delay time as needed (0.5 seconds in this case)
  
  }
  
  // Event listener for keydown
  window.addEventListener('keydown', function (e) {
    playSound(e.keyCode);
  });
  
  // Event listener for clicks on keys
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('click', function () {
    const keyCode = this.getAttribute('data-key');
    playSound(keyCode);
  }));
  
  // Function to remove transition class
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  
  // Event listener for transition end
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
