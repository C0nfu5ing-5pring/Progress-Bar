let btn = document.getElementById("download-button");
let gBar = document.getElementById("bar-green");
let points = document.getElementById("point");
let point = 0;

let time = Math.floor(Math.random() * 16) + 5;
console.log(time);
btn.addEventListener("click", () => {
  let int = setInterval(() => {
    point++;
    points.textContent = point + "%";
    gBar.style.width = point + "%";
  }, time * 10);

  setTimeout(() => {
    btn.textContent = "Downloaded";
    btn.style.opacity = 0.8;
    clearInterval(int);
  }, time * 1000);
});
