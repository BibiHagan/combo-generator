const myTimer = 1000;
const length = {
  LONG: 2,
  MEDIUM: 1.5,
  SHORT: 1,
};

let running = false;

var start = async function () {
  console.log('start');
  running = true;
  for (let i = 0; i <= 40 && running; i++) {
    console.log('interval ', i);
    const combo = updater();
    await sleep(getMultiplier(combo) * myTimer);
  }
};

var stop = function () {
  running = false;
  console.log('end');
};

let updater = function () {
  let combo = getRandomNumber() + getRandomLetter();
  let combos = document.getElementById('combination');
  combos.innerHTML = combo;

  return combo;

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
};

function getMultiplier(combo) {
  let modifier = data.find((element) => element.name === combo).modifier;
  console.log(modifier);

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
