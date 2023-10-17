import { animate } from "./modules/sketch.js";
import { navigate, closeProjetMore } from "./modules/events.js";
import { initMask } from "./modules/mask.js";
import "./modules/menu.js";

// Mask start
initMask();
animate();
navigate();
closeProjetMore();
