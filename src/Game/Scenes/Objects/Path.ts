import IScene from "@/Engine/IScene";
import { Container, Graphics, IPointData, Rectangle, Sprite } from "pixi.js";

class Path extends Container implements IScene {
  assetBundles: string[] = ["shapes"];

  private sprite: Sprite = new Sprite();

  private readonly showDebugCollider: boolean;
  private hitAreaDebug = new Graphics();

  constructor(size: IPointData, showDebugCollider: boolean = false) {
    super();

    this.showDebugCollider = showDebugCollider;

    this.hitArea = new Rectangle(0, 0, size.x, size.y);
  }

  constructorWithAssets(): void {
    this.sprite = Sprite.from("square");
    this.sprite.tint = 0x654321;
    let hitArea = this.hitArea as Rectangle;
    this.sprite.scale.set(hitArea.width / 1080, hitArea.height / 1080);
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

export default Path;
