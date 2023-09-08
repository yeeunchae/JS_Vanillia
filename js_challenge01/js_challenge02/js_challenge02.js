const title = document.querySelector("h1");
const back = document.querySelector("body");

//function handleTitleClick() {}
function updateSize() {
  const backH = window.innerWidth;
  if (backH > 500) {
    back.style.backgroundColor = "yellow";
  } else if (backH > 300 && backH <= 500) {
    back.style.backgroundColor = "purple";
  } else {
    back.style.backgroundColor = "blue";
  }
}

//title.addEventListener("click", handleTitleClick);
window.addEventListener("resize", updateSize);