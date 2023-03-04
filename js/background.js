const imges = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
const bgimg = document.querySelector(".background");

const randomImg = imges[Math.floor(Math.random() * imges.length)];

const backgroundImage = `url(img/${randomImg})`;
bgimg.style.backgroundImage = backgroundImage;
