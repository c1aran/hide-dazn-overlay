/* Show extension icon on dazn.com */
function showPageAction(tabID, changeInfo, tab){
	if (tab.url.indexOf('dazn.com') > -1) {
		chrome.pageAction.show(tabID);
	}
}
chrome.tabs.onUpdated.addListener(showPageAction);

/* Toggle icon */
function toggleIcon(state, tab){
  chrome.pageAction.setIcon({path: state ? "off.png" : "on.png", tabId:tab.id});
}

/* Control toggling */
var toggle = {};
chrome.pageAction.onClicked.addListener(function(tab) {
  var state = !toggle[tab.id];
  toggleIcon(state, tab);
  chrome.tabs.sendMessage(tab.id, {toggle: state}); // Send message to toggle class
  toggle[tab.id] = state;
});