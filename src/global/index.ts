import { App } from "vue";

import registerElement from "./registerElement";
export function registerApp(app: App): void {
  registerElement(app);
}
