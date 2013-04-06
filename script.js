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
		search : function(lang,item){
			switch(lang){
				case "pt_BR":
				return "http://us.battle.net/wow/pt/search?f=wowitem&q="+item[lang];
				break;
			}
		},
		api : function(lang,item){
			switch(lang){
				case 'pt_BR':
					return "http://us.battle.net/api/wow/item/"+item.id+"?locale="+lang;
					break;
			}
		},

		//Ajax function to search in Blizzard page
		queryWoWSearch : function() {

		},
		//Ajax function to query in Blizzard API
		queryWoWAPI : function() {

		},
	}

}