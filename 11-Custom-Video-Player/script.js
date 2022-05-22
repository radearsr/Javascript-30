const video = document.querySelector("video");
const progressWrapper = document.querySelector(".progress");
const progressFill = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const sliders = document.querySelectorAll(".player__slider");
const buttonSkips = document.querySelectorAll(".player__button");

const handlePlayPause = () => {
  if (video.paused) {
    toggle.textContent = "❚ ❚";
    video.play();
  } else {
    toggle.textContent = "►";
    video.pause();
  }
};

const handleTimeLineUpdate = () => {
  const progressValue = (video.currentTime / video.duration) * 100;
  progressFill.style.flexBasis = `${progressValue}%`;
};

const handleSkip = (event) => {
  video.currentTime += parseFloat(event.target.dataset.skip);
};

const handleSlider = (e) => {
  video[e.target.name] = e.target.value;

  const volIcon = document.querySelector("#vol");
  if (e.target.name == "volume" && e.target.value < 0.1) {
    volIcon.classList.remove("icon-vol");
    volIcon.classList.add("icon-mute");
  } else {
    volIcon.classList.remove("icon-mute");
    volIcon.classList.add("icon-vol");
  }
};

const handleProgressWrapper = (e) => {
  const currentProgress =
    (e.offsetX / progressWrapper.offsetWidth) * video.duration;

  video.currentTime = currentProgress;
};

video.addEventListener("click", handlePlayPause);
toggle.addEventListener("click", handlePlayPause);

video.addEventListener("timeupdate", handleTimeLineUpdate);

buttonSkips.forEach((btnSkip) => {
  btnSkip.addEventListener("click", handleSkip);
});

sliders.forEach((slider) => {
  slider.addEventListener("change", handleSlider);
  slider.addEventListener("mousemove", handleSlider);
});

progressWrapper.addEventListener("click", handleProgressWrapper);
