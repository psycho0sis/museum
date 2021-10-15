const player = document.querySelector(".video__slide-big");
const video = player.querySelector(".video__video");
const sliderDots = document.querySelectorAll(".swiper-pagination-bullet");
const startBtn = document.getElementById("startBtn");
const start = document.querySelector("#start");
const iframes = document.querySelectorAll("iframe");
const progressVideo = document.getElementById("progress");
const progressVideoVolume = document.querySelector("input.video__progress-volume")
const volumeBtn = document.getElementById("volume");
const pause = document.getElementById("pause");
const mute = document.querySelector(".video__player-btn--mute")

let theNum = "0";
let arr = ["video0", "video1", "video2", "video3", "video4"];
let arrPosters = ["poster0", "poster1", "poster2", "poster3", "poster4"];

let volume = video.volume;
video.ontimeupdate = progressUpdate;
progressVideo.onclick = videoRewind;

function go_to_right() {
  theNum++;
  
  if (theNum == arr.length && theNum == arrPosters.length) {
    theNum = "0";
  }
  video.src = "assets/video/" + arr[theNum] + ".mp4";
  video.poster = "assets/video/" + arrPosters[theNum] + ".jpeg";
  progressVideo.value = "0";
  changeIconToPlay();
};
function go_to_left() {
  theNum--;
 
  if (theNum == "-1") {
    theNum = arr.length - 1;
    theNum = arrPosters.length - 1;
  }
  video.src = "assets/video/" + arr[theNum] + ".mp4";
  video.poster = "assets/video/" + arrPosters[theNum] + ".jpeg";
  progressVideo.value = "0";
  changeIconToPlay();
};

function fullscreen() {
  if (!video.fullscreenElement) {
    video.requestFullscreen();
  } else {
    if (video.exitFullscreen) {
      video.exitFullscreen();
    }
  }
};
function changeIconToPause() {
  startBtn.style.display = "none";
  start.style.display = "none";
  pause.style.display = "block";
};
function changeIconToPlay() {
  startBtn.style.display = "block";
  start.style.display = "block";
  pause.style.display = "none";
};
function togglePlay() {
  if (video.paused) {
    video.play();
    changeIconToPause();
  } else {
    video.pause();
    changeIconToPlay();
  }
};
function volumeChange() {
  if (video.volume !== 0) {
    video.volume = 0;
    volumeBtn.style.display = "none";
    mute.style.display = "block";
  } else {
    video.volume = volume;
    volumeBtn.style.display = "block";
    mute.style.display = "none";
  }
};
function hundleRangeUpdate() {
  video[this.name] == this.value;
  volume = this.value / 100;
};
function progressUpdate() {
  const value = progressVideo.value;
  let duration = video.duration;
  let current = video.currentTime;
  progressVideo.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, #C4C4C4 100%)`;
  progressVideo.value = (100 * current) / duration;
  if (progressVideo.value === "100") {
    changeIconToPlay();
  }
};
function videoRewind(event) {
  let progressWidth = this.offsetWidth;
  let currentPosition = event.offsetX;
  video.value = (100 * currentPosition) / progressWidth;
  startBtn.style.display = "none";
  video.pause();
  video.currentTime = video.duration * (currentPosition / progressWidth);
  video.play();
};
window.onscroll = function() {
  if (document.documentElement.scrollTop > 2500 && document.documentElement.scrollTop  < 3700) {
    video.classList.add("active");
  } else {
    video.classList.remove("active");
  }   
};

  document.addEventListener("keydown", (event) => {
    if (event.code == "Space" && video.classList.contains("active")) {
      event.preventDefault();
    togglePlay();
  }
  });
  document.addEventListener("keydown", (event) => {
    if (event.code == "KeyF" && video.classList.contains("active")) {
      fullscreen();
    }
  });
  document.addEventListener("keydown", (event) => {
    if (event.code == "KeyM" && video.classList.contains("active")) {
      volumeChange();
    }
  });

let tabIsPressed = false;

document.addEventListener("keydown", (event) => {
  if (event.code === "Comma" && video.classList.contains("active")) {
    video.playbackRate += 0.5;
    tabIsPressed = true;
    event.preventDefault();
  }
});
document.addEventListener("keyup", (event) => {
if (event.code === "Comma" && video.classList.contains("active")) {
  video.playbackRate += 0.5;
  tabIsPressed = false;
  event.preventDefault();
}
});

document.addEventListener("keydown", (event) => {
  if (tabIsPressed  &&  event.shiftKey && video.classList.contains("active")) {
    video.playbackRate += 0.5;
    event.preventDefault();
    return;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Period" && video.classList.contains("active")) {
    video.playbackRate -= 0.5;
    tabIsPressed = true;
    event.preventDefault();
  }
});
document.addEventListener("keyup", (event) => {
if (event.code === "Period" && video.classList.contains("active")) {
  video.playbackRate -= 0.5;
  tabIsPressed = false;
  event.preventDefault();
}
});

document.addEventListener("keydown", (event) => {
  if (tabIsPressed  &&  event.shiftKey && video.classList.contains("active")) {
    video.playbackRate -= 0.5;
    event.preventDefault();
    return;
  }
});

volumeBtn.addEventListener("click", volumeChange);
mute.addEventListener("click", volumeChange);
video.addEventListener("click", togglePlay);
startBtn.addEventListener("click", togglePlay);
start.addEventListener("click", togglePlay);
pause.addEventListener("click", togglePlay);
progressVideoVolume.addEventListener("input", function () {
  const value = this.value;
  video.volume = this.value / 100;
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, #C4C4C4 100%)`;
});
progressVideoVolume.addEventListener("change", hundleRangeUpdate);
progressVideoVolume.addEventListener("mousemove", hundleRangeUpdate);

const swiper = new Swiper(".video__litle-slider", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 2,
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: ".video__arrow-next",
    prevEl: ".video__arrow-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 42
    }
  }
});
