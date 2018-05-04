chrome.browserAction.onClicked.addListener(function() {

  //another way to create UI: window.open() or chrome.app.window.create(
  chrome.tabs.create({url: 'index.html'});
  // chrome.tabs.create({url: 'http://localhost:3000/'});

});

// it seems to be a chrome app's API
// chrome.app.runtime.onLaunched.addListener(function() {
//   chrome.app.window.create('index.html',
//     { "innerBounds": { "width": 400, "height": 300 },
//       "id": "index"
//     });
// });
