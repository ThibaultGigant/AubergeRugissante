// ======================  TOPIC CYRIL  ======================
var lucreciaTopic = [
	// INFO
	[["KEY", "_class"],						["VAL", "bot"], ["BOT","lucreciaBot"]],
	[["KEY", "_reference"],					["VAL", ["lucrecia","lucres"]]],
	[["KEY", "_charprefix"],				["VAL", "lucrecia"]],
	[["KEY", "_read"],						["VAL", ["userTopic", "maelisTopic", "carnaumTopic", "taojimTopic", "tavernierTopic"]]],
	[["KEY", "_write"],						["VAL", ["userTopic"]]],
	[["KEY", "_exec"],						["VAL", ["userTopic"]]], // try
	[["KEY", "type"],						["VAL", ["Humain aux dents lisses","Humain"]],
											["ONASK", "Je suis un humain aux dents lisses. Détail qu'il serait malheureux d'omettre."]],
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

	[["KEY", "boissonZZZ"],					["VAL", "boisson"],
											["ONASK","Pour les boissons, c'est au tavernier qu'il faut s'adresser"]],

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

	[["KEY", ["proposeZZZ","equipeZZZ"]],						["VAL", "equipe"],
											["ONASK", onAskEquipeLucrecia]],
	[["KEY", "aventurier"],						["VAL", "equipe"],
											["ONASK", onAskEquipeLucrecia]],

	[["KEY", ["offreZZZ","boissonZZZ"]],	["VAL", "offre"],
											["ONASK", onAskOffreLucrecia]
											],

	[["KEY", ["proposeZZZ","boissonZZZ"]],	["VAL", "propose"],
											["ONASK", onAskProposeLucrecia]
											],

	// Eau
	[["KEY", "eau"],						["VAL", "NON"],
											["ONASK", "Ah ! De l'eau ! ça fait longtemps aue je n'en avais pas entendu parler. Dis, au fait, ça a quel goût ? *chuchotte à haute voix*"]],





	// Tell me more
	[["KEY", "TMM"],						["VAL", tellMeMoreLucrecia]],
	// REL
	//[["KEY", "maelis"],					["VAL", "maelisTopic"],["CAT","REL"]],
	//[["KEY", "taojim"],					["VAL", "taojimTopic"],["CAT","REL"]],
	//[["KEY", "carnaum"],				["VAL", "carnaumTopic"],["CAT","REL"]],
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
var drunkStepsLucrecia = [8,3,1];
var drunkThresholdLucrecia = drunkStepsLucrecia[0];

var happyLucrecia = 0;

var lastAskLucrecia = "";

//BOT_theLastAttribute

//==================== Functions ==================//

// liste = [tx1, tx2, tx3[], tx4]
function genericLucrecia(liste, counter)
{
	tx1 = liste[0];
	tx2 = liste[1];
	tx3 = liste[2];
	tx4 = liste[3];

	if (drunkThresholdLucrecia >= drunkStepsLucrecia[1])
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
	else if (drunkThresholdLucrecia >= drunkStepsLucrecia[2])
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
	lastAskLucrecia = "";
	nbAskAgeLucrecia++;

	if (drunkThresholdLucrecia >= drunkStepsLucrecia[1])
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
	else if (drunkThresholdLucrecia >= drunkStepsLucrecia[2])
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
	lastAskLucrecia = "arme";
	nbAskArmeLucrecia++;

	liste = ["Je me sens sereine quand je suis à coté de mon boomerang, tu n'imagines pas.",
	"Si tu veux, je peux briser le verre de cette pouf de Maelis, tu verra l'efficacité de mon boomerang",
	["Je suis un jour passée chez le forgeron pour mon boomerang. A cause des moqueries, des têtes sont tombées."],
	"Je tiendrai l'alcool ! Quoi qu'il arrive !"];

	return genericLucrecia(liste, nbAskArmeLucrecia);
}

function tellMeMoreLucrecia() {
	if (Math.random() < 0.7)
		happyLucrecia--;

	//switch(BOT_theLastAttribute)
	switch(lastAskLucrecia)
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
	lastAskLucrecia = "defense";
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
	lastAskLucrecia = "magie";
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

function onAskProposeLucrecia() {
	var elem = document.getElementById('litetalkchatbox');
	var s = elem.value;

	if (s.includes("vin") ||
		s.includes("bibine") ||
		s.includes("biere") ||
		s.includes("bière") ||
		s.includes("cru"))
		return "Très sympa, je ne dis pas nom";
	return "Quand je n'ai pas envie de répondre, il m'arrive de quand même parler.";
}

function onAskOffreLucrecia() {
	var elem = document.getElementById('litetalkchatbox');
	var s = elem.value;

	if (s.includes("bière") || s.includes("biere"))
	{
		if (stockBiereAventurier >= 0)
		{
			drinkLucrecia("biere");
			stockBiereAventurier --;
			happyLucrecia++;
			return "Commencer avec une bonne biere, c'est génial. Continuer à en boire, c'est tellement mieux. *Lucrecia boit cul-sec votre choppe de bière*";
		}
		else {
			return "Mieux vaut attendre la soif, on n'en ai que plus récompensé au moment de se remplir la panse de bière. *Vous n'avez pas de bière*";
		}
	}
	else if (s.includes("vin"))
	{
		if (stockVinAventurier >= 0)
		{
			drinkLucrecia("vin");
			stockVinAventurier --;
			happyLucrecia ++;
			return "Je trouve que ça à l'air bon pour la santé, ce truc. *Lucrecia prend votre verre de vin*";
		}
		else {
			return "A chaque fois que j'en bois, ça me transporte. Tu m'as donné des illusions, et ça a tendance à m'irriter. *Vous n'avez pas de vin*";
		}

	}
	else if (s.includes("cru"))
	{
		if (stockCruAventurier > 0)
		{
			stockCruAventurier--;
			happyLucrecia += 2;
			return "Le saint Graal ! Je porterai cette coupe à mes lèvres comme lors des grandes cérémonies";
		}
		else {
			return "Dommage pour toi, tu as raté l'occasion de faire une bonne action. *Vous n'avez pas de cru*";
		}
	}
	else if (s.includes("bibine"))
	{
		if (stockBibineAventurier > 0)
		{
			drinkLucrecia("bibine");
			stockBibineAventurier --;
			happyLucrecia++;
			return "Une petite tasse, ça pars vite *Lucrecia prend votre choppe de bibine*";
		}
		else {
			return "C'est pas comme si que je ratais grand chose. *Vous n'avez pas de bibine*";
		}
	}
	else {
		return "J'ai pas saisi. Qu'est-ce qu'il y a ?";
	}
}

function drinkLucrecia(boisson) {
	var i = -1;
	switch (boisson) {
		case "biere":
			i = 1;
			drunkThresholdLucrecia -= 1;
			break;
		case "vin":
			i = 2;
			drunkThresholdLucrecia -= 2;
			break;
		case "bibine":
			i = 1;
			drunkThresholdLucrecia -= 1;
			break;
		case "cru":
			i = 2;
			drunkThresholdLucrecia -= 2;
			break;
		default:
			break;
	}
}

function onAskEquipeLucrecia() {
	if (happyLucrecia >= 2)
	{
		equipe.push("lucrecia");
		return "Je suis partant ! Juste le temps d'une dernière.";
	}
	else if (happyLucrecia < -2) {
		return "C'est mort, on va pas être copains.";
	}
	return "Attendons de faire plus ample connaissance... A moins que tu ne sois fauché";
}
