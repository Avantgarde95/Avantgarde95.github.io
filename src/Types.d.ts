declare module "*.md";

declare module "marked-plaintext" {
  import type { Renderer as MarkedRenderer } from "marked";

  declare class Renderer extends MarkedRenderer {}

  export default Renderer;
}
