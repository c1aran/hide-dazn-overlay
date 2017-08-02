/* Toggle class */
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  var overlay = $('.BackgroundLayer .BackgroundMetadata');
  if ("toggle" in message) {
    overlay.toggleClass('active');
  }
});