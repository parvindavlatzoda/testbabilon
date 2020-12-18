const arr = [
  "https://www.youtube.com/embed/obKHPIW_mqw?rel=0",
  "https://www.youtube.com/embed/hMPMUDydTtQ?rel=0",
  "https://www.youtube.com/embed/4R7e4XE0Q5c?rel=0",
];
let current = 0;
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");
const video = document.getElementById("videos");
const onClickPrev = () => {
  if (current > 0) {
    current = current - 1;
  } else current = arr.length - 1;
  changeLink();
};
const onClickNext = () => {
  if (current < arr.length - 1) {
    current = current + 1;
  } else current = 0;
  changeLink();
};
const changeLink = () => {
  video.src = arr[current];
};

nextButton.onclick = onClickNext;
prevButton.onclick = onClickPrev;

var btn = document.getElementById("lets");
var blockHidden = document.getElementById("hide-inputik");

function showBlock() {
  blockHidden.classList.add("inputik-show");
  blockHidden.style.display = "block";
}
function hideBlock() {
  blockHidden.style.display = "none";
}
btn.addEventListener("click", showBlock);
blockHidden.addEventListener("click", hideBlock);
