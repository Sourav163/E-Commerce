let dot = document.getElementById("dot");
let navbarItems = document.getElementById("navbarItems");
let closeBtn = document.getElementById("close");

if (dot) {
  dot.addEventListener("click", () => {
    navbarItems.classList.add("active");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navbarItems.classList.remove("active");
  });
}

let largeImg = document.getElementById("largeImg");
let smallImg = document.getElementsByClassName("smallImg");

for (let i = 0; i < smallImg.length; i++) {
  smallImg[i].onclick = function () {
    largeImg.src = smallImg[i].src;
  };
}
