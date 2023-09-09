import { Container, Graphics } from "pixi.js";
import IScene from "@/Engine/IScene";
import Manager from "@/Engine/Manager";
import Enemy from "./Objects/Enemy";

class DevMap extends Container implements IScene {
  assetBundles: string[] = ["shapes"];

  background: Graphics = new Graphics();
  testSprite: Enemy = new Enemy(true);

  constructorWithAssets(): void {
    this.background = new Graphics();
    this.background.width = Manager.width;
    this.background.height = Manager.height;
    this.background
      .beginFill(0xfff, 1)
      .drawRect(0, 0, Manager.width, Manager.height)
      .endFill();
    this.background.position.set(0);
    this.background.pivot.set(0);
    this.background.eventMode = "dynamic";
    this.background.onpointermove = (event) => {
      this.testSprite.position.set(event.globalX, event.globalY);
    };
    this.addChild(this.background);

    this.testSprite.constructorWithAssets();
    this.addChild(this.testSprite);
  }
  update(framesPassed: number): void {
    this.testSprite.update(framesPassed);
  }
  cleanup(): void {
    this.removeChild(this.testSprite);
    this.testSprite.cleanup();
    this.testSprite.destroy();
  }
}

export default DevMap;
