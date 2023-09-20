const contadorDOM = document.querySelector(".contador__time");

const date = "17 Jan 2024";

const contador = setInterval(() => {
  const correntDate = new Date();
  const eventDate = new Date(date);

  const totalSeconds = (eventDate - correntDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  //   console.log(days, hours, minutes, seconds);

  contadorDOM.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
}, 1000);
