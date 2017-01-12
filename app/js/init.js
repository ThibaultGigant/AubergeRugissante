// =========  Initialization of bots and declaration of topics  ==========
var carnaumBot = new BOT_makeBot("carnaumBot","carnaumTopic");
var maelisBot = new BOT_makeBot("maelisBot","maelisTopic");
var taojimBot = new BOT_makeBot("taojimBot","taojimTopic");
var lucreciaBot = new BOT_makeBot("lucreciaBot","lucreciaTopic");
BOT_declareTopics(["userTopic"]); 

BOT_theBotId		= "carnaumBot";		// sets current bot id 
BOT_theTopicId		= "carnaumTopic";		// sets current topic id
BOT_theUserTopicId	= "userTopic";		// sets topic of current user id



// ========= common variables ================//
var drunk_sentences = ["Zzzzz", "Heuu...", "bwork", "Hic!", "Gnouf", "Slurp", "Gnalaacool"];

var BOT_SynonymList	=  [
	["_a TMM",			["dites m en plus", "et donc", "et alors", "expliquez", "quoi d'autre"]],
	["quête",			["voyage", "pépriple", "aventure", "quête", "expédition", "vadrouille", "chasse aux monstres"]],
	["aventuriers",		["soldats", "camarades", "équipiers", "co-équipiers", "coéquipiers", "glandus", "inconscients", "gars", "amis"]],
	["tavernier",		["tenancier", "aubergiste", "barman", "patron", "chef"]],
	["boisson",			["bière", "vin", "gnôle", "binouze", "chope", "pinte", "tonnelet", "tonneau", "litre"]],
	["monsieur",		["mr.", "mr", "m.", "msgr.", "msgr", "monseigneur", "seigneur"]],
	["madame",			["mm.", "mm", "mme.", "mme"]],
	["mademoiselle",	["mlle.", "mlle"]],
	["saoul",			["bourré", "torché", "rond", "gris"]],
	["_a",				["quel", "quelle", "quoi", "qu'", "que", "qui"]]
	];
BOT_basicSynonymList = BOT_basicSynonymList.concat(BOT_SynonymList);



// ====================================================================
//        EVENTS  HANDLERS & REQUESTS SPECIFIC POSTPROCESSING 
// ====================================================================


function BOT_onSwitchBot(oldbotid,newbotid) {
	COUNTER_frameBot(oldbotid,"0px");
	COUNTER_frameBot(newbotid,"4px solid yellow");
}



function COUNTER_frameBot(botid,borderdata) {
	var elem, elemid;
	elemid = "image" + botid.substring(0, botid.indexOf("Bot"));
	elem = document.getElementById(elemid);
	if(elem) { elem.style.border = borderdata}
}