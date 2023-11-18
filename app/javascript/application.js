/* eslint no-console:0 */

import "core-js/stable";
import Rails from "rails-ujs";
import "@hotwired/turbo-rails";
import "./channels/init.js";
import "./firebase.js";
import "./menu.js";
import "./disciplines.js";
import SentryConfig from "./sentryConfig.svelte";

Rails.start();

const sentryConfig = new SentryConfig({
  target: document.getElementById("sentryContainer"),
});
console.log("Theoretically, everything should be working");
