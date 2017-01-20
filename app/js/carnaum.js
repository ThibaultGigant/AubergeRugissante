// ======================  TOPIC CYRIL  ======================
var carnaumTopic = [
	// INFO
	[["KEY", "_class"],						["VAL", "bot"], ["BOT","carnaumBot"]],
	[["KEY", "_reference"],					["VAL", ["carnaum","carna"]] ],
	[["KEY", "_charprefix"],				["VAL", "carnaum"]],
	[["KEY", "_read"],						["VAL", ["userTopic", "maelisTopic", "lucreciaTopic", "taojimTopic", "tavernierTopic"]]],
	[["KEY", "_write"],						["VAL", ["userTopic"]]],
	[["KEY", "_exec"],						["VAL", ["userTopic"]]], // try
	[["KEY", "type"],						["VAL", ["Humain aux dents lisses","Humain"]],
											["ONASK", "Je suis un humain aux dents lisses. Détail qu'il serait malheureux d'omettre."]],
	[["KEY", "name"],						["VAL", "Carnaum"],
											["ONASK","Je m'appelle Carnaum ! Tu peux te le tatouer sur la peau, si tu veux devenir plus populaire"]
											],
	[["KEY", "age"],						["VAL", "?"],
											["ONASK", onAskAgeCarnaum],
											["WHY","I was born thirty years ago"]
											],
	[["KEY", "gender"],						["VAL", "male"],
											["ONASK", "Chez les mâles, je suis "]
											],

	[["KEY", "boissonZZZ"],					["VAL", "boisson"],
											["ONASK","Ne tente pas de négocier avec moi, tu ne tiens pas la route. Si tu veux de la boisson, va voir le tavernier"]],

	// Arme
	[["KEY", "armeZZZ"],					["VAL",		"Cimeterre"],
											["ONASK",	onAskArmeCarnaum],
											["ONWHY",	"Dans la vie, faut faire des choix, et moi, le voilà."]
											],
	// armure
	[["KEY", "defenseZZZ"],					["VAL",		"Côtte de maille"],
											["ONASK",	onAskArmureCarnaum]
											],

	// magie
	[["KEY", "competenceZZZ"],				["VAL",		"Chute extrême"],
											["ONASK",	onAskMagieCarnaum]
											],

	[["KEY", ["proposeZZZ","equipeZZZ"]],						["VAL", "equipe"],
											["ONASK", onAskEquipeCarnaum]],
	[["KEY", "aventurier"],						["VAL", "equipe"],
											["ONASK", onAskEquipeCarnaum]],


	[["KEY", ["offreZZZ","boissonZZZ"]],	["VAL", "offre"],
											["ONASK", onAskOffreCarnaum]
											],

	[["KEY", ["proposeZZZ","boissonZZZ"]],	["VAL", "propose"],
											["ONASK", onAskProposeCarnaum]
											],

	// Eau
	[["KEY", "eau"],						["VAL", "NON"],
											["ONASK", "Ahaha ! T'as dit \"eau\" !"]],





	// Tell me more
	[["KEY", "TMM"],						["VAL", tellMeMoreCarnaum]],

	// REL
	//[["KEY", "maelis"],						["VAL", "maelisTopic"],["CAT","REL"]],
	//[["KEY", "taojim"],						["VAL", "taojimTopic"],["CAT","REL"]],
	//[["KEY", "lucrecia"],					["VAL", "lucreciaTopic"],["CAT","REL"]],
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
var drunkStepsCarnaum = [10,7,4];
var drunkThresholdCarnaum = 10;

var happyCarnaum = 0;

var lastAskCarnaum = "";

//BOT_theLastAttribute

//==================== Functions ==================//

// liste = [tx1, tx2, tx3[], tx4]
function genericCarnaum(liste, counter)
{
	tx1 = liste[0];
	tx2 = liste[1];
	tx3 = liste[2];
	tx4 = liste[3];

	if (drunkThresholdCarnaum >= drunkStepsCarnaum[1])
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
	else if (drunkThresholdCarnaum >= drunkStepsCarnaum[2])
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
	lastAskCarnaum = "age";
	lastAskCarnaum = "";
	nbAskAgeCarnaum++;

	if (nbAskAgeCarnaum == 3)
	{
		happyCarnaum --;
	}

	if (drunkThresholdCarnaum >= drunkStepsCarnaum[1])
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
	else if (drunkThresholdCarnaum >= drunkStepsCarnaum[2])
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
	lastAskCarnaum = "arme";
	nbAskArmeCarnaum++;

	liste = ["Regarde moi donc cette lame, j'ai un joli cimeterre.",
	"Ca me flatte tu sais. Mais faudrait arreter de demander, ce truc c'est un cimeterre.",
	["Ca coupe ! Quand on force...", "Tout à l'heure, l'autre m'a lancé un caillou sur la tête, ça fait très mal...", "Gardons la tete sur les épaules, quand ca roule, ca bouleverse..."],
	"Avec le temps, elle s'est émoussée... comme mon verre..."];

	return genericCarnaum(liste, nbAskArmeCarnaum);
}

function tellMeMoreCarnaum() {
	if (Math.random() < 0.7)
		happyCarnaum--;
	//switch(BOT_theLastAttribute)
	switch(lastAskCarnaum)
	{
		case "arme":
			return tellMeMoreArmeCarnaum();
		case "defense":
			return tellMeMoreArmureCarnaum();
		case "magie":
			return tellMeMoreMagieCarnaum();
		case "age":
			return "M'emmerde pas"
		default:
			var elem = document.getElementById('litetalkchatbox');
			var s = elem.value;
			liste = ['Quoi, "' + s + '" ?', 'Chaque question en son temps. Une tournée des crus avant de faire les vendanges ?', 'Garde tes questions pour plus tard tu veux ?'];
			var card = Math.floor(Math.random() * liste.length);
			return liste[card];
	}
}

function tellMeMoreArmeCarnaum() {
	nbTMMArmeCarnaum++;

	if (drunkThresholdCarnaum >= drunkStepsCarnaum[1])
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
	else if (drunkThresholdCarnaum >= drunkStepsCarnaum[2])
	{
		liste = ["Faut pas écouter les autres, ça s'émousse, tout au plus", "De toute façon, le mien je l'ai acheté de chez un grand forgeron !"];
		var card = Math.floor(Math.random() * liste.length);
		return liste[card];
	}
	else if (drunkThresholdCarnaum > 0)
	{
		return "Je pense que même ébréchée comme elle l'est, je peut quand même te faire mal...";
	}

	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function onAskArmureCarnaum() {
	lastAskCarnaum = "defense";
	nbAskArmureCarnaum++;

	liste = ["Je me sens super bien loti dans ma côtte de maille.",
	"Je me sens super bien loti dans ma côtte de maille.",
	["C'est pas facile à nettoyer n'empêche une côtte de maille"],
	"Booeerg, j'ai dégobié dessus..."];

	return genericCarnaum(liste, nbAskArmureCarnaum);
}

function tellMeMoreArmureCarnaum() {
	nbTMMArmureCarnaum++;

	liste = ["Certe, ma côtte de maille est un peu lourde, mais elle résiste à la force brute des Trolls !",
	"Impossible de briser ma côtte de maille !",
	["Certe, ma côtte de maille est un peu lourde, mais elle résiste à la force brute des Trolls !", "Je ne me balade pas en chemise, moi."],
	"C'est pas le tout, mais faut boire"];

	return genericCarnaum(liste, nbTMMArmureCarnaum);
}

function onAskMagieCarnaum() {
	lastAskCarnaum = "magie";
	nbAskMagieCarnaum++;

	liste = ["Je suis le champion du saut de l'extrême !",
	"Quand je saute d'une falaise de 30 métres, c'est pas moins de 4 litres de sang qu'on peut retrouver dans mon corps",
	["Une fois j'ai glissé en sautant...", "Je vais te le dire à toi, parce que tu ne me lance pas des carreaux d'arbalète à moitié cassés : j'ai un peu le vertige"],
	"Je ne saute jamais vers le haut ! Ce doit être un rêve fabuleux á accomplir."];

	return genericCarnaum(liste, nbAskMagieCarnaum);
}

function tellMeMoreMagieCarnaum() {
	nbTMMMagieCarnaum++;

	liste = ["Certe, ma côtte de maille est un peu lourde, mais elle résiste des Trolls !",
	"Impossible de briser ma côtte de maille !",
	["Certe, ma côtte de maille est un peu lourde, mais elle résiste des Trolls !", "Je ne me balade pas en chemise, moi."],
	"C'est pas le tout, mais faut boire"];

	return genericCarnaum(liste, nbTMMMagieCarnaum);
}

function onAskProposeCarnaum() {
	return "Ah, je veux bien !";
}

function onAskOffreCarnaum() {
	var elem = document.getElementById('litetalkchatbox');
	var s = elem.value;

	if (s.includes("bière") || s.includes("biere"))
	{
		if (stockBiereAventurier > 0)
		{
			drinkCarnaum("biere");
			onRemoveBiere(1);

			//if (drunkThresholdCarnaum == drunkStepsCarnaum[0])
				happyCarnaum++;

			return "Voilà une boisson infaillible, tout comme moi. *Carnaum boit cul-sec votre choppe de bière*";
		}
		else {
			return "Pfff... Je peux m'en acheter tout seul de toute façon. *Vous n'avez pas de bière*";
		}
	}
	else if (s.includes("vin"))
	{
		if (stockVinAventurier > 0)
		{
			drinkCarnaum("vin");
			onRemoveVin(1);


			//if (drunkThresholdCarnaum > drunkStepsCarnaum[1])
				happyCarnaum+=2;

			return "Eh bien, tu ne te fais pas chier. *Carnaum prend votre verre de vin*";
		}
		else {
			return "Je ne demande que ça, d'en boire, alors fais péter. *Vous n'avez pas de vin*";
		}

	}
	else if (s.includes("cru"))
	{
		if (stockCruAventurier > 0)
		{
			drinkCarnaum("cru");
			onRemoveCru(1);

			//if (drunkThresholdCarnaum > drunkStepsCarnaum[1])
				happyCarnaum+=2;

			return "Wahou ! Excellent, merci !. *Carnaum prend votre verre de cru*";
		}
		else {
			return "J'en ai vu des faux-cul, mais me proposer un cru que tu n'as pas... *Vous n'avez pas de cru*";
		}
	}
	else if (s.includes("bibine"))
	{
		if (stockBibineAventurier > 0)
		{
			drinkCarnaum("bibine");
			onRemoveBibine(-1);
			happyCarnaum++;
			return "Ça passera le temps. *Carnaum prend votre choppe de bibine*";
		}
		else {
			return "Je veux bien boire tout ce que tu veux, mais faudrait que tu m'en donnes. *Vous n'avez pas de bibine*";
		}
	}
	else {
		return "J'ai pas saisi. Qu'est-ce qu'il y a ?";
	}
}

function drinkCarnaum(boisson) {
	var i = -1;
	switch (boisson) {
		case "biere":
			i = 1;
			drunkThresholdCarnaum -= 1;
			break;
		case "vin":
			i = 2;
			drunkThresholdCarnaum -= 2;
			break;
		case "bibine":
			i = 1;
			drunkThresholdCarnaum -= 1;
			break;
		case "cru":
			i = 2;
			drunkThresholdCarnaum -= 2;
			break;
		default:
			break;
	}
}

function onAskEquipeCarnaum() {
	var str;
	if (happyCarnaum >= 2)
	{
		equipe.push("carnaum");
		str = "Je suis partant ! Juste le temps d'une dernière.";
	}
	else if (happyCarnaum < -2) {
		str = "C'est mort, on va pas être copains.";
	}
	else {
		str = "Attendons de faire plus ample connaissance... A moins que tu ne sois fauché.";
	}
	if (isGameWon())
	{
		return str + onAskGagner();
	}
	if (isGameLost())
	{
		return str + onAskPerdre();
	}
	return str;
}
