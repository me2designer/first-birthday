import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#wrap");

/* SCSS */
import "./assets/scss/import.scss";
import "./assets/fonts/NanumSquare/NanumSquare.css"; // NanumSquare
import "./assets/fonts/Jost/Jost.css"; // Jost

/* Lib */
require("./assets/js/libs/swiper/swiper@7.3.2.min.css");
window.Swiper = require("./assets/js/libs/swiper/swiper@7.3.2.min.js");

/* config */
import "./assets/js/config/files.js";

/* utils */
import "./assets/js/utils/utils";
import "./assets/js/utils/public";

/* plugins */
import "./assets/js/plugins/jquery";
import "./assets/js/plugins/public";
