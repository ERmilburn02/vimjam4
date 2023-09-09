import { Container, Graphics, Rectangle } from "pixi.js";
import IScene from "@/Engine/IScene";
import Manager from "@/Engine/Manager";
import Enemy from "./Objects/Enemy";
import Path from "./Objects/Path";

class DevMap extends Container implements IScene {
  assetBundles: string[] = ["shapes"];

  background: Graphics = new Graphics();
  testSprite: Enemy = new Enemy(true);
  testPath: Path = new Path({ x: 400, y: 75 });

  constructorWithAssets(): void {
    this.createBackground();

    this.testPath.constructorWithAssets();
    this.testPath.position.set(
      0,
      Manager.height / 2 - (this.testPath.hitArea as Rectangle).height / 2
    );
    this.addChild(this.testPath);

    this.testSprite.constructorWithAssets();
    this.addChild(this.testSprite);
  }
  update(framesPassed: number): void {
    this.testSprite.update(framesPassed);
    this.testPath.update(framesPassed);
  }
  cleanup(): void {
    this.testSprite.cleanup();
    this.testPath.cleanup();
  }

  private createBackground(): void {
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
  }
}

export default DevMap;
