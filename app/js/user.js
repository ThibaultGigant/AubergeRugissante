// =======================  TOPIC USER  ========================
var userTopic = [
	// INFO 
	[["KEY", "_class"],			["VAL", "user"]],
	[["KEY", "_reference"],		["VAL", ["j", "je","moi", "me", "aventurier"]]],
	[["KEY", "type"],			["VAL", ["person"]]],
	[["KEY", "je suis"],		["VAL"]]
	// VAR 
	[["KEY", "name"],			["VAL", "User"], ["CAT","VAR"],
								["WHY", "because I don't know it yet"]
								],
	[["KEY", "age"],			["VAL", "unknown"],	["CAT","VAR"]],
	[["KEY", "gender"],			["VAL", "unknown"],	["CAT","VAR"]],
	[["KEY", "job"],			["VAL", "unknown"],	["CAT","VAR"]],
	[["KEY", "bourseZZZ"],		["VAL", "bourseAventurier"], ["ONASK", onAskBourseAventurier]],
	[["KEY", "boissonZZZ"],		["VAL", "stock de boisson"],
								["ONASK", onAskBoisson]],

	// OPINIONS
	[["KEY", "judgement"],		["VAL", []], ["CAT","VAR"], ["ONASK",BOT_printJudgementList]], // 6 standard opinions 
	[["KEY", "preference"],		["VAL", []], ["CAT","VAR"], ["ONASK",BOT_printPreferenceList]], 
	[["KEY", "distaste"],		["VAL", []], ["CAT","VAR"], ["ONASK",BOT_printDistasteList]], 
	[["KEY", "suggestion"],		["VAL", []], ["CAT","VAR"], ["ONASK",BOT_printSuggestionList]],  
	[["KEY", "objection"],		["VAL", []], ["CAT","VAR"], ["ONASK",BOT_printObjectionList]],  
	[["KEY", "intention"],		["VAL", []], ["CAT","VAR"], ["ONASK",BOT_printIntentionList]],  
	// FEELINGS
	[["KEY", "happiness"],		["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]], // 7 standard feelings
	[["KEY", "confidence"],		["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "irritability"],	["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "satisfaction"],	["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "respect"],		["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "force"],			["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "excitement"],		["VAL", 0], ["CAT","VAR"], ["TYPE","INT"]],
	[["KEY", "gagner"],			["VAL", "Fin"], ["ONASK", onAskGagner]],
	// REL
	[["KEY", "relative"],		["VAL", []]] // none
];

var stockCruAventurier = 0;
var stockVinAventurier = 0;
var stockBiereAventurier = 0;
var stockBibineAventurier = 0;
var bourseAventurier = 100;

var equipe = [];

function onAskBoisson()
{
	return "Il me reste " + stockBiereAventurier + " bière" + (stockBiereAventurier>1?"s":"") + ", "
	+ stockBibineAventurier + " bibine" + (stockBibineAventurier>1?"s":"") + ", "
		+ stockVinAventurier + " vin" + (stockVinAventurier>1?"s":"") + " et "
		+ stockCruAventurier + " cru" + (stockCruAventurier>1?"s":"") + ".";
}

function onAskBourseAventurier()
{
	return bourseAventurier;
}

function isGameOver()
{
	var couple1drunk = [];
	var couple2drunk = [];
	var couple1 = [];
	var couple2 = [];
	couple1.push("carnaum");
	couple1drunk.push([drunkThresholdCarnaum, drunkStepsCarnaum[1]]);
	couple2.push("lucrecia");
	couple2drunk.push([drunkThresholdLucrecia, drunkStepsLucrecia[1]]);
	couple1.push("maelis");
	couple1drunk.push([drunkThresholdMaelis, 8]);
	couple2.push("taojim");
	couple2drunk.push([drunkThresholdTaojim, 6]);

	var bool1 = false;
	for (var i = 0; i < couple1.length; i++) {
		if (couple1drunk[i][0] > couple1drunk[i][1])
			bool2 = true;
	}
	var bool2 = false;
	for (var i = 0; i < couple2.length; i++) {
		if (couple2drunk[i][0] > couple2drunk[i][1])
			bool2 = true;
	}

	if (couple1.length > 0 && couple2.length > 0)
		onAskGagner();
	return false;
}

function onAskGagner()
{
	var couple1drunk = [];
	var couple2drunk = [];
	var couple1 = [];
	var couple2 = [];
	if (equipe.includes("carnaum"))
	{
		couple1.push("carnaum");
		couple1drunk.push([drunkThresholdCarnaum, drunkStepsCarnaum[1]]);
	}
	if (equipe.includes("lucrecia"))
	{
		couple2.push("lucrecia");
		couple2drunk.push([drunkThresholdLucrecia, drunkStepsLucrecia[1]]);
	}
	if (equipe.includes("maelis"))
	{
		couple1.push("maelis");
		couple1drunk.push([drunkThresholdMaelis, 8]);
	}
	if (equipe.includes("taojim"))
	{
		couple2.push("taojim");
		couple2drunk.push([drunkThresholdTaojim, 6]);
	}

	var bool1 = false;
	for (var i = 0; i < couple1.length; i++) {
		if (couple1drunk[i][0] > couple1drunk[i][1])
			bool2 = true;
	}
	var bool2 = false;
	for (var i = 0; i < couple2.length; i++) {
		if (couple2drunk[i][0] > couple2drunk[i][1])
			bool2 = true;
	}

	if (couple1.length > 0 && couple2.length > 0)
	{

		if (bool1 && bool2)
		{
			end = "Avec";

			for (i = 0; i < equipe.length-1; i++) { 
			    end += equipe[i] + ", ";
			}
			end += "et " + equipe[equipe.length-1];
			str = (equipe.includes("taojim")) ? "Le lance-pierre de Taojim fit un joyeux carnage" : "Le boomerang de Lucrecia fut d'une sacrée vivacitée";
			end += ", vous avez pu braver les tréfond des gouffres les plus tumultueux, passant par moments du bon temps. " + str + ", et votre sens du jugement " +
			"a su guider le groupe vers la lumière de la gloire. En route pour la taverne !";

			return end;
		}
		return "Après être sortis de la taverne, avec certains coéquipiers plus ou moins saoul, vous vous êtes retrouvés devant une grotte pourprée d'horreur. Vous avez su faire preuve de " +
			"bon sens, et avec décider de vous carapater. Allons nous remonter le moral à la taverne";
	}
	/*if (couple1.length > 0 && couple2.length > 0)
	{
		if (drunkThresholdTaojim >= 6 && 
			drunkThresholdMaelis >= 8)
		{
			end = "Avec";

			for (i = 0; i < equipe.length-1; i++) { 
			    end += equipe[i] + ", ";
			}
			end += "et " + equipe[equipe.length-1];
			str = (equipe.includes("taojim")) ? "Le lance-pierre de Taojim fit un joyeux carnage" : "Le boomerang de Lucrecia fut d'une sacrée vivacitée";
			end += ", vous avez pu braver les tréfond des gouffres les plus tumultueux, passant par moments du bon temps. " + str + ", et votre sens du jugement " +
			"a su guider le groupe vers la lumière de la gloire. En route pour la taverne !";

			return end;
		}
		return "Après être sortis de la taverne, avec certains coéquipiers plus ou moins saoul, vous vous êtes retrouvés devant une grotte pourprée d'horreur. Vous avez su faire preuve de " +
			"bon sens, et avec décider de vous carapater. Allons nous remonter le moral à la taverne";
	}*/

	if ((drunkThresholdCarnaum < drunkStepsCarnaum[1] && (drunkThresholdLucrecia <= drunkStepsLucrecia[1] || drunkThresholdMaelis < 8))
		&& (drunkThresholdTaojim < 6 && (drunkThresholdLucrecia <= drunkStepsLucrecia[1] || drunkThresholdMaelis < 8)))
	return "Une fois de plus, vous n'avez pas su trouver santiags à vos pieds, et êtes retourné bredouille. Une bonne soupée vous attend au chaud.";
}