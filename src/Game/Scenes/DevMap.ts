import { Container, Graphics, Sprite } from "pixi.js";
import IScene from "@/Engine/IScene";
import Manager from "@/Engine/Manager";

class DevMap extends Container implements IScene {
  assetBundles: string[] = ["shapes"];

  background: Graphics = new Graphics();
  testSprite: Sprite = new Sprite();

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

    this.testSprite = Sprite.from("circle");
    this.testSprite.pivot.set(0.5);
    this.testSprite.anchor.set(0.5);
    this.testSprite.scale.set(0.1);
    this.testSprite.tint = 0xff0000;
    this.addChild(this.testSprite);
  }
  update(framesPassed: number): void {
    framesPassed;
  }
  cleanup(): void {
    this.removeChild(this.testSprite);
    this.testSprite.destroy();
  }
}

export default DevMap;
