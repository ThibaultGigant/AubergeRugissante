// ======================  TOPIC CYRIL  ======================
var maelisTopic = [
	// INFO
	[["KEY", "_class"],						["VAL", "bot"], ["BOT","maelisBot"]],
	[["KEY", "_reference"],					["VAL", ["mae","maelis","mael", "mel", "maeli"]]],
	[["KEY", "_charprefix"],				["VAL", "maelis"]],
	[["KEY", "_read"],						["VAL", ["userTopic", "carnaumTopic", "lucreciaTopic", "taojimTopic", "tavernierTopic"]]],
	[["KEY", "_write"],						["VAL", ["userTopic"]]],
	[["KEY", "_exec"],						["VAL", ["userTopic"]]], // try
	[["KEY", "type"],						["VAL", ["amazone","Homme"]]],
	[["KEY", "name"],						["VAL", "Maelis"],
											["ONASK", "Tu n'oublieras jamais mon doux nom, Aventurier. Je m'appelle Maelis"],
											["WHY","Parce que "]
											],
	[["KEY", "age"],						["VAL", 25], ["TYPE","INT"],
											["ONASK", onAskAgeMaelis],
											["WHY","T'es débile ou bien ?"]
											],
	[["KEY", "gender"],						["VAL", "female"],
											["ONASK", "T'es bigleux ou quoi ? Mon décolleté te crève pas assez les yeux ?"],
											["WHY", "Parce que j'ai choisi d'être intelligente EN PLUS d'être forte."]
											],

	[["KEY", "boissonZZZ"],					["VAL", "boisson"],
											["ONASK","Me regarde pas avec ces yeux avide quand tu pense à boire. Dirige toi vers le tarvernier"]],

	[["KEY", "armeZZZ"],					["VAL", "arbalete"],
											["ONASK", onAskArmeMaelis],
											["WHY", "Les amazones, on a arrêté d'utiliser des arcs. Se couper le sein gauche ça va cinq minutes !"]
											],
	[["KEY", "defenseZZZ"],					["VAL", "armure de mithrill"],
											["ONASK", onAskDefenseMaelis],
											["WHY", "C'est sentimental, on la garde dans la famille depuis quelques temps."]
											],
	[["KEY", "competenceZZZ"],				["VAL", "controle mental"],
											["ONASK", onAskMagieMaelis],
											["WHY", "Mon pouvoir s'est développé quand j'étais adolescente, enfermée dans une poubelle... Je ne sais pas trop pourquoi."]
											],

	[["KEY", ["proposeZZZ","equipeZZZ"]],						["VAL", "equipe"],
											["ONASK", onAskEquipeMae]],
	[["KEY", "aventurier"],						["VAL", "equipe"],
											["ONASK", onAskEquipeMae]],

	[["KEY", ["offreZZZ","boissonZZZ"]],	["VAL", "offre"],
											["ONASK", onAskOffreMaelis]
											],

	[["KEY", ["proposeZZZ","boissonZZZ"]],	["VAL", "propose"],
											["ONASK", onAskProposeMaelis]
											],

	// Eau
	[["KEY", "eau"],						["VAL", "NON"],
											["ONASK", "Ne me parle pas de ça, tu veux ?"]],

	// Tell me more
	[["KEY", "TMM"],						["VAL", tellMeMoreMaelis]],

	// REL

	//[["KEY", "carnaum"],				["VAL", "carnaumTopic"],["CAT","REL"]],
	//[["KEY", "taojim"],					["VAL", "taojimTopic"],["CAT","REL"]],
	//[["KEY", "lucrecia"],				["VAL", "lucreciaTopic"],["CAT","REL"]],
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

// ===================== Variables =====================//
var nbAskAgeMaelis = 0;
var drunkThresholdMaelis = 13;
var drunkStepsMaelis = [13, 8, 4];

var happyMae = 0;

lastAskMaelis = "";

//==================== Functions ==================//
function onAskAgeMaelis()
{
	nbAskAgeMaelis++;

	if (drunkThresholdMaelis >= drunkStepsMaelis[1])
	{
		if (nbAskAgeMaelis < 3)
		{
			return "J'ai 25 ans";
		}
		else if (nbAskAgeMaelis >= 3)
		{
			return  "Mais t'es sourd gringalet ?";
		}
	}
	else if (drunkThresholdMaelis >= drunkStepsMaelis[2])
	{
		if (nbAskAgeMaelis < 2)
		{
			return "Mon âge ne peut-il pas se déduire à mon beau minois";
		}
		else if (nbAskAgeMaelis >= 2)
		{
			return  "Mais tu sais que t'es relouuuuu ?";
		}
	}
	else if (drunkThresholdMaelis >0)
	{
		if (nbAskAgeMaelis < 2)
		{
			return "Tu sais que t'es mignon toi !";
		}
		else if (nbAskAgeMaelis >= 2)
		{
			return  "Bon sang, tout à l'heure j'ai failli me prendre un boomerang sur la tronche. Ça paraît pas, mais celui qui se l'est pris à ma place ne s'est jamais relevé.";
		}
	}

	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function onAskArmeMaelis()
{
	lastAskMaelis = "Arme";
	if (drunkThresholdMaelis >= drunkStepsMaelis[1])
		return "Je ne quitte jamais mon arbalete. C'est du bon matériel, depuis que j'ai échangé mon arc.";
	else if (drunkThresholdMaelis >= drunkStepsMaelis[2])
		return "Je me balade toujours avec une arbalete. Ça aurait pu être du bois de platane, pour nous venger des arbres qu'on se prend lorsque la monture fait un pas de travers.";
	else if (drunkThresholdMaelis > 0)
		return "L'autre aux dents lisses là-bas, il a essayé de m'attaquer mais il ne pourrait pas couper mon pain avec son arme même s'il le voulait.";
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function onAskDefenseMaelis()
{
	lastAskMaelis = "Defense";
	if (drunkThresholdMaelis >= drunkStepsMaelis[1])
		return "J'ai une petite armure, mais elle ne date pas d'hier";
	else if (drunkThresholdMaelis >= drunkStepsMaelis[2])
		return "Mon armure c'est la plus forte !";
	else if (drunkThresholdMaelis > 0)
		return "Pouah ! La semaine dernière y'a un siphoné du ciboulot qui a crié comme un lapin. Je devais être dans le même état que maintenant, je jurerais avoir vu un lapin géant courir à ses côtés ensuite.";
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function onAskMagieMaelis()
{
	lastAskMaelis = "Magie";
	if (drunkThresholdMaelis >= drunkStepsMaelis[1])
		return "Je maîtrise le contrôle mental mieux que personne, mon ami !";
	else if (drunkThresholdMaelis >= drunkStepsMaelis[2])
		return "Bon, j'avoue que je contrôle mentalement des animaux, mais ça ne fonctionne pas réellement sur les humains";
	else if (drunkThresholdMaelis > 0)
		return "Hahaha ! Comment c'est pourri de pas avoir le courage de sauter alors qu'on survivrait à la chute !";
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function tellMeMoreMaelis() {
	if (Math.random() < 0.7)
		happyMae--;
	//switch(BOT_theLastAttribute)
	switch(lastAskMaelis)
	{
		case "Arme":
			return tellMeMoreArmeMaelis();
		case "Defense":
			return tellMeMoreDefenseMaelis();
		case "Magie":
			return tellMeMoreMagieMaelis()
		default:
			var elem = document.getElementById('litetalkchatbox');
			var s = elem.value;
			liste = ['Quoi, "' + s + '" ?', 'Chaque question en son temps. Une tournée des crus avant de faire les vendanges ?', 'Garde tes questions pour plus tard tu veux ?'];
			var card = Math.floor(Math.random() * liste.length);
			return liste[card];
	}
}

function tellMeMoreArmeMaelis() {
	if (drunkThresholdMaelis >= drunkStepsMaelis[1])
		return "Mon arme a en effet un petit secret, mais il va falloir être plus gentil pour que j'accepte d'en dire plus.";
	else if (drunkThresholdMaelis >= drunkStepsMaelis[2])
		return "D'accord, j'avoue... Je n'ai pas d'argent pour acheter des flèches alors je les construits moi-même. Il arrive qu'elles ne partent pas tout à fait droit...";
	else if (drunkThresholdMaelis > 0)
		return "Wouhouuuu ! La soirée ne fait que commencer !!!";
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function tellMeMoreDefenseMaelis() {
	if (drunkThresholdMaelis >= drunkStepsMaelis[1])
		return "Mon armure est très belle. Je pourrais en dire plus, mais je préfère qu'on se connaisse mieux.";
	else if (drunkThresholdMaelis >= drunkStepsMaelis[2])
		return "Dans ma famille, on a eu de la chance, un pélerin nous a offert cette armure en mithrill. Elle est totalement indestructible.";
	else if (drunkThresholdMaelis > 0)
		return "Iiiiiil est des nôôôôôôtres !";
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function tellMeMoreMagieMaelis() {
	if (drunkThresholdMaelis >= drunkStepsMaelis[1])
		return "Je peux contrôler mentalement les créatures, mais il ne faut pas qu'elles soient trop trop grosses, mais ça ne gêne pas vraiment.";
	else if (drunkThresholdMaelis >= drunkStepsMaelis[2])
		return "C'est dur à avouer, mais en fait quand j'exerce mon pouvoir, il ne fonctionne que sur des rongeurs de moins de 10cm";
	else if (drunkThresholdMaelis > 0)
		return "Vazy Aventurier montre-nous tes fesses ! Vazy Aventurier montre-nous ton c** !";
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}


function onAskProposeMaelis() {
	var elem = document.getElementById('litetalkchatbox');
	var s = elem.value;

	if (s.includes("bibine"))
		return "Non merci, ça ira";
	if (s.includes("vin") ||
		s.includes("cru") ||
		s.includes("biere") ||
		s.includes("bière"))
		return "Ah je suis partante pour un verre, en effet";
	return "De quoi ? Je ne vois pas de quoi tu parles";
}

function onAskOffreMaelis() {
	var elem = document.getElementById('litetalkchatbox');
	var s = elem.value;

	if (s.includes("bière") || s.includes("biere"))
	{
		if (stockBiereAventurier >= 0)
		{
			drinkMaelis("biere");
			stockBiereAventurier --;
			happyMae++;
			return "Moui, c'est mieux que rien. *Mealis boit cul-sec votre choppe de bière*";
		}
		else {
			return "Bon, tant pis. *Vous n'avez pas de bière*"
		}
	}
	else if (s.includes("vin"))
	{
		if (stockVinAventurier >= 0)
		{
			drinkMaelis("vin");
			stockVinAventurier --;
			happyMae++;
			return "Ça me changera de la bière, tiens. *Maelis prend votre verre de vin*";
		}
		else {
			return "Dommage, j'en aurais bien voulu. *Vous n'avez pas de vin*"
		}

	}
	else if (s.includes("cru"))
	{
		if (stockCruAventurier > 0)
		{
			drinkMaelis("cru");
			stockCruAventurier --;
			happyMae += 2;
			return "Ah ! Là je dis oui ! Merci ! *Maelis prend votre verre de cru*";
		}
		else {
			return "Pourauoi donner tant de faux espoirs ? *Vous n'avez pas de cru*"
		}
	}
	else if (s.includes("bibine"))
	{
		if (stockBibineAventurier > 0)
		{
			drinkMaelis("bibine");
			return "Heu, non merci, je ne bois pas de cette eau là";
		}
		else {
			return "De toute façon, je n'en aurais pas bu ! *Vous n'avez pas de bibine*"
		}
	}
	else {
		return "J'ai pas saisi. Qu'est-ce qu'il y a ?"
	}
}

function drinkMaelis(boisson) {
	var i = -1;
	switch (boisson) {
		case "biere":
			i = 1
			drunkThresholdMaelis -= 1;
			break;
		case "vin":
			i = 2;
			drunkThresholdMaelis -= 2;
			break;
		case "cru":
			i = 2;
			drunkThresholdMaelis -= 2;
			break;
		default:
			break;
	}
}

function onAskEquipeMae() {
	var str;
	if (happyMae >= 2)
	{
		equipe.push("maelis");
		str = "Je suis partant ! Juste le temps d'une dernière.";
	}
	else if (happyMae < -2) {
		str = "C'est mort, on va pas être copains.";
	}
	else {
		str = "Attendons de faire plus ample connaissance... A moins que tu ne sois fauché";
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
