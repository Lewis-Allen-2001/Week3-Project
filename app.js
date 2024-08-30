let cookieCount = 0;
let cookiesPerSecond = 1;

const cookieCountDisplay = document.getElementById("cookieCount");
const cookiesPerSecondDisplay = document.getElementById("cookiesPerSecond");
const cookieButton = document.getElementById("cookieButton");

cookieButton.addEventListener("click", function () {
  cookieCount++;
  updateUI();
});

function updateUI() {
  cookieCountDisplay.innerText = cookieCount;
  cookiesPerSecondDisplay.innerText = cookiesPerSecond;
}

function update() {
  cookieCount += cookiesPerSecond;
  console.log(cookieCount);
  updateUI();
}

setInterval(update, 1000);
