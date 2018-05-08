chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.create({url: 'https://searchgithub.herokuapp.com/'});
});
