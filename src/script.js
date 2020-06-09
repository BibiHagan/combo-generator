let myTimer;

let buttonPressed = function () {
  if (running) {
    stop();
    document.getElementById('message').innerHTML = 'Press start to get going';
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
  clearInterval(myTimer);
};

var updater = function () {
  var combo = getRandomNumber() + getRandomLetter();
  var combos = document.getElementById('combination');
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
};
