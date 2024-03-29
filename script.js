//Initialization function
document.addEventListener('DOMContentLoaded', function() {
	//Add event to search on click the button
	document.getElementById('search').addEventListener('click', function(){
		wowTranslate.translate();
	});
	//Add event to search on press enter
	document.getElementById('input').addEventListener('keypress', function(event){
		if(event.keyCode == 13){
			wowTranslate.translate();
		}
	});
	//Add translated names in results page
	
});

//Receives messages from background.js
chrome.runtime.onMessage.addListener(function(text, sender) {
		document.getElementById('input').value = text;
		wowTranslate.translate();
});

var wowTranstateItem = {
	id : Number,
	pt_BR : String,
	en_US : String
}

var wowTranslate = {
	//Language of search input
	langIn : "",
	//Language of search output
	lanOut : "",

	//Object of search and api URLs
	getURL : {
		search : function(lang, item) {
			switch(lang) {
				case "pt_BR":
					return "http://us.battle.net/wow/pt/search?f=wowitem&q=" + item[lang];
					break;
			}
		},
		api : function(lang, item) {
			switch(lang) {
				case 'pt_BR':
					return "http://us.battle.net/api/wow/item/" + item.id + "?locale=" + lang;
					break;
			}
		},
		//Ajax function to search in Blizzard page
		queryWoWSearch : function() {

		},
		//Ajax function to query in Blizzard API
		queryWoWAPI : function() {

		},
	},
	translate : function(){
		console.log("postado!");
	}
}