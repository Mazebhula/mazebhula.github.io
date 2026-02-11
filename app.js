gsap.registerPlugin(ScrollTrigger);

// Hero clouds parallax
gsap.timeline({
  scrollTrigger: {
    trigger: 'section.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.5
  }
})
.fromTo('.cloud1', {y: '0%'}, {y: '-50%'}, 0)
.fromTo('.cloud2', {y: '0%'}, {y: '-30%'}, 0)
.fromTo('.cloud3', {y: '0%'}, {y: '-70%'}, 0);

let xPos = 0;

const imagePaths = [
  'images/beekeeper.png',
  'images/docker.png',
  'images/git-logo.png',
  'images/Java-Logo.png',
  'images/Node.js_logo.svg',
  'images/postgresql-logo.png'
];




// Initial setup for carousel elements
gsap.set('.ring', {
  rotationY: 180,
  left: '50%',
  xPercent: -50,
  transformOrigin: '50% 50% -1500px', // center rotation circle
});

gsap.set('.img', {
  rotateY: (i) => i * -36, // 10 images → 360/10
  transformOrigin: '50% 50% 2500vh',       // radius of rotation circle
  z: -1500,                                // match radius
  x: 0, // no manual horizontal shift
  backgroundImage: (i) => 'url(' + imagePaths[i % imagePaths.length] + ')',
  backgroundPosition: (i) => getBgPos(i),
  backfaceVisibility: 'hidden',
  y: 200, // Initial position for the from animation
  opacity: 0
});

// Add GitHub icon to each image
gsap.utils.toArray('.img').forEach((imgElement) => {
  $(imgElement).append(`
    <a href="https://github.com/mazebhula" target="_blank" class="github-icon-link">
      <i class="fab fa-github"></i>
    </a>
  `);
});

// ScrollTrigger for hero section disappearing and stage moving up
gsap.timeline({
  scrollTrigger: {
    trigger: 'section.hero',
    start: 'top top', // When hero hits top of viewport
    end: 'bottom top', // When hero is fully out of view
    scrub: true
  }
})
.to('section.hero', { yPercent: -100, ease: 'none' }) // Move hero up

// ScrollTrigger for carousel rotation and animation once it's in place
gsap.timeline({
  scrollTrigger: {
    trigger: 'section.stage',
    start: 'top top', // When stage hits top of viewport
    end: '+=1500', // Rotate over 1500px of scroll
    scrub: true,
    pin: true // Pin the stage section
  }
})
.to('.img', { y: 0, opacity: 1, stagger: 0.1, ease: 'power1.out' }) // Animate images into view
.to('.ring', { rotationY: '+=360', ease: 'none' }, 0); // Rotate the ring 360 degrees

// Adjust background position based on rotation
function getBgPos(i){
  return (100 - gsap.utils.wrap(0, 360, gsap.getProperty('.ring', 'rotationY') - 180 - i * 36) / 360 * 1500) + 'px 0px';
}

// Education section flip cards
document.addEventListener('DOMContentLoaded', () => {
  const flipContainers = document.querySelectorAll('.flip-container');

  flipContainers.forEach(container => {
    container.addEventListener('click', (event) => {
      // Close other flipped cards
      flipContainers.forEach(otherContainer => {
        if (otherContainer !== event.currentTarget && otherContainer.classList.contains('flipped')) {
          otherContainer.classList.remove('flipped');
        }
      });
      // Toggle flipped class on the clicked card
      event.currentTarget.classList.toggle('flipped');
    });
  });
});
