exports.action = function(data, callback, config, SARAH){
   
   console.log('info face log me : ' + data.profile);
   //console.log('.prop id1 : '+ config.modules.face_log_me.id1);
   
   //recuperation du profile
   var profile = data.profile
   //Recuperation de l'identifiant dans .prop : id1
   var identifiant = config.modules.face_log_me.id1
   
   //Recherche dun caractere underscor
   var resultat = profile.search('_')
   
   //si resultat superieur ou = a 0 on a un underscore dans la chaine on peut parser
   if (resultat >= 0 ){
	//on parse le nom de profile pour le unknow
	var profile_parse = profile.split('_'); // this is an array containing the items
    var var1=profile_parse[0]; //index 0 du tableau
    }
    else
    {
    var var1=profile;
    }

	//usage du profile reconut 
	if (var1 == identifiant){
	//Construction de la variable tts a vocaliser
	var var_tts = 'Bonjour ,' + data.profile + '.';
	console.log('Face profile en cour : ' + data.profile);
	return callback({'tts' : var_tts});
	}
	
	//usage du profile reconut 
	if (var1 == 'Unknow'){
	//Construction de la variable tts a vocaliser
	var var_tts = 'Ce profile est inconnue , vous nette pas authoriser !';
	console.log('Face profile en cour : ' + data.profile);
	return callback({'tts' : var_tts});
	}
  callback({});
}
