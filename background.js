//Instalation Config
chrome.runtime.onInstalled.addListener(function(details) {
	if(details.reason) {
		//Save defout configuration
		var configs = {
			omnibox : true,
			langIn : "en_US",
			langOut : "pt_BR"
		};
	};
});
//Omnibox
chrome.omnibox.onInputEntered.addListener(function(text) {
	chrome.tabs.update({
		"url" : "results.html"
	}, function(tab) {
		chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
			if(changeInfo.status == "complete") {
				chrome.tabs.sendMessage(tabId, text);
			}
		});
	});
});
//Contex menu
var menu = chrome.contextMenus.create({
	type : "normal",
	title : chrome.i18n.getMessage("context_menu_title"),
	contexts : ["selection"],
	id : "22"
}, function() {
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
	chrome.tabs.create({
		"url" : "results.html"
	}, function(tab) {
		chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
			if(changeInfo.status == "complete") {
				chrome.tabs.sendMessage(tabId, info.selectionText);
			}
		});
	});
});