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
											["ONWHY",	"Dans la vie, faut faire des choix, et moi, le voilà."]
											],
	// armure
	[["KEY", "defense"],					["VAL",		"Cotte de maille"],
											["ONASK",	onAskArmureCarnaum]
											],

	// magie
	[["KEY", "magie"],						["VAL",		"Chute extrême"],
											["ONASK",	onAskMagieCarnaum]
											],





	// Tell me more
	[["KEY", "TMM"],						["VAL", tellMeMoreCarnaum]],

	// REL
	[["KEY", "maelis"],						["VAL", "maelisTopic"],["CAT","REL"]],
	[["KEY", "taojim"],						["VAL", "taojimTopic"],["CAT","REL"]],
	[["KEY", "lucrecia"],					["VAL", "lucreciaTopic"],["CAT","REL"]],
	//[["KEY", "tavernier"],				["VAL", "tavernierTopic"],["CAT","REL"]],
	// FEELINGS
	[["KEY", "happiness"],					["VAL", 0.8], ["CAT","VAR"], ["TYPE","INT"]], // 7 standard feelings iniitated
	[["KEY", "confidence"],					["VAL", -0.8], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "irritability"],				["VAL", 0.8], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "satisfaction"],				["VAL", -0.8], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "respect"],					["VAL", -0.8], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "force"],						["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "excitement"],					["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	// PREFS
	[["KEY", "preference"],					["VAL", [["carnaumTopic","name"]]], ["CAT","VAR"], 	["ONASK",BOT_printPreferenceList]],  
	[["KEY", "distaste"],					["VAL", [["maelisTopic","name"]]],  ["CAT","VAR"], 	["ONASK",BOT_printDistasteList]], 
	[["KEY", "suggestion"],					["VAL", 0], ["CAT","VAR"], ["ONASK",BOT_printSuggestionList]], 
	[["KEY", "intention"],					["VAL", 0], ["CAT","VAR"], ["ONASK",BOT_printIntentionList]],  
	// FUNC
	[["KEY", "action"],						["VAL", ["compute"]]],
	[["KEY", "compute"],					["VAL", "func_compute"], ["CAT","ACT"],
											["HOW","You must type a valid javascript expression"],
											["EFFECT","compute the expression"]
											]
];

// ===================== Variables =====================//
var nbAskAgeCarnaum = 0;
var nbAskArmeCarnaum = 0;
var nbAskArmureCarnaum = 0;
var nbAskMagieCarnaum = 0;
var nbTMMArmeCarnaum = 0;
var nbTMMArmureCarnaum = 0;
var nbTMMMagieCarnaum = 0;
var drunkSteps = [10,7,4];
var drunkThresholdCarnaum = 10;


//BOT_theLastAttribute

//==================== Functions ==================//

// liste = [tx1, tx2, tx3[], tx4]
function genericCarnaum(liste, counter)
{
	tx1 = liste[0];
	tx2 = liste[1];
	tx3 = liste[2];
	tx4 = liste[3];

	if (drunkThresholdCarnaum >= drunkSteps[1])
	{
		if (counter < 3)
		{
			return tx1;
		}
		else if (counter >= 3)
		{
			return  tx2;
		}
	}
	else if (drunkThresholdCarnaum >= drunkSteps[2])
	{
		var card = Math.floor(Math.random() * tx3.length);
		return liste[card];
	}
	else if (drunkThresholdCarnaum > 0)
	{
		return tx4;
	}
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

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
	nbAskArmeCarnaum++;

	liste = ["Regarde moi donc cette lame, j'ai un joli cimeterre.",
	"Ca me flatte tu sais. Mais faudrait arreter de demander, ce truc c'est un cimeterre.",
	["Ca coupe ! Quand on force...", "Tout à l'heure, l'autre m'a lancé un caillou sur la tête, ça fait très mal...", "Gardons la tete sur les épaules, quand ca roule, ca bouleverse..."],
	"Avec le temps, elle s'est émoussée... comme mon verre..."];

	return genericCarnaum(liste, nbAskArmeCarnaum);
}

function tellMeMoreCarnaum() {
	switch(BOT_theLastAttribute)
	{
		case "arme":
			return tellMeMoreArmeCarnaum();
		case "defense":
			return tellMeMoreArmureCarnaum();
		case "magie":
			return tellMeMoreMagieCarnaum();
	}
}

function tellMeMoreArmeCarnaum() {
	nbTMMArmeCarnaum++;

	if (drunkThresholdCarnaum >= drunkSteps[1])
	{
		if (nbTMMArmeCarnaum < 3)
		{
			return "Elle m'a énormément suivi dans mes escapades";
		}
		else if (nbTMMArmeCarnaum >= 3)
		{
			return  "On en a encaissé des coups";
		}
	}
	else if (drunkThresholdCarnaum >= drunkSteps[2])
	{
		liste = ["Faut pas écouter les autres, ça s'émousse, tout au plus", "De toute façon, le mien je l'ai acheté de chez un grand forgeron !"];
		var card = Math.floor(Math.random() * liste.length);
		return liste[card];
	}
	else if (drunkThresholdCarnaum > 0)
	{
		return "Je pense que même ébréchée comme elle l'est, je peut quand même te faire mal..."
	}

	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function onAskArmureCarnaum() {
	nbAskArmureCarnaum++;

	liste = ["Je me sens super bien loti dans ma côte de maille.",
	"Je me sens super bien loti dans ma côte de maille.",
	["C'est pas facile à nettoyer n'empêche une côtte de maille"],
	"Booeerg, j'ai dégobié dessus..."];

	return genericCarnaum(liste, nbAskArmeCarnaum);
}

function tellMeMoreArmureCarnaum() {
	nbTMMArmureCarnaum++;

	liste = ["Certe, ma côte de maille est un peu lourde, mais elle résiste des Trolls !",
	"Impossible de briser ma côte de maille !",
	["Certe, ma côte de maille est un peu lourde, mais elle résiste des Trolls !", "Je ne me balade pas en chemise, moi."],
	"C'est pas le tout, mais faut boire"];

	return genericCarnaum(liste, nbAskArmeCarnaum);
}

function onAskMagieCarnaum() {
	nbAskMagieCarnaum++;

	liste = ["Je suis le champion au saut de l'extrême !",
	"Dans je saute d'une falaise de 30 métres, c'est pas moins de 4 litres de sang qu'on peut retrouver dans mon corps",
	["Une fois j'ai glissé en sautant...", "Je vais te le dire à toi, parce que tu ne me lance pas des carreaux d'arbalète à moitié cassés : j'ai un peu le vertige"],
	"Je ne saute jamais vers le haut ! Ce doit être un rêve fabuleux á accomplir."];

	return genericCarnaum(liste, nbAskArmeCarnaum);
}

function tellMeMoreMagieCarnaum() {
	nbTMMMagieCarnaum++;

	liste = ["Certe, ma côte de maille est un peu lourde, mais elle résiste des Trolls !",
	"Impossible de briser ma côte de maille !",
	["Certe, ma côte de maille est un peu lourde, mais elle résiste des Trolls !", "Je ne me balade pas en chemise, moi."],
	"C'est pas le tout, mais faut boire"];

	return genericCarnaum(liste, nbAskArmeCarnaum);
}