import Manager from "@/Engine/Manager";
import DefaultLoadingScreen from "@/Engine/Scenes/DefaultLoadingScene";

const canvas: HTMLCanvasElement = document.getElementById(
  "game-canvas"
) as HTMLCanvasElement;

Manager.initialize(1280, 720, 0x000000, canvas);
Manager.changeScene(new DefaultLoadingScreen());
