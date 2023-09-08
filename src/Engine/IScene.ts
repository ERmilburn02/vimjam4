import { DisplayObject } from "pixi.js";

interface IScene extends DisplayObject {
  assetBundles: string[];
  constructorWithAssets(): void;
  update(framesPassed: number): void;
  cleanup(): void;
}

export default IScene;
