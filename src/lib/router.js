export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.rootElem = document.querySelector("#app");
    this.init();
  }

  hasChanged = routes => {
    if (window.location.hash.length > 0) {
      for (const route of routes) {
        if (route.isActiveRoute(window.location.hash.substr(1))) {
          this.goToRoute(route.htmlName);
          break;
        }
      }
    } else {
      for (const route of routes) {
        if (route.default) {
          this.goToRoute(route.htmlName);
          break;
        }
      }
    }
  };

  goToRoute = htmlName => {
    (function(scope) {
      const url = "views/" + htmlName;
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          scope.rootElem.innerHTML = this.responseText;
        }
      };
      xhttp.open("GET", url, true);
      xhttp.send();
    })(this);
  };

  init = () => {
    const routes = this.routes;
    window.addEventListener("hashchange", e => {
      this.hasChanged(routes);
    });
    this.hasChanged(routes);
  };
}
