const main = document.querySelector("main");
const parts = document.querySelectorAll(".tree");
const ornaments = document.querySelectorAll(".ornament");
document.documentElement.setAttribute('data-steps', '12345');

parts.forEach((part, i) => {
  part.style.setProperty('--i', i);
});
ornaments.forEach((part, i) => {
  part.style.setProperty('--i', i * 3.6 + 12); //maaaagic numbers!
});


// Show different steps to get to the tree
const steps = document.querySelectorAll('input[type="radio"]');

steps.forEach((step) => {
  step.addEventListener('click', (e) => {
    document.documentElement.setAttribute('data-steps', e.currentTarget.value);
  });
});




// Update Playback Rate
const rate = document.getElementById('rate');

const updateRate = e => {
  if (main.getAnimations) {
    const animation = main.getAnimations()[0];
    if (animation) {
      if (animation.playState === 'paused') {
        animation.play();
      }
      animation.playbackRate = parseFloat(e.currentTarget.value);
    }
  }
};

rate.addEventListener('input', updateRate);