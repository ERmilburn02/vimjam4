import type { ResolverManifest } from "pixi.js";

const manifest: ResolverManifest = {
  bundles: [
    {
      name: "shapes",
      assets: {
        circle: "sprites/Circle.png",
        hexagon: "sprites/Hexagon.png",
        pentagon: "sprites/Pentagon.png",
        square: "sprites/Square.png",
        triangle: "sprites/Triangle.png",
      },
    },
  ],
};

export default manifest;
