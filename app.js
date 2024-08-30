let cookieCount = 0;
let cookiesPerSecond = 1;

const cookieCountDisplay = document.getElementById("cookieCount");
const cookiesPerSecondDisplay = document.getElementById("cookiesPerSecond");
const cookieButton = document.getElementById("cookieButton");
const shopDisplay = document.getElementById("shop");

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
