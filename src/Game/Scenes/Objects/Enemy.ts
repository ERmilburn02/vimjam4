import IScene from "@/Engine/IScene";
import { Sprite, Container, Graphics, Rectangle } from "pixi.js";

// TODO: Give a type in the constructor, and choose sprite and stats based on that

class Enemy extends Container implements IScene {
  assetBundles: string[] = ["shapes"];

  private sprite: Sprite = new Sprite();

  private hitAreaDebug: Graphics = new Graphics();
  private readonly showDebugCollider: boolean;

  constructor(showDebugCollider: boolean = false) {
    super();

    this.showDebugCollider = showDebugCollider;

    this.hitArea = new Rectangle(0, 0, 50, 50);
  }

  constructorWithAssets(): void {
    this.sprite = Sprite.from("circle");
    this.sprite.scale.set(50 / 1080);

    this.addChild(this.sprite);

    if (this.showDebugCollider) {
      this.addChild(this.hitAreaDebug);
    } else {
      this.hitAreaDebug.destroy();
    }
  }

  update(framesPassed: number): void {
    framesPassed;

    if (this.showDebugCollider) {
      this.hitAreaDebug.clear();
      this.hitAreaDebug.beginFill(0xff00ff, 0.5);
      let hitArea = this.hitArea as Rectangle;
      this.hitAreaDebug.drawRect(
        hitArea.x,
        hitArea.y,
        hitArea.width,
        hitArea.height
      );
      this.hitAreaDebug.endFill();
    }
  }

  cleanup(): void {}
}

export default Enemy;
