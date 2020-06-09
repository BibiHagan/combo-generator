const length = {
  LONG: 2,
  MEDIUM: 1.5,
  SHORT: 1,
};

let running = false;
let myTimer = 1000;
let totalCombos = 40;

let buttonPressed = function () {
  if (running) {
    stop();
    document.getElementById('message').innerHTML = "Let's do that again?";
    document.getElementById('combination').innerHTML = '';
    document.getElementById('myButt').innerHTML = 'START';
  } else {
    start();
    document.getElementById('message').innerHTML = '';
    document.getElementById('myButt').innerHTML = 'STOP';
  }
};

var start = async function () {
  running = true;
  for (let i = 0; i < totalCombos && running; i++) {
    const combo = updateCombo();
    await sleep(getMultiplier(combo) * myTimer);
  }
};

var stop = function () {
  running = false;
};

let updateCombo = function () {
  let combo = getRandomNumber() + getRandomLetter();
  let combos = document.getElementById('combination');
  combos.innerHTML = combo;

  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  function getRandomLetter() {
    number = Math.floor(Math.random() * 4);

    switch (number) {
      case 0:
        return 'A';
        break;
      case 1:
        return 'B';
        break;
      case 2:
        return 'C';
        break;
      case 3:
        return 'D';
        break;
    }
  }

  return combo;
};

function getMultiplier(combo) {
  let modifier = data.find((element) => element.name === combo).modifier;

  switch (modifier) {
    case 'long':
      return length.LONG;
      break;
    case 'medium':
      return length.MEDIUM;
      break;
    default:
      return length.SHORT;
      break;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
