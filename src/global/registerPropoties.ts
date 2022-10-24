import { App } from "vue";
import { formatUtcString } from "@/utils/dateFormat";
export function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log("foo");
    },
    formatTime(value: string) {
      return formatUtcString(value);
    },
  };
}
