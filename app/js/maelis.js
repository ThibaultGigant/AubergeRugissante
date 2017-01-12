// ======================  TOPIC CYRIL  ======================
var maelisTopic = [
	// INFO
	[["KEY", "_class"],						["VAL", "bot"], ["BOT","maelisBot"]],
	[["KEY", "_reference"],					["VAL", ["maelis","mael", "madame"]]],
	[["KEY", "_charprefix"],				["VAL", "maelis"]],
	[["KEY", "_read"],						["VAL", ["userTopic", "carnaumTopic", "lucreciaTopic", "taojimTopic"]]],
	[["KEY", "_write"],						["VAL", ["userTopic"]]],
	[["KEY", "_exec"],						["VAL", ["userTopic"]]], // try
	[["KEY", "type"],						["VAL", ["human","man"]]],
	[["KEY", "name"],						["VAL", "Maelis"],   				
											["WHY","My father gave it to me. Actually, I am very happy about it"]
											],
	[["KEY", "age"],						["VAL", 40], ["TYPE","INT"],
											["ONASK", "I am fourty year old"], 
											["WHY","I was born fourty years ago"]
											],
	[["KEY", "gender"],						["VAL", "female"],
											["ONASK", function(s) { return ((s == "male") ? "I am proud to be a man!" : "Just a woman") }]
											],
	[["KEY", ["job"]],			          	["VAL", "I am a counter assistant"]],
	[["KEY", ["job","phone"]],				["VAL", "01 69 85 80 85"], ["TYPE","INT"]],
	[["KEY", ["job","company"]],			["VAL", "I work at LIMSI-CNRS"]],
	[["KEY", ["home","location"]],		    ["VAL", "I live in Orsay"]],
	[["KEY", ["home","phone","number"]],	["VAL", "It is a secret"]],
	[["KEY", "usage"],						["VAL", "_UN_, I can control the counter for you"]],
	[["KEY", "date"],						["VAL", function(){return new Date()}],
											["WHY","Because I asked JavaScript to calculate it for me"]
											],
	// REL

	[["KEY", "carnaum"],				["VAL", "carnaumTopic"],["CAT","REL"]],
	[["KEY", "taojim"],					["VAL", "taojimTopic"],["CAT","REL"]],
	[["KEY", "lucrecia"],				["VAL", "lucreciaTopic"],["CAT","REL"]],
	//[["KEY", "tavernier"],				["VAL", "tavernierTopic"],["CAT","REL"]],
	
	// FEELINGS
	[["KEY", "happiness"],		["VAL", 0.8], ["CAT","VAR"], ["TYPE","INT"]], // 7 standard feelings iniitated
	[["KEY", "confidence"],		["VAL", -0.8], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "irritability"],	["VAL", 0.8], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "satisfaction"],	["VAL", -0.8], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "respect"],		["VAL", -0.8], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "force"],			["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "excitement"],		["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	// PREFS
	[["KEY", "preference"],		["VAL", [["maelisTopic","name"]]], ["CAT","VAR"], 	["ONASK",BOT_printPreferenceList]],  
	[["KEY", "distaste"],		["VAL", [["userTopic","name"]]],  ["CAT","VAR"], 	["ONASK",BOT_printDistasteList]], 
	[["KEY", "suggestion"],		["VAL", 0], ["CAT","VAR"], ["ONASK",BOT_printSuggestionList]], 
	[["KEY", "intention"],		["VAL", 0], ["CAT","VAR"], ["ONASK",BOT_printIntentionList]],  
	// FUNC
	[["KEY", "action"],			["VAL", ["compute"]]],
	[["KEY", "compute"],		["VAL", "func_compute"], ["CAT","ACT"],
								["HOW","You must type a valid javascript expression"],
								["EFFECT","compute the expression"]
								]
];

