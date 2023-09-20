const contadorDOM = document.querySelector(".contador__time");

const date = "17 Jan 2024";

const contador = setInterval(() => {
  const correntDate = new Date();
  const eventDate = new Date(date);

  const totalSeconds = (eventDate - correntDate) / 1000;

  if (totalSeconds > 0) {
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    contadorDOM.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
  } else {
    contadorDOM.innerHTML = `Só no próximo ano!`;
  }
}, 1000);
