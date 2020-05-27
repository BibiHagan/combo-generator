let myTimer;

var start = function () {
  myTimer = setInterval(updater, 5000);
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
