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

function isGameWon()
{
	alert("isGameWon");
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

	if (equipe.includes("carnaum"))
	{
		couple1.push("carnaum");
		couple1drunk.push([drunkThresholdCarnaum, drunkStepsCarnaum[2]]);
	}
	if (equipe.includes("lucrecia"))
	{
		couple2.push("lucrecia");
		couple2drunk.push([drunkThresholdLucrecia, drunkStepsLucrecia[2]]);
	}
	if (equipe.includes("maelis"))
	{
	couple1.push("maelis");
	couple1drunk.push([drunkThresholdMaelis, drunkStepsMaelis[2]]);
	}
	if (equipe.includes("taojim"))
	{
		couple2.push("taojim");
		couple2drunk.push([drunkThresholdTaojim, drunkStepsTaojim[2]]);
	}

	var bool1 = false;
	for (var i = 0; i < couple1.length; i++) {
		if (couple1drunk[i][0] >= couple1drunk[i][1])
			bool1 = true;
	}
	var bool2 = false;
	for (var i = 0; i < couple2.length; i++) {
		if (couple2drunk[i][0] >= couple2drunk[i][1])
			bool2 = true;
	}

	if (bool1 && bool2)
		return true;
	return false;
}

function isGameLost()
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

	var bool1 = (couple1drunk[0][0] < couple1drunk[0][1] && couple1drunk[1][0] < couple1drunk[1][1]);
	var bool2 = (couple2drunk[0][0] < couple2drunk[0][1] && couple2drunk[1][0] < couple2drunk[1][1]);
	return bool1 && bool2;
}

function onAskGagner()
{
	var end = "Vous avez réussi à enrôler ";

	for (i = 0; i < equipe.length-1; i++) {
	    end += equipe[i] + ", ";
	}
	end += "et " + equipe[equipe.length-1] + ".";
	var strAttaque = (equipe.includes("taojim")) ? "Le lance-pierre de Taojim fit un joyeux carnage." : "Le boomerang de Lucrecia fut d'une sacrée vivacitée.";
	var strDefense = "En excellent stratège que vous êtes " + (equipe.includes("maelis")) ? "L'armure de mithrill centenaire de Maelis n'a laissé passer aucune flèche." : "La cotte de maille de Carnaum fut si épaisse que tous les Trolls s'y sont cassé les dents.";
	end += "Vous avez pu braver les tréfonds des gouffres les plus tumultueux, passant par moments du bon temps. " + strAttaque + strDefense + "De plus, votre sens du jugement " +
	"a su guider le groupe vers la lumière de la gloire. En route pour la taverne !";

	return end;
}

function onAskPerdre()
{
	return "Après être sortis de la taverne, vos coéquipiers plus saouls les uns que les autres, vous vous êtes retrouvés face à une grotte pourprée d'horreur. Vous avez su faire preuve de " +
					"bon sens, et avez décidé de vous carapater. Vous n'aviez aucune chance avec une telle équipe de bras cassés ! Allez vous remonter le moral à la taverne. Peut-être aurez-vous plus de chance avec un nouvel essai.";
}
