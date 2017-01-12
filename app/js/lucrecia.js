// ======================  TOPIC CYRIL  ======================
var lucreciaTopic = [
	// INFO
	[["KEY", "_class"],						["VAL", "bot"], ["BOT","lucreciaBot"]],
	[["KEY", "_reference"],					["VAL", ["lucrecia","lucress"]]],
	[["KEY", "_charprefix"],				["VAL", "lucrecia"]],
	[["KEY", "_read"],						["VAL", ["userTopic", "maelisTopic", "carnaumTopic", "taojimTopic"]]],
	[["KEY", "_write"],						["VAL", ["userTopic"]]],
	[["KEY", "_exec"],						["VAL", ["userTopic"]]], // try
	[["KEY", "type"],						["VAL", ["Humain aux dents lisses","Humain"]]],
	[["KEY", "name"],						["VAL", "Lucrecia"],   				
											["ONASK","Je m'appelle Lucrecia ! Tu peux te le tatouer sur la peau, si tu veux devenir plus populaire"]
											],
	[["KEY", "age"],						["VAL", "?"],
											["ONASK", onAskAgeCarnaum], 
											["WHY","I was born thirty years ago"]
											],
	[["KEY", "gender"],						["VAL", "male"],
											["ONASK", function(s) { return ((s == "male") ? "I am proud to be a man!" : "Just a woman") }]
											],
	// REL
	[["KEY", "maelis"],					["VAL", "maelisTopic"],["CAT","REL"]],
	[["KEY", "taojim"],					["VAL", "taojimTopic"],["CAT","REL"]],
	[["KEY", "carnaum"],				["VAL", "carnaumTopic"],["CAT","REL"]],
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
	[["KEY", "preference"],		["VAL", [["lucreciaTopic","name"]]], ["CAT","VAR"], 	["ONASK",BOT_printPreferenceList]],  
	[["KEY", "distaste"],		["VAL", [["maelisTopic","name"]]],  ["CAT","VAR"], 	["ONASK",BOT_printDistasteList]], 
	[["KEY", "suggestion"],		["VAL", 0], ["CAT","VAR"], ["ONASK",BOT_printSuggestionList]], 
	[["KEY", "intention"],		["VAL", 0], ["CAT","VAR"], ["ONASK",BOT_printIntentionList]],  
	// FUNC
	[["KEY", "action"],			["VAL", ["compute"]]],
	[["KEY", "compute"],		["VAL", "func_compute"], ["CAT","ACT"],
								["HOW","You must type a valid javascript expression"],
								["EFFECT","compute the expression"]
								]
];

// ===================== Variables =====================//
var nbAskAgeCarnaum = 0;
var drunkThresholdCarnaum = 10;


//==================== Functions ==================//
function onAskAgeCarnaum()
{
	nbAskAgeCarnaum++;

	if (drunkThresholdCarnaum >= 7)
	{
		if (nbAskAgeCarnaum < 3)
		{
			return "Mêle toi de tes affaires";
		}
		else if (nbAskAgeCarnaum >= 3)
		{
			return  "Tu vas me laisser tranquille espèce de larve";
		}
	}
	else if (drunkThresholdCarnaum >= 4)
	{
		if (nbAskAgeCarnaum < 2)
		{
			return "Je te le dis si tu me payes une autre pinte camarade !";
		}
		else if (nbAskAgeCarnaum >= 2)
		{
			return  "Une autre pinte d'abord, j'ai dit !!!";
		}
	}
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}