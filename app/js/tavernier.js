// ======================  TOPIC CYRIL  ======================
var tavernierTopic = [
	// INFO
	[["KEY", "_class"],						["VAL", "bot"], ["BOT","tavernierBot"]],
	[["KEY", "_reference"],					["VAL", ["tavernier"]] ],
	[["KEY", "_charprefix"],				["VAL", "tavernier"]],
	[["KEY", "_read"],						["VAL", ["userTopic", "maelisTopic", "lucreciaTopic", "taojimTopic", "carnaumTopic"]]],
	[["KEY", "_write"],						["VAL", ["userTopic"]]],
	[["KEY", "_exec"],						["VAL", ["userTopic"]]], // try
	[["KEY", "type"],						["VAL", ["Humain aux dents lisses","Humain"]]],
	[["KEY", "name"],						["VAL", "Tavernier"],   				
											["ONASK","Je suis le tenancier du bar !"]
											],
	[["KEY", "age"],						["VAL", "?"],
											["ONASK", "Je ne suis pas là pour faire causette, vous m'excuserez j'ai du travail"]
											],
	[["KEY", "gender"],						["VAL", "male"],
											["ONASK", function(s) { return ((s == "male") ? "I am proud to be a man!" : "Just a woman") }]
											],

	// Arme
	[["KEY", "boissonZZZ"],					["VAL",		"Tarverne"],
											["ONASK",	onAskBoissonTavernier]
											],

	// Arme
	[["KEY", "proposeZZZ"],					["VAL",		"Tarverne"],
											["ONASK",	onAskBoissonTavernier]
											],

	// Eau
	[["KEY", "eau"],						["VAL", "NON"],
											["ONASK", "J'ai entendu \"de l'eau\" !? Pas de ça ici, vous m'entendez !?"]],

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
	[["KEY", "preference"],					["VAL", [["tavernierTopic","name"]]], ["CAT","VAR"], 	["ONASK",BOT_printPreferenceList]],  
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
var nbAskBoissonTavernier = 0;
var nbAchatBoissonTavernier = 0;


//==================== Functions ==================//

function onAskBoissonTavernier() {
	nbAskBoissonTavernier++;

	var elem = document.getElementById('litetalkchatbox');
	var s = elem.value;

	if (s.includes("combien") ||
		s.includes("Combien") ||
		s.includes("propose") ||
		s.includes("proposez") ||
		s.includes("avez"))
	{
		str = ["J'arrive ! Alors, une bière c'est 7 ronds, un verre de vin ça vous en fera 13, 5 pour une bibine et 17 pour le cru de la maison",
		"Je suis à vous l'ami ! Ça sera 13 rond pour du vin, 17 pour le cru de la maison, 5 pour une bibine et puis enfin 7 pour une bière" ]
		var card = Math.floor(Math.random() * str.length);
		return str[card];
	}

	if (s.includes("bière") || s.includes("biere"))
	{
		if (bourseAventurier >= 7)
		{
			boisson = "bière";
			stockBiereAventurier ++;
			bourseAventurier -= 7;
		}
	}
	else if (s.includes("vin"))
	{
		if (bourseAventurier >= 13)
		{
			boisson = "vin";
			stockVinAventurier ++;
			bourseAventurier -= 13;
		}

	}
	else if (s.includes("cru"))
	{
		if (bourseAventurier >= 17)
		{
			boisson = "cru";
			stockCruAventurier ++;
			bourseAventurier -= 17;
		}
	}
	else if (s.includes("bibine"))
	{
		if (bourseAventurier >= 5)
		{
			boisson = "bibine";
			stockBibineAventurier ++;
			bourseAventurier -= 5;
		}
	}
	else {
		str = ["J'arrive ! Alors, une bière c'est 7 ronds, un verre de vin ça vous en fera 13, 5 pour une bibine et 17 pour le cru de la maison",
		"Je suis à vous l'ami ! Ça sera 13 rond pour du vin, 17 pour le cru de la maison, 5 pour une bibine et puis enfin 7 pour une bière" ];
		var card = Math.floor(Math.random() * str.length);
		return str[card];
	}

	str = ["Et voilà ! une " + boisson,
	"Avec modération *clin d'oeil*",
	"Dégustez", "Savourez" ];
	var card = Math.floor(Math.random() * str.length);
	return str[card];

	/*liste = ["Regarde moi donc cette lame, j'ai un joli cimeterre.",
	"Ca me flatte tu sais. Mais faudrait arreter de demander, ce truc c'est un cimeterre.",
	["Ca coupe ! Quand on force...", "Tout à l'heure, l'autre m'a lancé un caillou sur la tête, ça fait très mal...", "Gardons la tete sur les épaules, quand ca roule, ca bouleverse..."],
	"Avec le temps, elle s'est émoussée... comme mon verre..."];

	return genericTavernier(liste, nbAskArmeTavernier);*/
}