import Manager from "@/Engine/Manager";
// import DefaultLoadingScreen from "@/Engine/Scenes/DefaultLoadingScene";
import DevMap from "@/Game/Scenes/DevMap";

const div: HTMLElement | null = document.getElementById("game-content");

const button = document.createElement("button");
button.innerText = "Start";
button.style.border = "none";
button.style.width = "10em";
button.style.height = "3em";
button.style.fontSize = "2em";
div?.appendChild(button);

const buttonEvent = () => {
  div?.removeChild(button);
  button.removeEventListener("click", buttonEvent);

  const canvas = document.createElement("canvas");
  div?.appendChild(canvas);

  Manager.initialize(1280, 720, 0x000000, canvas);
  Manager.changeScene(new DevMap());
};

button.addEventListener("click", buttonEvent);
