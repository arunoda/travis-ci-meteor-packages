var page = require('webpage').create();
var system = require('system');
var platform = system.args[1] || "local";
page.onConsoleMessage = function (message) {
  console.log(message);
};
console.log(system.env.URL + platform);
page.open(system.env.URL + platform);
setInterval(function () {
  var done = page.evaluate(function () {
    return typeof DONE !== 'undefined' && DONE;
  });
  if (done) {
    var failures = page.evaluate(function () {
      if (typeof FAILURES === 'undefined') {
        return 1;
      }
      return FAILURES;
    });
    phantom.exit(failures ? 1 : 0);
  }
}, 500);