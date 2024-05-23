const images = ["01.jpg", "02.jpg", "03.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
// createElement은 javascript에서 html을 만드는것.

bgImage.src = `img/${chosenImage}`;
//src는 source.

document.body.appendChild(bgImage);
//apendChild는 html 맨 아래 ()내용을 만들게 된다.
//prependChild는 html 맨 위에 ()내용을 만들게 된다.
