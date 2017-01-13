// =======================  TOPIC USER  ========================
var userTopic = [
	// INFO 
	[["KEY", "_class"],			["VAL", "user"]],
	[["KEY", "_reference"],		["VAL", ["j", "je","moi", "me", "aventurier"]]],
	[["KEY", "type"],			["VAL", ["person"]]],
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
	// REL
	[["KEY", "relative"],		["VAL", []]] // none
];

var stockCruAventurier = 0;
var stockVinAventurier = 0;
var stockBiereAventurier = 0;
var stockBibineAventurier = 0;
var bourseAventurier = 45;

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