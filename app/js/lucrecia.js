// ======================  TOPIC CYRIL  ======================
var lucreciaTopic = [
	// INFO
	[["KEY", "_class"],						["VAL", "bot"], ["BOT","lucreciaBot"]],
	[["KEY", "_reference"],					["VAL", ["lucrecia","lucress"]]],
	[["KEY", "_charprefix"],				["VAL", "lucrecia"]],
	[["KEY", "_read"],						["VAL", ["userTopic", "maelisTopic", "carnaumTopic", "taojimTopic", "tavernierTopic"]]],
	[["KEY", "_write"],						["VAL", ["userTopic"]]],
	[["KEY", "_exec"],						["VAL", ["userTopic"]]], // try
	[["KEY", "type"],						["VAL", ["Humain aux dents lisses","Humain"]]],
	[["KEY", "name"],						["VAL", "Lucrecia"],   				
											["ONASK","Je m'appelle Lucrecia ! Tu peux te le tatouer sur la peau, si tu veux devenir plus populaire"]
											],
	[["KEY", "age"],						["VAL", "?"],
											["ONASK", onAskAgeLucrecia], 
											["WHY","I was born thirty years ago"]
											],
	[["KEY", "gender"],						["VAL", "male"],
											["ONASK", function(s) { return ((s == "male") ? "I am proud to be a man!" : "Just a woman") }]
											],

	// Arme
	[["KEY", "armeZZZ"],					["VAL",		"Boomerang"],
											["ONASK",	onAskArmeLucrecia],
											["ONWHY",	"Je suis certaine que quoi qu'il qrrive, il me reviendra."]
											],
	// armure
	[["KEY", "defenseZZZ"],					["VAL",		"Chemise épaisse"],
											["ONASK",	onAskArmureLucrecia]
											],

	// magie
	[["KEY", "competenceZZZ"],					["VAL",		"Parler à la flore"],
											["ONASK",	onAskMagieLucrecia]
											],





	// Tell me more
	[["KEY", "TMM"],						["VAL", tellMeMoreLucrecia]],
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
var nbAskAgeLucrecia = 0;
var nbAskArmeLucrecia = 0;
var nbAskArmureLucrecia = 0;
var nbAskMagieLucrecia = 0;
var nbTMMArmeLucrecia = 0;
var nbTMMArmureLucrecia = 0;
var nbTMMMagieLucrecia = 0;
var drunkSteps = [8,3,1];
var drunkThresholdLucrecia = drunkSteps[0];


//BOT_theLastAttribute

//==================== Functions ==================//

// liste = [tx1, tx2, tx3[], tx4]
function genericLucrecia(liste, counter)
{
	tx1 = liste[0];
	tx2 = liste[1];
	tx3 = liste[2];
	tx4 = liste[3];

	if (drunkThresholdLucrecia >= drunkSteps[1])
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
	else if (drunkThresholdLucrecia >= drunkSteps[2])
	{
		var card = Math.floor(Math.random() * tx3.length);
		return liste[card];
	}
	else if (drunkThresholdLucrecia > 0)
	{
		return tx4;
	}
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function onAskAgeLucrecia()
{
	nbAskAgeLucrecia++;

	if (drunkThresholdLucrecia >= drunkSteps[1])
	{
		if (nbAskAgeLucrecia < 3)
		{
			return "J'ai bientôt l'âge du monde";
		}
		else if (nbAskAgeLucrecia >= 3)
		{
			return "Disons que je suis plus âgée aue toi";
		}
	}
	else if (drunkThresholdLucrecia >= drunkSteps[2])
	{
		if (nbAskAgeLucrecia < 2)
		{
			return "Tu ferais mieux de me parler de ta quête si tu veux m'intéresser";
		}
		else if (nbAskAgeLucrecia >= 2)
		{
			return  "Tiens, et l'autre là-bas, tu veux pas lui demander ?";
		}
	}
	else if (drunkThresholdLucrecia > 0)
	{
		return "...";
	}
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function onAskArmeLucrecia() {
	nbAskArmeLucrecia++;

	liste = ["Je me sens sereine quand je suis à coté de mon boomerang, tu n'imagines pas.",
	"Si tu veux, je peux briser le verre de cette pouf de Maelis, tu verra l'efficacité de mon boomerang",
	["Je suis un jour passée chez le forgeron pour mon boomerang. A cause des moqueries, des têtes sont tombées."],
	"Je tiendrai l'alcool ! Quoi qu'il arrive !"];

	return genericLucrecia(liste, nbAskArmeLucrecia);
}

function tellMeMoreLucrecia() {
	switch(BOT_theLastAttribute)
	{
		case "arme":
			return tellMeMoreArmeLucrecia();
		case "defense":
			return tellMeMoreArmureLucrecia();
		case "magie":
			return tellMeMoreMagieLucrecia();
		default:
			var elem = document.getElementById('litetalkchatbox');
			var s = elem.value;
			liste = ['Quoi, "' + s + '" ?', 'Tu veux bien t\'exprimer calmement. On a tout notre temps', 'Non alors, je t\'arrête tout de suite : tu vas devoir te détendre si tu veux pas me saouler'];
			var card = Math.floor(Math.random() * liste.length);
			return liste[card];
	}
}

function tellMeMoreArmeLucrecia() {
	nbTMMArmeLucrecia++;

	liste = ["Je m'en suis toujours sorti avec mon boomerang dans les mains",
	"Il ne m'a jamais fait mal, il se contente surtout de couper l'ennemi.",
	["T'as remarqué, il tranche de toute part ! C'est pas comme la dagounette de l'autre rustre là-bas, haha"],
	"Tout ce qu'il y a à savoir, c'est c'est pas à mettre entre les mains des mignonnes comme toi"];

	return genericLucrecia(liste, nbTMMArmeLucrecia);
}

function onAskArmureLucrecia() {
	nbAskArmureLucrecia++;

	liste = ["Je n'ai pas d'inquiétude à avoir, je porte toujours une chemise bien épaisse ! Je te la montrerai",
	"C'est que, les chemises, c'est pas mal confortable, surtout pour les lancés, on garde l'amplitude des mouvements",
	["Je fais toujours très attention à la couleur de ma chemise, toujours éviter de passer DERRIERE les vaches."],
	"Allez, top là, et file m'en payer une !"];

	return genericLucrecia(liste, nbAskArmureLucrecia);
}

function tellMeMoreArmureLucrecia() {
	nbTMMArmureLucrecia++;

	liste = ["Certe, ma côte de maille est un peu lourde, mais elle résiste des Trolls !",
	"Impossible de briser ma côte de maille !",
	["Parfois j'ai froid, c'est pour ça que je viens me réchauffer devant une bonne pinte"],
	"Je ne la voudrais pour rien au monde sa côtte de maille, il a sué dedans et tout, ..."];

	return genericLucrecia(liste, nbTMMArmureLucrecia);
}

function onAskMagieLucrecia() {
	nbAskMagieLucrecia++;

	liste = ["Je parle à la flore, et elle m'écoute. C'est si agréable de se détendre au pied d'un chêne bien mou",
	"Personne n'a jamais contesté la beauté de cette puissance ! Sans la flore, que serions-nous ?",
	["Je trouve ça drole, de chatouiller des gens endormis au nombril avec des orties", "Quand je me fais mal, c'est vers les plantes aue je me tourne."],
	"Quand j'étais jeune, je voulais devenir une belle hortensia"];

	return genericLucrecia(liste, nbAskMagieLucrecia);
}

function tellMeMoreMagieLucrecia() {
	nbTMMMagieLucrecia++;

	liste = ["Une forêt, ça peut être bavard, et très utile en des temps sombres et troubles",
	"Ça peut nous arriver de jouer ensemble, mais c'est à y laisser des mèches. Avec précaution",
	["Faire danser les fleurs à deux atouts : en plus de surprendre, ça peut piquer les yeux !", "Bon ! Et une bière menthelée, tu voudrais pas m'amener ça ?"],
	"Mes pauvres plantes... Devoir désaouler une gaillarde comme moi tous les soirs"];

	return genericLucrecia(liste, nbTMMMagieLucrecia);
}