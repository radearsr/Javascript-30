const keys = document.querySelectorAll(".key");

const playSound = (audioName) => {
  const extention = ".wav";
  let audio;

  switch (audioName) {
    case "clap":
      audio = new Audio(`sounds/${audioName}${extention}`);
      audio.play();
      break;

    case "hihat":
      audio = new Audio(`sounds/${audioName}${extention}`);
      audio.play();
      break;

    case "kick":
      audio = new Audio(`sounds/${audioName}${extention}`);
      audio.play();
      break;

    case "openhat":
      audio = new Audio(`sounds/${audioName}${extention}`);
      audio.play();
      break;

    case "boom":
      audio = new Audio(`sounds/${audioName}${extention}`);
      audio.play();
      break;

    case "ride":
      audio = new Audio(`sounds/${audioName}${extention}`);
      audio.play();
      break;

    case "snare":
      audio = new Audio(`sounds/${audioName}${extention}`);
      audio.play();
      break;

    case "tom":
      audio = new Audio(`sounds/${audioName}${extention}`);
      audio.play();
      break;

    case "tink":
      audio = new Audio(`sounds/${audioName}${extention}`);
      audio.play();
      break;

    default:
      console.log("Something Error");
      break;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  keys.forEach((key) => {
    key.addEventListener("click", () => {
      const keyValue = key.lastElementChild.textContent;
      key.classList.add("clicked");
      playSound(keyValue);

      setTimeout(() => {
        key.classList.remove("clicked");
      }, 200);
    });
  });
});
