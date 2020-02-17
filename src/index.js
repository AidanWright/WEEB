import logMessage from "./js/logger";
import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Log message to console
logMessage("Its finished!!");

if (module.hot) // eslint-disable-line no-undef
  module.hot.accept(); // eslint-disable-line no-undef
