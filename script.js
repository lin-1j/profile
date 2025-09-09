const starGrid = document.querySelector('.star-grid');
const numStars = 10;
let curStarsClicked = 0;
// This will store info about each star like what
// its current position is
const starsInfo = [];

const GRIDWIDTH = 1000;
const GRIDHEIGHT = 400;
// create all the stars
for (let i = 0; i < numStars; i++) {
  let star = document.createElement('div');
  star.textContent = "⚝";
  star.classList.add('star');

  // give each star a random position
  let x = Math.random() * GRIDWIDTH;
  let y = Math.random() * GRIDHEIGHT;
  // give each star a random speed
  let dx = Math.random() * 7 + 1;
  if (Math.random () < 0.5) {
    dx = -dx;
  }

  let dy = Math.random() * 7 + 1;
  if (Math.random () < 0.5) {
    dy = -dy;
  }

  // set the star's position inside the grid based on 
  // the generated x and y 
  star.style.left = x + 'px';
  star.style.top = y + 'px';

  starsInfo.push({star, x, y, dx, dy})
  starGrid.appendChild(star);

  // if the star is clicked for the first time add a clicked
  // class and increment the counter variable
  star.onclick = () => {
    if (!star.classList.contains('clicked')) {
      star.classList.add('clicked');
      star.textContent = "🌠";
      curStarsClicked++;
    }
  };
}

const resetClicked = document.querySelector('.reset-clicked-stars');
const clickedCounter = document.querySelector('.stars-clicked-counter');
const clickAll = document.querySelector('.click-all-stars');

const basicInfo = document.querySelector('.basic-info');
const coursesTaken = document.querySelector('.courses-taken');
const interests = document.querySelector('.interests');
const funFacts = document.querySelector('.fun-fact');
const dreams = document.querySelector('.dreams');

resetClicked.onclick = () => {
  curStarsClicked = 0;
  clickedCounter.textContent = "Stars clicked: " + curStarsClicked;

  // remove clicked state from all stars
  starsInfo.forEach(starObj => {
    starObj.star.classList.remove('clicked');
    starObj.star.textContent = "⚝";
  })

  // reset the about me sections
  basicInfo.textContent = "Basic info: 2 to unlock!"
  coursesTaken.textContent = "Comp courses taken: 4 to unlock!"
  interests.textContent = "My interests: 6 to unlock!"
  funFacts.textContent = "Fun fact: 8 to unlock!"
  dreams.textContent = "My current dream: 10 to unlock!"
};

clickAll.onclick = () => {
  curStarsClicked = 10;
  clickedCounter.textContent = "Stars clicked: " + curStarsClicked;

  // add clicked state to all stars
  starsInfo.forEach(starObj => {
    starObj.star.classList.add('clicked');
    starObj.star.textContent = "🌠";
  })

  // show about me sections
  basicInfo.textContent = "Basic info: Hi I'm Jack and I'm a second year student " +
    "studying compsci + commerce at UNSW! I'm from Auckland, NZ"
  coursesTaken.textContent = "Comp courses taken: comp1511 comp1521 comp1531 comp2041 comp2511 comp2521 comp3311 comp3511"
  interests.textContent = "My interests: I like playing badminton and going to the gym. I also like " +
    "attending various societies at UNSW like ACYA and culture cafe"
  funFacts.textContent = "Fun fact: I have a glass of milk every breakfast, lunch, and dinner 🥛"
  dreams.textContent = "My current dream: to not be unemployed after graduating 😹"
}

const STARWIDTH = 40;
function animate() {
  // update the positions for each star
  for (let i = 0; i < numStars; i++) {
    const starObj = starsInfo[i];

    starObj.x = starObj.x + starObj.dx;
    starObj.y = starObj.y + starObj.dy;

    // check if the star will go out of bounds
    // if it does then flip the direction and put it
    // back in bounds
    if (starObj.x <= 0) {
      starObj.x = 0;
      starObj.dx = starObj.dx * -1;
    } else if (starObj.x >= GRIDWIDTH - STARWIDTH) {
      starObj.x = GRIDWIDTH - STARWIDTH;
      starObj.dx = starObj.dx * -1;
    }

    if (starObj.y <= 0) {
      starObj.y = 0
      starObj.dy = starObj.dy * -1;
    } else if (starObj.y >= GRIDHEIGHT - STARWIDTH) {
      starObj.y = GRIDHEIGHT - STARWIDTH;
      starObj.dy = starObj.dy * -1;
    }

    //set the new star position
    starObj.star.style.left = starObj.x + 'px';
    starObj.star.style.top = starObj.y + 'px';
  }

  // update the stars clicked counter
  clickedCounter.textContent = "Stars clicked: " + curStarsClicked;

  if (curStarsClicked == 2) {
    basicInfo.textContent = "Basic info: Hi I'm Jack and I'm a second year student " +
    "studying compsci + commerce at UNSW! I'm from Auckland, NZ"
  } else if (curStarsClicked == 4) {
    coursesTaken.textContent = "Comp courses taken: comp1511 comp1521 comp1531 comp2041 comp2511 comp2521 comp3311 comp3511"
  } else if (curStarsClicked == 6) {
    interests.textContent = "My interests: I like playing badminton and going to the gym. I also like " +
    "attending various societies at UNSW like ACYA and culture cafe"
  } else if (curStarsClicked == 8) {
    funFacts.textContent = "Fun fact: I have a glass of milk every breakfast, lunch, and dinner 🥛"
  } else if (curStarsClicked == 10) {
    dreams.textContent = "My current dream: to not be unemployed after graduating 😹"
  }

  requestAnimationFrame(animate);
}

animate()