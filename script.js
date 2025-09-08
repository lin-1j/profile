const starGrid = document.querySelector('.star-grid');
const numStars = 10;
const curStarsClicked = 0;
// This will store info about each star like what
// its current position is
const starsInfo = [];

const GRIDWIDTH = 400;
// create all the stars
for (let i = 0; i < numStars; i++) {
  let star = document.createElement('div');
  star.classList.add('star');

  // give each star a random position
  let x = Math.random() * GRIDWIDTH;
  let y = Math.random() * GRIDWIDTH;
  // give each star a random speed
  let dx = Math.random() + 1;
  if (Math.random () < 0.5) {
    dx = -dx;
  }

  let dy = Math.random() + 1;
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
      curStarsClicked++;
    }
  };
}

function animate() {
  // update the positions for each star
  for (let i = 0; i < numStars; i++) {
    const starObj = starsInfo[i];

    starObj.x = starObj.x + starObj.dx;
    starObj.y = starObj.y + starObj.dy;

    // check if the star will go out of bounds
    if (starObj.x <= 0) {
      starObj.dx = starObj.dx * -1;
    } else if (starObj.x >= GRIDWIDTH) {
      starObj.dx = starObj.dx * -1;
    }

    if (starObj.y <= 0) {
      starObj.dy = starObj.dy * -1;
    } else if (starObj.y >= GRIDWIDTH) {
      starObj.dy = starObj.dy * -1;
    }

    //set the new star position
    starObj.star.style.left = starObj.x + 'px';
    starObj.star.style.top = starObj.y + 'px';
  }

  requestAnimationFrame(animate);
}

animate()