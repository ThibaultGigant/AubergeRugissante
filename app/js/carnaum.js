// ======================  TOPIC CYRIL  ======================
var carnaumTopic = [
	// INFO
	[["KEY", "_class"],						["VAL", "bot"], ["BOT","carnaumBot"]],
	[["KEY", "_reference"],					["VAL", ["carnaum","carna"]] ],
	[["KEY", "_charprefix"],				["VAL", "carnaum"]],
	[["KEY", "_read"],						["VAL", ["userTopic", "maelisTopic", "lucreciaTopic", "taojimTopic"]]],
	[["KEY", "_write"],						["VAL", ["userTopic"]]],
	[["KEY", "_exec"],						["VAL", ["userTopic"]]], // try
	[["KEY", "type"],						["VAL", ["Humain aux dents lisses","Humain"]]],
	[["KEY", "name"],						["VAL", "Carnaum"],   				
											["ONASK","Je m'appelle Carnaum ! Tu peux te le tatouer sur la peau, si tu veux devenir plus populaire"]
											],
	[["KEY", "age"],						["VAL", "?"],
											["ONASK", onAskAgeCarnaum], 
											["WHY","I was born thirty years ago"]
											],
	[["KEY", "gender"],						["VAL", "male"],
											["ONASK", function(s) { return ((s == "male") ? "I am proud to be a man!" : "Just a woman") }]
											],

	// Arme
	[["KEY", "arme"],						["VAL",		"Cimeterre"],
											["ONASK",	onAskArmeCarnaum],
											["WHY",		onWhyArmeCarnaum]
											],

	[["KEY", "armetmm"]						["VAL",0],["ONASK", onAskArmeCarnaum]],
											//],


	// Tell me more
	[["KEY", "TMM"],						["VAL", tellMeMoreCarnaum]],

	// REL
	[["KEY", "maelis"],					["VAL", "maelisTopic"],["CAT","REL"]],
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
	[["KEY", "preference"],		["VAL", [["carnaumTopic","name"]]], ["CAT","VAR"], 	["ONASK",BOT_printPreferenceList]],  
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
var nbAskArmeCarnaum = 0;
var onWhyArmeCarnaum = 0;
var drunkSteps = [10,7,4];
var drunkThresholdCarnaum = 10;


//BOT_theLastAttribute

//==================== Functions ==================//
function onAskAgeCarnaum()
{
	lastAsk = "";
	nbAskAgeCarnaum++;

	if (drunkThresholdCarnaum >= drunkSteps[1])
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
	else if (drunkThresholdCarnaum >= drunkSteps[2])
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
	else if (drunkThresholdCarnaum > 0)
	{
		return "Mon age tourbillonne comme le fond de mon verre...";
	}
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function onAskArmeCarnaum() {
	lastAsk = "arme";
	nbAskArmeCarnaum++;

	if (drunkThresholdCarnaum >= drunkSteps[1])
	{
		if (nbAskArmeCarnaum < 3)
		{
			return "Regarde moi donc cette lame, j'ai un joli cimeterre.";
		}
		else if (nbAskArmeCarnaum >= 3)
		{
			return  "Ca me flatte tu sais. Mais faudrait arreter de demander, ce truc c'est un cimeterre.";
		}
	}
	else if (drunkThresholdCarnaum >= drunkSteps[2])
	{
		liste = ["Ca coupe ! Quand on force...", "Un ci me terre... Qui coupe... Une petite rasade en plus ?", "Gardons la tete sur les épaules, quand ca roule, ca bouleverse..."];
		var card = Math.floor(Math.random() * liste.length);
		return liste[card];
	}
	else if (drunkThresholdCarnaum > 0)
	{
		return "Avec le temps, elle s'est émoussée... comme mon verre...";
	}
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function onWhyArmeCarnaum() {
	nbWhyArmeCarnaum++;

	if (drunkThresholdCarnaum >= drunkSteps[1])
	{
		if (nbWhyArmeCarnaum < 3)
		{
			return "Je manie l'épée comme personne ! Autant entièrement reposer sa conviance son la lame de mon cimeterre";
		}
		else if (nbWhyArmeCarnaum >= 3)
		{
			return  "Dans la vie, faut faire des choix, et moi, le voilà.";
		}
	}
	else if (drunkThresholdCarnaum >= drunkSteps[2])
	{
		liste = ["Parlons plutot d'autre chose", "Tu voudrais partir faire une quete avec moi ?"];
		var card = Math.floor(Math.random() * liste.length);
		return liste[card];
	}
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function tellMeMoreCarnaum() {
	switch(BOT_theLastAttribute)
	{
		case "arme":
			return tellMeMoreArmeCarnaum();
	}
}

function tellMeMoreArmeCarnaum() {
	
}