/**
 * Create the Controller to run the application.
 */
function domContentLoaded() {
  new controller();
}
if (document.readyState === "loading") {
  document.addEventListener('DOMContentLoaded', function () {
    domContentLoaded();
  });
} else {
  domContentLoaded();
}