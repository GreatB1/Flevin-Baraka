$(document).ready(function () {
  $(".sidenav").sidenav();
});

particlesJS('particles-js', {
  particles: {
      number: { value: 100 },
      color: { value: 'random' },
      shape: { type: 'star' },
      opacity: { value: 0.8, random: true },
      size: { value: 3.5, random: true },
      line_linked: { enable: true, distance: 150, color: '#ffffff', opacity:   
0.4, width: 1 },
      move: { enable: true, speed: 2, direction: 'random', random: false,   
anim: { enable: true, speed: 1, opacity: 0.5, size: false } }
  }
});