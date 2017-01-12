// =========  Initialization of bots and declaration of topics  ==========
var carnaumBot = new BOT_makeBot("carnaumBot","carnaumTopic");
var maelisBot = new BOT_makeBot("maelisBot","maelisTopic");
BOT_declareTopics(["userTopic"]); 

BOT_theBotId		= "carnaumBot";		// sets current bot id 
BOT_theTopicId		= "carnaumTopic";		// sets current topic id
BOT_theUserTopicId	= "userTopic";		// sets topic of current user id



// ========= common variables ================//
var drunk_sentences = ["Zzzzz", "Heuu...", "bwork", "Hic!", "Gnouf", "Slurp", "Gnalaacool"];



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