
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as transitions from "vuetify/components/transitions";
import "@mdi/font/css/materialdesignicons.css";

export default createVuetify({
  components,
  directives,
  transitions,
  theme: {
    defaultTheme: "dark",
  },
});
