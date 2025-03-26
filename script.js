let btn = document.getElementById("download-button");
let gBar = document.getElementById("bar-green");
let points = document.getElementById("point");

let point = 0;
let int = null;

btn.addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }

  point = 0;
  gBar.style.width = "0%";
  points.textContent = "0%";
  btn.textContent = "Downloading...";

  let time = Math.floor(Math.random() * 16) + 5;
  console.log("Download time:", time, "seconds");

  int = setInterval(() => {
    if (point >= 100) {
      clearInterval(int);
      int = null;
      btn.textContent = "Downloaded";
      btn.style.opacity = 0.8;
    } else {
      point++;
      points.textContent = point + "%";
      gBar.style.width = point + "%";
    }
  }, time * 10);
});
