// ======================  TOPIC CYRIL  ======================
var taojimTopic = [
	// INFO
	[["KEY", "_class"],						["VAL", "bot"], ["BOT","taojimBot"]],
	[["KEY", "_reference"],					["VAL", ["taojim","tao", "jim", "tj"]]],
	[["KEY", "_charprefix"],				["VAL", "taojim"]],
	[["KEY", "_read"],						["VAL", ["userTopic", "maelisTopic", "carnaumTopic", "lucreciaTopic", "tavernierTopic"]]],
	[["KEY", "_write"],						["VAL", ["userTopic"]]],
	[["KEY", "_exec"],						["VAL", ["userTopic"]]], // try
	[["KEY", "type"],						["VAL", ["Mi-Orc","Mi-Humain"]]],
	[["KEY", "name"],						["VAL", "Tao Jim"],   				
											["ONASK","Je m'appelle Tao Jim ! Pourquoi ? T'as un problème avec les noms composés ? Parlons d'autre chose, tu veux bien !"]
											],
	[["KEY", "age"],						["VAL", 164],
											["ONASK", onAskAgeTaojim],
											["WHY","Parce que je suis Mi-Orc et qu'on vit un peu plus longtemps que vous autres."]
											],
	[["KEY", "gender"],						["VAL", "male"],
											["ONASK", "Chez les Orcs je peux paraître très efféminé, mais si tu veux je peux te prouver je suis un homme en te flanquant une bonne raclée !"],
											["WHY", "C'est une bonne question, je me le suis toujours demandé. Malheureusement c'est trop tard pour changer."]
											],
	[["KEY", "armeZZZ"],					["VAL", "Lance-pierre"],
											["ONASK", onAskArmeTaojim],
											["WHY", "J'aime bien dégommer les ennemis de loin, je ne supporte pas la violence de trop près."]
											],
	[["KEY", "defenseZZZ"],					["VAL", "Robe de magicien"],
											["ONASK", onAskDefenseTaojim],
											["WHY", "Je l'ai récupérée de mon grand-père, le magicien à la plus grand longévité du monde. Il avait un sort de protection infaillible."]
											],
	[["KEY", "competenceZZZ"],				["VAL", "Imitation du cri des lapins"],
											["ONASK", onAskMagieTaojim],
											["WHY", "Les lapins c'est trop mignon et doux. J'aime les lapins !"]
											],

	[["KEY", ["offreZZZ","boissonZZZ"]],	["VAL", "offre"],
											["ONASK", onAskOffreTaoJim]
											],

	[["KEY", ["proposeZZZ","boissonZZZ"]],	["VAL", "propose"],
											["ONASK", onAskProposeTaoJim]
											],

	// Eau
	[["KEY", "eau"],						["VAL", "NON"],
											["ONASK", "Malheureux, ne parle pas d'eau ici *chuchotte à haute voix*"]],

	// Tell me more
	[["KEY", "TMM"],						["VAL", tellMeMoreTaojim]],

	// REL
	[["KEY", "maelis"],						["VAL", "maelisTopic"],["CAT","REL"]],
	[["KEY", "carnaum"],					["VAL", "carnaumTopic"],["CAT","REL"]],
	[["KEY", "lucrecia"],					["VAL", "lucreciaTopic"],["CAT","REL"]],
	//[["KEY", "tavernier"],					["VAL", "tavernierTopic"],["CAT","REL"]],
	// FEELINGS
	[["KEY", "happiness"],		["VAL", 0.8], ["CAT","VAR"], ["TYPE","INT"]], // 7 standard feelings iniitated
	[["KEY", "confidence"],		["VAL", -0.8], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "irritability"],	["VAL", 0.8], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "satisfaction"],	["VAL", -0.8], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "respect"],		["VAL", -0.8], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "force"],			["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "excitement"],		["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	// PREFS
	[["KEY", "preference"],		["VAL", [["taojimTopic","name"]]], ["CAT","VAR"], 	["ONASK",BOT_printPreferenceList]],  
	[["KEY", "distaste"],		["VAL", [["carnaumTopic","name"]]],  ["CAT","VAR"], 	["ONASK",BOT_printDistasteList]], 
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
var nbAskAgeTaojim = 0;
var drunkThresholdTaojim = 8;


//==================== Functions ==================//
function onAskAgeTaojim()
{
	nbAskAgeTaojim++;

	if (drunkThresholdTaojim >= 6)
	{
		if (nbAskAgeTaojim < 3)
		{
			return "Je suis quand même assez vieux, mais seulement pour les humains";
		}
		else if (nbAskAgeTaojim >= 3)
		{
			return  "Attention à ne pas froisser tes aïeux !";
		}
	}
	else if (drunkThresholdTaojim >= 1)
	{
		if (nbAskAgeTaojim < 2)
		{
			return "Pour un Orc, je serais assez jeune, je n'ai que 164 ans !";
		}
		else if (nbAskAgeTaojim >= 2)
		{
			return  "Je te l'ai déjà dit, t'as une vraie mémoire de poisson rouge !";
		}
	}
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function onAskArmeTaojim()
{
	if (drunkThresholdTaojim >= 6)
		return "Mon Lance-pierre ne paye pas de mine, mais je l'ai depuis mon enfance.";
	else if (drunkThresholdTaojim >= 1)
		return "J'ai un beau lance-pierre qui tire loin !";
	else if (drunkThresholdTaojim > 0)
		return "L'autre folle avec son armure qui brille, elle a dit qu'elle allait contrôler mon esprit puisque je suis presque un animal. Dommage pour elle que son pouvoir ne fonctionne que sur beaucoup plus petit qu'un humain !";
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function onAskDefenseTaojim()
{
	if (drunkThresholdTaojim >= 6)
		return "Pour me défendre, je mets toujours la robe de magicien dont j'ai hérité de mon grand-père, ce grand sage millénaire.";
	else if (drunkThresholdTaojim >= 1)
		return "Ma robe protectrice me rappelle mon grand-père mort il y a peu, au doux âge de 1385 ans :'(";
	else if (drunkThresholdTaojim > 0)
		return "L'autre guignol avec sa côte de maille, j'ai essayé de le frapper pour lui faire fermer son clapet, mais bon sang, c'est du lourd sa protection !";
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function onAskMagieTaojim()
{
	if (drunkThresholdTaojim >= 6)
		return "Je sais crier comme les lapins ! C'est trop mignon les lapins !";
	else if (drunkThresholdTaojim >= 1)
		return "Mon cri de lapin est connu dans le monde entier pour sa douceur.";
	else if (drunkThresholdTaojim > 0)
		return "Hey, si j'étais toi, je n'irais pas trop près de la fille en vert, quand elle parle aux plantes, celles-ci font tout ce qu'elle veut, j'ai failli être étranglé par des lianes la dernière fois !";
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function tellMeMoreTaojim() {
	switch(BOT_theLastAttribute)
	{
		case "arme":
			return tellMeMoreArmeTaojim();
		case "defense":
			return tellMeMoreDefenseTaojim();
		case "magie":
			return tellMeMoreMagieTaojim()
	}
}

function tellMeMoreArmeTaojim() {
	if (drunkThresholdTaojim >= 6)
		return "J'ai effectivement quelques avantages avec mon lance-pierre, mais ce n'est pas ça qui ferait la différence.";
	else if (drunkThresholdTaojim >= 1)
		return "Bon, j'ai un Lance-pierre et je remplace peut-être les pierres par des billes de plomb enflammées. Et puis avec ma force de semi-orc, c'est souvent mortel. Mais c'est pas de ma faute si vous êtes fragiles, les humains !";
	else if (drunkThresholdTaojim > 0)
		return "Oulaaa j'ai vu tirer cette fille avec une arbalette il y a pas longtemps. Elle a pas touché une seule cible ! Huhu ^^";
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function tellMeMoreDefenseTaojim() {
	if (drunkThresholdTaojim >= 6)
		return "Mon grand-père était le plus grand magicien de tous les temps ! J'ai sa robe, ça devrait en dire long sur mes capacités !";
	else if (drunkThresholdTaojim >= 1)
		return "C'est vrai que ma robe protectrice a beau venir de mon aïeul magicien, elle n'en est pas moins normale... Mais elle est magnifique, et puis elle me fait de jolies fesses, tu trouves pas ?";
	else if (drunkThresholdTaojim > 0)
		return "Ils m'entraînent, au bout de la nuit ! Les démons de minuit !";
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function tellMeMoreMagieTaojim() {
	if (drunkThresholdTaojim >= 6)
		return "Lorsque j'imite les lapins, je ne sais pas trop pourquoi, mais tout le monde fuit le village... C'est dommage !";
	else if (drunkThresholdTaojim >= 1)
		return "Mon imitation du cri des lapins est si parfaite que j'ai pu faire ami ami avec un lapin que j'aime beaucoup. Il fait deux fois ma taille et il lui est arrivé de ne pas savoir s'arrêter pour me protéger, mais il m'adore...";
	else if (drunkThresholdTaojim > 0)
		return "Là-bas, au Connemara, On sait tout le prix de la guerre. Là-bas, au Connemara !!!!";
	var card = Math.floor(Math.random() * drunk_sentences.length);
	return drunk_sentences[card];
}

function onAskProposeTaoJim() {
	var elem = document.getElementById('litetalkchatbox');
	var s = elem.value;

	if (s.includes("cru"))
		return "Garde-le pour toi, c'est pas ma tasse du tout.";
	if (s.includes("vin") ||
		s.includes("bibine") ||
		s.includes("biere") ||
		s.includes("bière"))
		return "C'est parti, arrose !";
	return "Hein ? Dois-je comprendre quelque chose ?";
}

function onAskOffreTaoJim() {
	var elem = document.getElementById('litetalkchatbox');
	var s = elem.value;

	if (s.includes("bière") || s.includes("biere"))
	{
		if (stockBiereAventurier >= 0)
		{
			drinkTaoJim("biere");
			stockBiereAventurier --;
			return "Ça rafraîchit le vestibule ! Merci l'ami. *TaoJim boit cul-sec votre choppe de bière*";
		}
		else {
			return "Ah, tu me donne soif. *Vous n'avez pas de bière*"
		}
	}
	else if (s.includes("vin"))
	{
		if (stockVinAventurier >= 0)
		{
			drinkTaoJim("vin");
			stockVinAventurier --;
			return "C'est limite hein. Mais tant que ça coule bien ;) *TaoJim prend votre verre de vin*";
		}
		else {
			return "C'est pas un drame, tu peux aller m'acheter autre chose ;). *Vous n'avez pas de vin*"
		}

	}
	else if (s.includes("cru"))
	{
		if (stockCruAventurier > 0)
		{
			return "Ah non, C'est trop doux pour moi ça";
		}
		else {
			return "La prochaine fois, garde-les pour toi. *Vous n'avez pas de cru*"
		}
	}
	else if (s.includes("bibine"))
	{
		if (stockBibineAventurier > 0)
		{
			drinkTaoJim("bibine");
			stockBibineAventurier --;
			return "Les grands esprits se rencontrent. C'est bien, comme moi t'es LeaderPrice ! *TaoJim prend votre choppe de bibine*";
		}
		else {
			return "Reviens me dès que tu en as de trop ;) *Vous n'avez pas de bibine*"
		}
	}
	else {
		return "J'ai pas saisi. Qu'est-ce qu'il y a ?"
	}
}

function drinkTaoJim(boisson) {
	var i = -1;
	switch (boisson) {
		case "biere":
			i = 1
			drunkThresholdTaojim -= 1;
			break;
		case "vin":
			i = 2;
			drunkThresholdTaojim -= 2;
			break;
		case "bibine":
			i = 1;
			drunkThresholdTaojim -= 1;
			break;
		case "cru":
			i = 2;
			drunkThresholdTaojim -= 2;
			break;
		default:
			break;
	}
	if ( i != -1 && (drunkThresholdTaojim - i == 6 ||
				drunkThresholdTaojim - i == 1))
			{
				var nbAskAgeTaoJim = 0;
				var nbAskArmeTaoJim = 0;
				var nbAskArmureTaoJim = 0;
				var nbAskMagieTaoJim = 0;
				var nbTMMArmeTaoJim = 0;
				var nbTMMArmureTaoJim = 0;
				var nbTMMMagieTaoJim = 0;
			}
}