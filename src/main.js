import "./style.scss";

const countDownTimer = document.querySelector(".countdown");
const countDownDate = new Date(new Date().getTime() + 9.58 * 60000);

const countDown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countDownTimer.innerHTML = `${minutes}:${seconds}`;

  if (distance < 0) {
    clearInterval(countDown);
    countDownTimer.innerHTML = "EXPIRED";
  }
}, 1000);
