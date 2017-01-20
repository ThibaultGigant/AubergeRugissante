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
	["_a objectifZZZ",	["je faire", "je dois faire", "objectif", "conseil", "conseille", "dois-je faire", "puis-je faire", "je peux faire"]],
	["_a proposeZZZ",	["propose", "tu veux", "veux-tu", "vous prendrez", "tu prendra", "veux tu", "vous voulez", "voulez-vous",
										"voulez vous", "voudrez", "voudrais", "aimerais", "je veux que", "on fait", "ca te dit"]],
	["_a TMM",			["dites m en plus", "dis m en plus", "et donc", "et alors", "expliquez", "explique", "quoi d autre", "comment", "c est quoi"]],
	["quêteZZZ",		["quete","voyage", "pepriple", "aventure", "quête", "expédition", "vadrouille", "chasse aux monstres",
						"quetes","voyages", "pepriples", "aventures", "quêtes", "expéditions", "vadrouilles", "chasses aux monstres"]],
	["aventurier",		["recrue","recrues","aventurier","soldat", "camarade", "equipier", "co-equipier", "coequipier", "glandu", "inconscient", "gars", "ami"]],
	["tavernier",		["tenancier", "aubergiste", "barman", "patron", "chef"]],
	["monsieur",		["monsieur","mr.", "mr", "msgr", "monseigneur", "seigneur"]],
	["madame",			["madame", "mm", "mme"]],
	["mademoiselle",	["mademoiselle","mlle.", "mlle"]],
	["saoulZZZ",		["saoul","bourre", "torche", "rond", "gris"]],
	["_a",				["que puis", "que dois", "parle moi", "rappelez moi", "je veux", "je voudrais", "donnez moi", "passez moi","combien", "quels", "quel", "quelles", "quelle", "quoi", "qu", "que fais", "que faites", "qui","c est un", "c est une", "c est de", "c est du"]],
	["_g",				["bonjour", "salut", "hola", "heho", "hohe", "eho", "ohe", "ca va"]],
	["_a boissonZZZ",	["va pour"]],
	["boissonZZZ",		["beuvrie", "boire","carte","boisson","boissons","biere", "choppe", "cru", "tonnelet", "tonneau", "vin", "gnôle", "binouze", "pinte", "litre", "bibine"]],
	["competenceZZZ",	["pouvoir","pouvoirs","competences","competence", "magie", "maniement", "maitrise","boule de feu", "psychique", "aider", "sais faire","capacites","capacite"]],
	["defenseZZZ",		["defense", "equipement", "armure", "protection", "fais quoi", "sais faire quoi", "bouclier", "protege", "proteger",
						"defenses", "equipements", "armures", "protections", "boucliers"]],
	["armeZZZ",			["arme", "epee", "force", "hache", "arbalete", "arc",
						"armes", "epees", "forces", "haches", "arbaletes", "arcs","combat"]],
	["bourseZZZ",		["bourse", "argent", "des sous", "de sous", "piece", "pognon", "monaie"]],
	["_a offreZZZ",		["offre", "tiens", "Tiens", "tien", "Tien", "tennez", "Tennez", "prends", "Prends", "prennez", "Prennez"]],
	["name",			["nom", "prenom", "appelle", "toi"]],
	["equipeZZZ",		["equipe", "troupe", "compagnie", "confrerie", "queteZZZ"]],
	["",				["la", "de", "le", "du", "un", "une", "coute", "coûte", "reste", "t-il", "donc", "dois"]],
	["type",			["race"]]

	];
BOT_basicSynonymList = BOT_basicSynonymList.concat(BOT_SynonymList);

var BOT_pluralList = [
		"lucres", "voudrais","gars","maelis", "sous", "aimerais", "dois", "puis"];

BOT_pluralExceptionList = BOT_pluralExceptionList.concat(BOT_pluralList);

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
	if(elem) { elem.style.border = borderdata; }
}

