let cookieCount = 0;
let cookiesPerSecond = 1;
let autoClickerPrice = 100;
let enhancedOvenPrice = 500;
let cookieFarmPrice = 1000;
let robotBakerPrice = 2000;
let cookieFactoryPrice = 5000;
let magicFlowerPrice = 10000;
let timeMachinePrice = 20000;
let quantumOvenPrice = 50000;
let alienTechnologyPrice = 100000;
let interdimensionalBakerPrice = 200000;

const cookieCountDisplay = document.getElementById("cookieCount");
const cookiesPerSecondDisplay = document.getElementById("cookiesPerSecond");
const cookieButton = document.getElementById("cookieButton");
const shopDisplay = document.getElementById("shop");
const audio = new Audio();
audio.src = "Assets/mouseClick.mp3";
const audio2 = new Audio();
audio2.src = "Assets/upgradeSound.mp3";

cookieButton.addEventListener("click", function () {
  cookieCount++;
  updateUI();
});

function updateUI() {
  cookieCountDisplay.innerText = cookieCount;
  cookiesPerSecondDisplay.innerText = cookiesPerSecond;
}

function updateStorage() {
  localStorage.setItem("cookieCount", cookieCount);
  localStorage.setItem("CPS", cookiesPerSecond);
}

function update() {
  cookieCount += cookiesPerSecond;
  console.log(cookieCount);
  updateUI();
  updateStorage();
}

setInterval(update, 1000);

function loadGame() {
  if (
    localStorage.getItem("cookieCount") != null &&
    localStorage.getItem("CPS") != null
  ) {
    cookieCount = JSON.parse(localStorage.getItem("cookieCount"));
    cookiesPerSecond = JSON.parse(localStorage.getItem("CPS"));
  }
}
loadGame();

async function fetchUpgrades() {
  const res = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades");
  const cookieInfo = await res.json();
  console.log(cookieInfo);
  return cookieInfo;
}

fetchUpgrades();

function displayUpgrades(arrayofUpgrades) {
  arrayofUpgrades.forEach(function (upgrade) {
    console.log(upgrade);
  });
}

document.getElementById("autoClicker").addEventListener("click", function () {
  if (cookieCount >= autoClickerPrice) {
    cookieCount -= autoClickerPrice;

    cookiesPerSecond += 1;
  } else {
    alert("Slow down cowboy , you dont have enough cookies!");
  }
});

document.getElementById("Enhanced Oven").addEventListener("click", function () {
  if (cookieCount >= enhancedOvenPrice) {
    cookieCount -= enhancedOvenPrice;

    cookiesPerSecond += 5;
  } else {
    alert("Slow down cowboy , you dont have enough cookies!");
  }
});

document.getElementById("Cookie Farm").addEventListener("click", function () {
  if (cookieCount >= cookieFarmPrice) {
    cookieCount -= cookieFarmPrice;

    cookiesPerSecond += 10;
  } else {
    alert("Slow down cowboy , you dont have enough cookies!");
  }
});

document.getElementById("Robot Baker").addEventListener("click", function () {
  if (cookieCount >= robotBakerPrice) {
    cookieCount -= robotBakerPrice;

    cookiesPerSecond += 20;
  } else {
    alert("Slow down cowboy , you dont have enough cookies!");
  }
});

document
  .getElementById("Cookie Factory")
  .addEventListener("click", function () {
    if (cookieCount >= cookieFactoryPrice) {
      cookieCount -= cookieFactoryPrice;

      cookiesPerSecond += 50;
    } else {
      alert("Slow down cowboy , you dont have enough cookies!");
    }
  });

document.getElementById("Magic Flower").addEventListener("click", function () {
  if (cookieCount >= magicFlowerPrice) {
    cookieCount -= magicFlowerPrice;

    cookiesPerSecond += 100;
  } else {
    alert("Slow down cowboy , you dont have enough cookies!");
  }
});

document.getElementById("Time Machine").addEventListener("click", function () {
  if (cookieCount >= timeMachinePrice) {
    cookieCount -= timeMachinePrice;

    cookiesPerSecond += 200;
  } else {
    alert("Slow down cowboy , you dont have enough cookies!");
  }
});

document.getElementById("Quantum Oven").addEventListener("click", function () {
  if (cookieCount >= quantumOvenPrice) {
    cookieCount -= quantumOvenPrice;

    cookiesPerSecond += 500;
  } else {
    alert("Slow down cowboy , you dont have enough cookies!");
  }
});

document
  .getElementById("Alien Technology")
  .addEventListener("click", function () {
    if (cookieCount >= alienTechnologyPrice) {
      cookieCount -= alienTechnologyPrice;

      cookiesPerSecond += 1000;
    } else {
      alert("Slow down cowboy , you dont have enough cookies!");
    }
  });

document
  .getElementById("Interdimensional Baker")
  .addEventListener("click", function () {
    if (cookieCount >= interdimensionalBakerPrice) {
      cookieCount -= interdimensionalBakerPrice;

      cookiesPerSecond += 2000;
    } else {
      alert("Slow down cowboy , you dont have enough cookies!");
    }
  });

if (cookieCount >= 1000000) {
  alert("WOW ,You are mega rich!");
}
