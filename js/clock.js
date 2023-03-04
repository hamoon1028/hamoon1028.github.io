const clockDiv = document.querySelector("#clock");

function handleclock() {
  const d = new Date();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const second = d.getSeconds();
  let hourStr = `${hour < 10 ? `0${hour}` : hour}`;
  hourStr = `${hour > 12 ? hour - 12 : hour}`;
  const minuteStr = `${minute < 10 ? `0${minute}` : minute}`;

  const secondStr = `${second < 10 ? `0${second}` : second}`;

  clockDiv.innerText = `${hourStr}:${minuteStr}:${secondStr}`;
}
handleclock();
setInterval(handleclock, 1000);
