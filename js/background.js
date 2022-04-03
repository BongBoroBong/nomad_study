const images = [
    "page1.svg",
    "page2.svg",
    "page3.svg",
    "page4.svg",
    "page5.svg",
]

const todayImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

console.log(bgImage);

console.log(todayImage);

bgImage.src =`img/${todayImage}`;

document.body.appendChild(bgImage);