function tellMeMore(name) {
	switch (name) {
	case "Carnaum":
		return tellMeMoreCarnaum();
	case "Tao Jim":
		return tellMeMoreTaojim();
	case "Maelis":
		return tellMeMoreMaelis();
	case "Lucrecia":
		return tellMeMoreLucrecia();
	default:
		return "* Je crois que moi même j'ai pas compris ce que je viens de dire *";
	}

}

// Cyril'sage | your age | you (if attr ==_reference)
function BOT_expressTopicAttribute(tid,attr) {
	var thebotobject   = eval(BOT_theBotId);
	var thebottopicid  = thebotobject.topicId;
	var c = BOT_get(tid,"_class","VAL");
	     if (c == "user" && attr == "_reference") return("you")
	else if (tid == thebottopicid && attr == "_reference") return("me");
	else if (tid == thebottopicid) return(attr);
	else if (attr == "_reference") return(BOT_topicToName(tid))
	else if (c == "user") return("your "+attr)
	else return(BOT_topicToName(tid)+"'s "+attr)
}


// TODO update moods
function BOT_onGreet() {
	var thebotobject   = eval(BOT_theBotId);
	var thebottopicid  = thebotobject.topicId;
	var oldbotid,name,c;
	if(BOT_theReqTopic == thebottopicid ) {
		if (!BOT_theReqText.includes("bonjour")) {
			BOT_reqSay(false,"WARNING","BADAGENT",BOT_theReqTopic);
		}
		else
			BOT_reqSay(true,"HELLO","PING");
	}
	else {
		c = BOT_get(BOT_theReqTopic,"_class","VAL");
		if(c && c != "bot") BOT_reqSay(false,"WARNING","BADAGENT",BOT_theReqTopic);
		else {
			// switch bot
			var newbotid = BOT_get(BOT_theReqTopic,"_class","BOT");
			if(newbotid) {
				var newbotobject  = eval(newbotid);
				var newbottopicid = newbotobject.topicId;
				oldbotid       = BOT_theBotId;
				BOT_theBotId   = newbotid;
				BOT_theTopicId = newbottopicid;
				BOT_onSwitchBot(oldbotid,newbotid); // send event to application
				name = BOT_get(BOT_theReqTopic,"name","VAL");
				if(name) BOT_reqSay(true,"HELLO","HELLONAME",name);
				else  BOT_reqSay(true,"HELLO","HELLO");
			}
			else  BOT_reqSay(false,"CONFUSED","UNKNOWNERROR")
		}
	}
}

