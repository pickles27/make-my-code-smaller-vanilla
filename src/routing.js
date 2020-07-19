import Route from "./lib/route.js";
import Router from "./lib/router.js";

const router = new Router([
  new Route("home", "home.html", true),
  new Route("submission", "submission.html")
]);
