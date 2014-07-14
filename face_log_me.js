exports.action = function(data, callback, config, SARAH){
console.log('==============================================================================================================================================================================================');
// il semblerait que se soit le mouvement qui declenche la generation/ajout dans profile.json
//[15:51:28] [PROFILE]	  [{"Timestamp":"2013-10-26T23:50:51.8583462+02:00",
//							"Name":"michaël",
//							"Pitch":0.0,
//							"x":0.0,
//							"y":0.0,
//							"z":0.0,
//							"Mood":0.0,
//							"Height":0.0}]	
	
	//console.log('sarah contex : ' + SARAH.remote());
	
	// var profile = false;
	// for (var p in SARAH.context.profiles){
	// if (p.Name != data.profile) continue;
	// console.log('Valeur de p : ' + p);
	// profile = p; break;
	// }
	
	// si p = false c'est que le fichier json est vide.
	var profile = false;
	//var p = 0;
	for (p in SARAH.context.profiles){
	console.log('INFOS : ' + p);
	if (p.Name != data.profile) continue;
	var txt=txt + SARAH.context.profiles[p];
	console.log('Valeur de p on a un name qui match avec le json : ' + txt);
	profile = p.Name; break;
	}
	
	console.log('INFOS : ' + profile);
	
	// var person={fname:"John",lname:"Doe",age:25}; 
	// for (x in person)
	// {
	// txt=txt + person[x];
	// }
	
	
	console.log('sarah context profiles Timestamp: ' + SARAH.context.profiles[p].Timestamp);
	console.log('sarah context profiles Name   : ' + SARAH.context.profiles[p].Name);
	console.log('sarah context profiles Pitch  : ' + SARAH.context.profiles[p].Pitch);
	console.log('sarah context profiles x      : ' + SARAH.context.profiles[p].x);
	console.log('sarah context profiles y      : ' + SARAH.context.profiles[p].y);
	console.log('sarah context profiles z      : ' + SARAH.context.profiles[p].z);
	console.log('sarah context profiles Mood   : ' + SARAH.context.profiles[p].Mood);
	console.log('sarah context profiles Height : ' + SARAH.context.profiles[p].Height);
	
	//console.log('profile.name = ' + profile);
	
	
   console.log('info face log me , profile envoyer dans la requette : ' + data.profile);
   //console.log('.prop id1 : '+ config.modules.face_log_me.id1);
   
   //recuperation du profile
   var profile = data.profile
   //Recuperation de l'identifiant dans .prop : id1
   var identifiant = config.modules.face_log_me.id1
   
   //Recherche dun caractere underscor
   var resultat = profile.search('_')
   //si resultat >= a 0 on a un underscore dans la chaine on peut parser : ca permet de detecter lesprofil Unknow
   if (resultat >= 0 ){
	//on parse le nom de profile pour le unknow
	var profile_parse = profile.split('_'); // this is an array containing the items
    var var1=profile_parse[0]; //index 0 du tableau
    }
    else
    {
    var var1=profile;
    }

	//usage du profile reconut : si egal a l'identifiant definis dans le portlet (id1)
	if (var1 == identifiant){
	//Construction de la variable tts a vocaliser
	var var_tts = 'Bonjour ,' + data.profile + ', cette identifiant est enregistrer dans le pleuguine , vous êtes autoriser.' ;
	console.log('Face profile en cour : ' + data.profile);
	return callback({'tts' : var_tts});
	}
	
	//usage du profile reconut : Si s'est un profile inconnut (jamais enregistrer)
	if (var1 == 'Unknow'){
	//Construction de la variable tts a vocaliser
	var var_tts = 'Ce profile est inconnue , vous nette pas authoriser ! , ou , positionné vous devant la caméra.';
	console.log('Face profile en cour : ' + data.profile);
	return callback({'tts' : var_tts});
	}
	
	//usage du profile reconut : Si s'est un profile enregistrer , mais dont l'identifiant n'est pas definis dans le portlet
	if ((var1 != 'Unknow') || (var1 != identifiant) ){
	//Construction de la variable tts a vocaliser
	var var_tts = 'Ce profile est enregistrer , mais cette identifiant nez pas definis dans le pleugine  !';
	console.log('Face profile en cour : ' + data.profile);
	return callback({'tts' : var_tts});
	}
  callback({});
}
