// =========  Initialization of bots and declaration of topics  ==========
var carnaumBot = new BOT_makeBot("carnaumBot","carnaumTopic");
var maelisBot = new BOT_makeBot("maelisBot","maelisTopic");
var taojimBot = new BOT_makeBot("taojimBot","taojimTopic");
var lucreciaBot = new BOT_makeBot("lucreciaBot","lucreciaTopic");
var tavernierBot = new BOT_makeBot("tavernierBot","tavernierTopic");
BOT_declareTopics(["userTopic"]); 

BOT_theBotId		= "tavernierBot";		// sets current bot id 
BOT_theTopicId		= "tavernierTopic";		// sets current topic id
BOT_theUserTopicId	= "userTopic";		// sets topic of current user id



// ========= common variables ================//
var drunk_sentences = ["Zzzzz", "Heuu...", "bwork", "Hic!", "Gnouf", "Slurp", "Gnalaacool"];

var BOT_SynonymList	=  [
	["_a TMM",			["dites m en plus", "dis m en plus", "et donc", "et alors", "expliquez", "explique", "quoi d autre", "comment", "c est quoi"]],
	["quêteZZZ",		["quete","voyage", "pepriple", "aventure", "quête", "expédition", "vadrouille", "chasse aux monstres"]],
	["aventurier",		["aventurier","soldat", "camarade", "equipier", "co-equipier", "coequipier", "glandu", "inconscient", "gars", "ami"]],
	["tavernier",		["tenancier", "aubergiste", "barman", "patron", "chef"]],
	["monsieur",		["monsieur","mr.", "mr", "msgr", "monseigneur", "seigneur"]],
	["madame",			["madame", "mm", "mme"]],
	["mademoiselle",	["mademoiselle","mlle.", "mlle"]],
	["saoulZZZ",		["saoul","bourre", "torche", "rond", "gris"]],
	["_a",				["quel", "quelle", "quoi", "qu", "que fais", "que faites", "qui","c est un", "c est une", "c est de", "c est du"]],
	["_g",				["bonjour", "salut", "hola", "heho", "hohe", "eho", "ohe", "ca va"]],
	["boissonZZZ",		["boisson","biere", "choppe", "cru", "tonnelet", "tonneau", "vin", "gnôle", "binouze", "pinte", "litre"]],
	["competenceZZZ",	["competence", "magie", "maniement", "maitrise","boule de feu", "psychique", "aider", "sais faire"]],
	["defenseZZZ",		["defense", "equipement", "armure", "protection", "fais quoi", "sais faire quoi", "bouclier"]],
	["armeZZZ",			["arme", "epee", "force", "hache", "arbalete", "arc"]]
	//["",				["tien", "tiens", "la", "de", "le", "du", "un", "une"]]

	];
BOT_basicSynonymList = BOT_basicSynonymList.concat(BOT_SynonymList);



// ====================================================================
//        EVENTS  HANDLERS & REQUESTS SPECIFIC POSTPROCESSING 
// ====================================================================


function BOT_onSwitchBot(oldbotid,newbotid) {
	var leftimage = document.getElementById("leftimage");
	var rightimage = document.getElementById("rightimages");
	var toMove = document.getElementById(oldbotid);
	var toGet = document.getElementById(newbotid);

	toMove.parentNode.removeChild(toMove);
	toGet.parentNode.removeChild(toGet);

	leftimage.appendChild(toGet);
	rightimage.appendChild(toMove);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



function COUNTER_frameBot(botid,borderdata) {
	var elem, elemid;
	elemid = "image" + botid.substring(0, botid.indexOf("Bot"));
	elem = document.getElementById(elemid);
	if(elem) { elem.style.border = borderdata}
}