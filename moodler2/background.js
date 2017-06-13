chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.ib, {
		file: 'jquery-3.1.1.min.js'
	});
	
	chrome.tabs.executeScript(tab.ib, {
		file: 'jquery-ui.min.js'
	});
	
	chrome.tabs.executeScript(tab.ib, {
		file: 'moodler2.js'
	});
});