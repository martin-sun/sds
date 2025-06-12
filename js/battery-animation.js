// Import animejs 3.2.1 (default export)
import anime from 'animejs/lib/anime.es.js';

console.log('Battery animation script loaded, anime:', typeof anime !== 'undefined' ? 'available' : 'not available');

let animationTimeline;
let isAnimating = false;

function createAnimations() {
  console.log('Creating animations...');
  
  // Create master timeline
  animationTimeline = anime.timeline({
    loop: true,
    autoplay: false
  });
  
  console.log('Timeline created:', animationTimeline);
  
  // Electron flow animation
  animationTimeline.add({
    targets: '.electron',
    translateX: [
      {value: 0, duration: 0},
      {value: 50, duration: 1000},
      {value: 100, duration: 1000},
      {value: 150, duration: 1000},
      {value: 200, duration: 1000},
      {value: 0, duration: 1000}
    ],
    translateY: [
      {value: 0, duration: 1000},
      {value: -10, duration: 1000},
      {value: -15, duration: 1000},
      {value: -10, duration: 1000},
      {value: 0, duration: 2000}
    ],
    scale: [1, 1.2, 1.3, 1.2, 1],
    opacity: [0.6, 1, 1, 1, 0.6],
    delay: anime.stagger(200),
    easing: 'easeInOutQuad'
  });
  
  // Ion movement across membrane
  animationTimeline.add({
    targets: '.ion',
    translateX: [
      {value: -20, duration: 1500},
      {value: 0, duration: 1500},
      {value: 20, duration: 1500},
      {value: 0, duration: 1500}
    ],
    scale: [1, 1.3, 1.5, 1],
    opacity: [0.7, 1, 1, 0.7],
    delay: anime.stagger(300),
    easing: 'easeInOutSine'
  }, '-=2000');
  
  // Electrolyte flow animation
  animationTimeline.add({
    targets: '.negFlow',
    translateX: [
      {value: 0, duration: 0},
      {value: 60, duration: 2000},
      {value: 120, duration: 2000},
      {value: 0, duration: 1000}
    ],
    translateY: [
      {value: 0, duration: 1000},
      {value: -10, duration: 1000},
      {value: -20, duration: 1000},
      {value: 0, duration: 2000}
    ],
    opacity: [0.5, 1, 1, 0.5],
    delay: anime.stagger(200),
    easing: 'linear'
  }, '-=3000');
  
  animationTimeline.add({
    targets: '.posFlow',
    translateX: [
      {value: 0, duration: 0},
      {value: 60, duration: 2000},
      {value: 120, duration: 2000},
      {value: 0, duration: 1000}
    ],
    translateY: [
      {value: 0, duration: 1000},
      {value: 10, duration: 1000},
      {value: 20, duration: 1000},
      {value: 0, duration: 2000}
    ],
    opacity: [0.5, 1, 1, 0.5],
    delay: anime.stagger(200),
    easing: 'linear'
  }, '-=5000');
  
  // Pump rotation
  animationTimeline.add({
    targets: '#pumps circle',
    rotate: '360deg',
    duration: 2000,
    easing: 'linear'
  }, 0);
  
  // Liquid level fluctuation
  animationTimeline.add({
    targets: '#negativeLevel, #positiveLevel',
    scaleY: [
      {value: 1, duration: 1000},
      {value: 1.2, duration: 1000},
      {value: 0.8, duration: 1000},
      {value: 1, duration: 1000}
    ],
    opacity: [
      {value: 0.6, duration: 1000},
      {value: 0.8, duration: 1000},
      {value: 0.4, duration: 1000},
      {value: 0.6, duration: 1000}
    ],
    easing: 'easeInOutQuad'
  }, '-=4000');
  
  // Molecule vibration in tanks
  animationTimeline.add({
    targets: '#negativeMolecules circle, #positiveMolecules circle',
    translateX: function() {
      return anime.random(-3, 3);
    },
    translateY: function() {
      return anime.random(-3, 3);
    },
    scale: [1, 1.1, 1],
    duration: 1500,
    delay: anime.stagger(100),
    easing: 'easeInOutQuad'
  }, 0);
  
  // External circuit glow effect
  animationTimeline.add({
    targets: '#externalCircuit path',
    strokeWidth: [
      {value: 6, duration: 1000},
      {value: 10, duration: 1000},
      {value: 6, duration: 1000}
    ],
    opacity: [
      {value: 0.7, duration: 1000},
      {value: 1, duration: 1000},
      {value: 0.7, duration: 1000}
    ],
    easing: 'easeInOutSine'
  }, '-=3000');
  
  console.log('All animations added to timeline');
}

function initializeBatteryAnimation() {
  console.log('Initializing battery animation...');
  
  // Control buttons
  const startBtn = document.getElementById('startAnimation');
  const pauseBtn = document.getElementById('pauseAnimation');
  const resetBtn = document.getElementById('resetAnimation');
  
  if (!startBtn || !pauseBtn || !resetBtn) {
    console.error('Animation control buttons not found');
    return;
  }
  
  startBtn.addEventListener('click', () => {
    console.log('Start button clicked');
    console.log('Electron elements found:', document.querySelectorAll('.electron').length);
    console.log('Ion elements found:', document.querySelectorAll('.ion').length);
    console.log('Flow elements found:', document.querySelectorAll('.negFlow, .posFlow').length);
    
    try {
      if (!animationTimeline) {
        console.log('Creating new animations...');
        createAnimations();
      }
      console.log('Playing animations...');
      animationTimeline.play();
      isAnimating = true;
      console.log('Animations started successfully');
    } catch (error) {
      console.error('Error starting animations:', error);
    }
  });
  
  pauseBtn.addEventListener('click', () => {
    console.log('Pause button clicked');
    if (animationTimeline) {
      animationTimeline.pause();
      isAnimating = false;
      console.log('Animations paused');
    }
  });
  
  resetBtn.addEventListener('click', () => {
    console.log('Reset button clicked');
    if (animationTimeline) {
      animationTimeline.restart();
      animationTimeline.pause();
      isAnimating = false;
      console.log('Animations reset');
    }
  });
  
  console.log('Battery animation initialized successfully');
}

// Export the initialization function
window.initializeBatteryAnimation = initializeBatteryAnimation;

console.log('Battery animation module loaded');
