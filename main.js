"use strict";

const images = [
  { src: "img/photo1.png", description: "豊臣秀吉の物語です。" },
  { src: "img/photo2.png", description: "織田信長の靴磨きをしておりました。" },
  { src: "img/photo3.png", description: "彼は、武士となりました。" },
  { src: "img/photo4.png", description: "おねと結婚しました。" },
  { src: "img/photo5.png", description: "生涯を閉じました。" },
];

const image = document.createElement("img");
image.setAttribute("src", images[0].src);
image.setAttribute("alt", images[0].description);

const description = document.createElement("p");
description.textContent = image.alt;

let mainImage = document.getElementById("main_image");
mainImage.insertBefore(image, null);
mainImage.insertBefore(description, null);

const thumbnails = document.getElementById("thumbnails");
for (let i = 0; i < images.length; i++) {
  const thumbnailImage = document.createElement("img");
  thumbnailImage.setAttribute("src", images[i].src);
  thumbnailImage.setAttribute("alt", images[i].description);
  thumbnails.insertBefore(thumbnailImage, null);
}

thumbnails.addEventListener(
  "click",
  function (e) {
    if (e.target.src) {
      image.src = e.target.src;
      description.textContent = e.target.alt;
    }
  },
  false
);