// often but not always, we have:
// arg1 = topicobject, action
// arg2 = attribute
// arg3 = result/value
function BOT_reqSay (success,emote,reason,arg1,arg2,arg3) {
	BOT_reqSuccess = success;
	BOT_reqEmote   = emote;
	var short = "";
	var long  = "";
	switch (reason) {
 	case "ATTRIBUTENOTFOUND":
		short += "Not found";
		long  += "I found no attribute "+arg2+" for "+BOT_expressTopic(arg1);
		break;
	case "ACTIONNOTFOUND":
		short += "Not found";
		long  += "I found no action "+arg2+" for "+BOT_expressTopic(arg1);
		break;
 	case "TAGNOTFOUND":
		short += "Not found";
		long  += "I found nothing for "+arg2+" for "+BOT_expressTopic(arg1);
		break;
	 case "FEELINGNOTFOUND":
		short += "Not found";
		long  += "I found no feeling "+arg2+" for "+BOT_expressTopic(arg1);
		break;
	case "RELATIONFOUND":
		short += "Not found";
		long  += "I found no relation "+arg2+" for "+BOT_expressTopic(arg1);
		break;
	case "NEEDSATTTRIBUTE":
		short += "No attribute";
		long  += "Command '"+BOT_theReqPerformative + "' needs an attribute name";
		if(BOT_reqHintMode) BOT_buildHintText("ATTRIBUTELIST");
		break;
	case "NEEDSACTION":
		short += "No action";
		long  += "Command '"+BOT_theReqPerformative + "' needs an action name";
		if(BOT_reqHintMode) BOT_buildHintText("ACTIONLIST");
		break;
	case "BADATTTRIBUTE":
		short += "Bad attribute";
		long  += "May be " + arg1 + " is not an attribute name";
		if(BOT_reqHintMode) BOT_buildHintText("ATTRIBUTELIST");
		break;
	case "BADACTION":
		short += "Bad action";
		long  += "May be " + arg1 + " is not an action name";
		if(BOT_reqHintMode) BOT_buildHintText("ACTIONLIST");
		break;
	case "BADAGENT":
		short += BOT_expressTopicAttribute(arg1, tellMeMore(BOT_get(BOT_theTopicId, "name", "VAL")));
		long  += BOT_expressTopicAttribute(arg1, tellMeMore(BOT_get(BOT_theTopicId, "name", "VAL")));
		//short += "Bad agent";
		//long  += "May be " + arg1 + " is not an agent name";
		if(BOT_reqHintMode) BOT_buildHintText("AGENTTLIST");
		break;
	 case "TELLRESULT": // managed by ask, how
		short += arg3;
		long  += arg3;
		break;
	case "THANKYOU":
		short += "Thanks";
		long  += "Thank you very much";
		break;
	case "USERLIKEREMEMBER":
		short += "I learn your liking";
		long  += "Thank you very much! I will remember that you like "+BOT_expressTopicAttribute(arg1,arg2);
		break;
	case "USERDISLIKEREMEMBER":
		short += "I learn your disliking";
		long  += "I will remember that you don't like "+BOT_expressTopicAttribute(arg1,arg2);
		break;
	case "HEU":
		short += "Heu..";
		long  += "Heu, I am not sure about "+ arg1;
                break;
	case "GOODNEWS":
		short += "Fine";
		long  += "I am happy to hear that";
                break;
	case "BADNEWS":
		short += "Too bad";
		long  += "I am sad to hear that";
		break;
	case "MAKESMEHAPPY":
		short += "Makes me happy";
		long  += "Now, that makes me feel happy";
		break;
	case "MAKESMESAD":
		short += "Makes me sad";
		long  += "That makes me sad suddenly";
		break;
	case "YOUAREIRONIC":
		short += "Its ironic";
		long  += "I am a bit puzzled because I think that you are being ironic";
		break;
	case "PING":
		short += "Hi";
		long  += "Yes, I am here";
		break;
	case "HELLO":
		short += "Hi";
		long  += "Hello, I am here";
		break;
	case "HELLONAME":
		short += "Hi";
		long  += "Hello, I am "+arg1;
		break;
	case "TOPICCANTDOACTION":
		short += "Can't do it";
		long  += "It is not possible to perform action "+arg1+ " with "+BOT_expressTopic(arg2) ;
                break;
        case "DONE":
		short += "Done";
		long  += "Action "+arg1+ " has been successfully executed";
		break;
	case "DONEWITHREPLY": // when an action returns a string its is replied
		short += arg1;
		long  += "the answer is: "+arg1;
		break;
	case "DONTREMEMBERLASTACTION":
		short += "Don't know how";
		long  += "I don't remember last performed action";
		break;
	case "CANTUNDO":
		short += "Can't undo";
		long  += "I am confused with topic "+ BOT_topicToName(arg2) + ", so I can't undo action "+arg1;
		break;
	case "NEEDSEXECUTEBEFORE":
		short += "Previous command is not 'x'";
		long  += "Sorry, to do that previous command must be 'execute'";
		break;
	case "USERQUITS":
		short += "Bye";
		long  += "Now this session is terminated. Bye Bye ...";
		break;
	case "USERSAIDNO":
		short += "Ok no";
		long  += "Hem, you said no...";
		break;
	case "USERSAIDYES":
		short += "Ok yes";
		long  += "Hem, you said no...";
		break;
	case "CONFIRMYESNO":
		short += "Confirm by yes or no";
		long  += "Hem, are you sure about that? just say Yes or No";
		break;
	case "CONFUSEDINDIALOG":
		short += "I am lost";
		long  += "Hem, Somehow, I got confused in the dialog. Can we start again?";
		break;
	case "VALUENEEDED":
		short += "Value needed";
		long  += "Yous should have provide an information";
		break;
	case "NONREQUIREDVALUE":
		short += "Not required";
		long  += "You said "+arg1+" but I don't know what to do about it";
		break;
	case "TELLWHY":
		short += arg3;
		long  += "Here is my best educated guess: "+ arg3;
		break;
	case "DONTKNOWWHY":
		short += "Don't know why";
		long  += "I don't know the reason why "+BOT_expressTopicAttribute(arg1,arg2)+" is like that";
		break;
	case "CANTSAYWHY":
		short += "Can't say why";
		long  += "I m sorry, I really can't say why things are like that";
		break;
	case "DONTKNOWHOW":
		short += "Don't know how to do";
		long  += "I don't know how one can perform action "+arg1;
		break;
	case "CANTSAYHOW":
		short += "Can't say how";
		long  += "I m sorry, I really can't answer upon how things should be carried out";
		break;
	case "FACTSTORED":
		short += "Fact learned";
		long  += "Thank you, I will remember that the "+arg1+" is "+arg3;
		break;
	case "BADFACTFORMAT":
		short += "Bad fact format";
		long  += "This command needs a fact of the form: [topic] attribute is value";
		break;
	case "NOFACTSABOUTBOT":
		short += "I Don't care";
		long  += "That's no use telling facts about ME!";
		break;
	case "FACTVERIFIED":
		short += "True";
		long  += "This fact is true";
		break;
	case "FACTNOTVERIFIED":
		short += "False";
		long  += "This fact is false";
		break;
	case "NOEXTENSIONSYET":
		short += "No extensions";
		long  += "Sorry, language extensions are not yet available";
		break;
	case "KNOWTOPIC":
		short += "I know about it";
		long  += "I am happy to say that I know "+BOT_expressTopic(arg1);
		break;
	case "DONTKNOWTOPIC":
		short += "I dont know about it";
		long  += "I am happy to say that I know nothing about "+BOT_expressTopic(arg1);
		break;
	case "KNOWATTRIBUTE":
		short += "I know about it";
		long  += "I am happy to say that I know about "+ BOT_expressTopicAttribute(arg1,arg2);
		break;
	case "DONTKNOWATTRIBUTE":
		short += "I don't know about it";
		long  += "I am sorry to say that I don't know about "+ BOT_expressTopicAttribute(arg1,arg2);
		break;
	case "KNOWACTION":
		short += "I know it";
		long  +=  "I am happy to say that I know about action "+arg1+" for "+ BOT_expressTopic(arg2);
		break;
	case "DONTKNOWACTION":
		short += "I don't know about it";
		long  += "I am sorry to say that I don't know any action "+arg1+" for " +BOT_expressTopic(arg2);
		break;
	case "COMMANDNEEDSARGUMENT":
		short += "Needs more";
		long  += "I am sorry to say that command '"+arg1+"' needs more information. For example: "+arg2;
		break;
	case "BADFEELING":
		short += "Bad feeling";
		long  += "May be "+arg1+" is not a known feeling";
		if(BOT_reqHintMode) BOT_buildHintText("FEELINGLIST");
		break;
	case "NOFEELING":
		short += "No feeling";
		long  += "Sorry to say that command 'f' needs a feeling name";
		if(BOT_reqHintMode) BOT_buildHintText("FEELINGLIST");
		break;
	case "USERPOSITIVENEWS":
		short += "Good for you";
		long  += "I am such happy to hear that about you";
		break;
	case "USERNEGATIVENEWS":
		short += "Bad for you";
		long  += "I am very sorry to hear that about you";
		break;
	case "CONFIRM":
		short += "Yes";
		long  += "Yes! Certainly";
		break;
	case "CONTRADICT":
		short += "No";
		long  += "No! On the contrary";
		break;
	case "NOTPARTICULARLY":
		short += "Not really";
		long  += "Well yes but not particularly ...";
		break;
	case "BADJUDGEMENTWORD":
		short += "Bad judgement word";
		long  += "May be "+arg1+" is not a known judgement word";
		if(BOT_reqHintMode) BOT_buildHintText("JUDGEMENTLIST");
		break;
	case "NOJUDGEMENTWORD":
		short += "No judgement";
		long  += "You should provide a judgement word for command 'j'";
		if(BOT_reqHintMode) BOT_buildHintText("JUDGEMENTLIST");
		break;
	case "NOUSERJUDGEMENT":
		short += "Not handled";
		long  += "Sorry there is no support for handling user's judjements";
		break;
	case "USERREPEATJUDGEMENT":
		short += "Judgement repeated";
		long  += "You have just repeated the same judgement on "+ BOT_expressTopicAttribute(arg1,arg2);
		break;
	case "USERCHANGEJUDGEMENT":
		short += "Judgement reversed";
		long  += "I note that you have changed your mind about " + BOT_expressTopicAttribute(arg1,arg2);
		break;
	case "USERNEWPOSITIVEJUDGEMENT":
		short += "I learn your positive judgement";
		long  += "I am happy to hear and bear in mind your positive judgement on " + BOT_expressTopicAttribute(arg1,arg2);
		break;
	case "USERNEWNEGATIVEJUDGEMENT":
		short += "I learn your negative judgement";
		long  += "I am sorry to hear and bear in mind your negative judgement on " + BOT_expressTopicAttribute(arg1,arg2);
		break;
	case "THANKSFORSUGGESTION":
		short += "Suggestion granted";
		long  += "I thank you for your suggestion to do action " + arg1 +", I will use this advice";
		break;
	case "TAKEOBJECTION":
		short += "Objection taken";
		long  += "I will take your objection not to do action " + arg1;
		break;
	case "TAKEINTENTION":
		short += "Intention taken";
		long  += "Ok I take notice of your intention to do action " + arg1;
		break;
	case "ACTIONPOSSIBLE":
		short += "It is possible";
		long  += "Yes, action "+arg2+" is possible with "+BOT_expressTopic(arg1);
		break;
	case "ACTIONIMPOSSIBLE":
		short += "Not possible";
		long  += "Sorry but action "+arg2+" is possible with "+BOT_expressTopic(arg1);
		break;
	case "NYI":
		short += "Not yet available";
		long  += "I am sorry to say that command '"+arg1+"' is not yet available";
		break;
	case "UNKNOWNERROR":
		short += "Error";
		long  += "I am confused because of some inside error...";
		break;
 	default: alert("ERROR: BOT_reqSay"); break;
	}
	BOT_reqFilled = true;
	BOT_reqAnswerShort = short;
	BOT_reqAnswerLong  = long;
	return success
}



// Bonjour, Je recherche des coéquipiers pour faire équipe --
// J'aimerais que tu rejoignes mon equipe --
// Parle moi donc de toi (alors)
// Qu'est ce que tu fais la ?
// Et tu sais faire quoi
// Et que saurais tu faire ?

// TMM -> sinon OnAsk
// quelle est ta technique de défense ?

// Je veux que
// Serais-tu intéressé de rejoindre mon équipe

// Qui a une arme : armure ...
// Ca defonce les trolls ?
// rejoins mon equipe
// Je veux devenir plus populaire
<<<<<<< HEAD

// je voudrais
// puis-je avoir la carte
// as-tu un pouvoir spécial
// Ca t'arrives souvent ?
// ca sert a quoi
// comment tu t'appelles ?
=======
>>>>>>> c0ed85ec04beb1bea5d43fea6869f6b83a6e1731
