import { App } from "vue";
import { registerProperties } from "./registerPropoties";
import registerElement from "./registerElement";
export function registerApp(app: App): void {
  // app.use(registerElement)
  app.use(registerProperties);
}
