const maxApi = require("max-api");
const weather = require('openweather-apis');

/*//for text to voice from Brian Ellis Sound (https://www.youtube.com/watch?v=eztLFYkJqz8)
const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');
const { StringDecoder } = require('string_decoder');
	
//Voice RSS key (voicerss.org)
var myKey = "25c6815d73b343ef84267adfd15d3bf8";
maxApi.addHandler('setKey', (key) => {
	myKey = key;
});*/ // did not work

weather.setAPPID("e8d771dba25fa77cf010c6ec658e5ccc");
weather.setLang('en');
weather.setUnits('imperial');

//washington
//47 N 122 W
maxApi.addHandler("olympia", () => {
    weather.setCity('olympia');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//idaho
//43 N 116 W
maxApi.addHandler("boise", () => {
    weather.setCity('boise');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//montana
//46 N 112 W
maxApi.addHandler("helena", () => {
    weather.setCity('helena');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//north dakota
//46 N 100 W
maxApi.addHandler("bismarck", () => {
    weather.setCity('bismarck');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//minnesota
//44 N 93 W
maxApi.addHandler("minneapolis", () => {
    weather.setCity('minneapolis');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//wisconsin
//43 N 87 W
maxApi.addHandler("milwaukee", () => {
    weather.setCity('milwaukee');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//michigan
//42 N 84 W
maxApi.addHandler("lansing", () => {
    weather.setCity('lansing');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//new york
//42 N 73 W
maxApi.addHandler("albany", () => {
    weather.setCity('albany');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//vermont
//44 N 72 W
maxApi.addHandler("montpelier", () => {
    weather.setCity('montpelier');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//new hampshire
//43 N 71 W
maxApi.addHandler("hooksett", () => {
    weather.setCity('hooksett');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//maine
//44 N 70 W
maxApi.addHandler("lewiston", () => {
    weather.setCity('lewiston');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//oregon
//45 N 122 W
maxApi.addHandler("portland", () => {
    weather.setCity('portland');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//wyoming
//41 N 104 W
maxApi.addHandler("cheyenne", () => {
    weather.setCity('cheyenne');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//south dakota
//44 N 100 W
maxApi.addHandler("pierre", () => {
    weather.setCity('pierre');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//nebraska
//40 N 96 W
maxApi.addHandler("lincoln", () => {
    weather.setCity('lincoln');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//iowa
//42 N 93 W
maxApi.addHandler("ames", () => {
    weather.setCity('ames');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//illinois
//39 N 88 W
maxApi.addHandler("decatur", () => {
    weather.setCity('decatur');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//indiana
//39 N 86 W
maxApi.addHandler("indianapolis", () => {
    weather.setCity('indianapolis');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//ohio
//39 N 82 W
maxApi.addHandler("columbus", () => {
    weather.setCity('columbus');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//pennsylvania
//40 N 76 W
maxApi.addHandler("harrisburg", () => {
    weather.setCity('harrisburg');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//massachusetts
//42 N 71 W
maxApi.addHandler("boston", () => {
    weather.setCity('boston');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//new jersey
//40 N 74 W
maxApi.addHandler("trenton", () => {
    weather.setCity('trenton');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//connecticut
//41 N 72 W
maxApi.addHandler("hartford", () => {
    weather.setCity('hartford');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//rhode island
//41 N 71 W
maxApi.addHandler("providence", () => {
    weather.setCity('providence');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//california
//38 N 121 W
maxApi.addHandler("sacramento", () => {
    weather.setCity('sacramento');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//nevada
//39 N 119 W
maxApi.addHandler("carson city", () => {
    weather.setCity('carson city');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//utah
//40 N 111 W
maxApi.addHandler("salt lake city", () => {
    weather.setCity('salt lake city');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//colorado
//39 N 104 W
maxApi.addHandler("denver", () => {
    weather.setCity('denver');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//kansas
//39 N 95 W
maxApi.addHandler("topeka", () => {
    weather.setCity('topeka');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//missouri
//38 N 92 W
maxApi.addHandler("jefferson city", () => {
    weather.setCity('jefferson city');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//kentucky
//38 N 84 W
maxApi.addHandler("lexington", () => {
    weather.setCity('lexington');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//west virginia
//38 N 82 W
maxApi.addHandler("huntington", () => {
    weather.setCity('huntington');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//virginia
//37 N 77 W
maxApi.addHandler("richmond", () => {
    weather.setCity('richmond');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//maryland
//38 N 76 W
maxApi.addHandler("annapolis", () => {
    weather.setCity('annapolis');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//delaware
//39 N 75 W
maxApi.addHandler("dover", () => {
    weather.setCity('dover');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//arizona
//33 N 112 W
maxApi.addHandler("phoenix", () => {
    weather.setCity('phoenix');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//new mexico
//35 N 106 W
maxApi.addHandler("los alamos", () => {
    weather.setCity('los alamos');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//oklahoma
//35 N 97 W
maxApi.addHandler("oklahoma city", () => {
    weather.setCity('oklahoma city');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//arkansas
//34 N 92 W
maxApi.addHandler("little rock", () => {
    weather.setCity('little rock');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//tenessee
//36 N 86 W
maxApi.addHandler("nashville", () => {
    weather.setCity('nashville');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//north carolina
//35 N 78 W
maxApi.addHandler("raleigh", () => {
    weather.setCity('raleigh');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//texas
//30 N 97 W
maxApi.addHandler("austin", () => {
    weather.setCity('austin');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//louisiana
//30 N 91 W
maxApi.addHandler("baton rouge", () => {
    weather.setCity('baton rouge');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//mississippi
//33 N 89 W
maxApi.addHandler("kosciusko", () => {
    weather.setCity('kosciusko');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//alabama
//32 N 86 W
maxApi.addHandler("millbrook", () => {
    weather.setCity('millbrook');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//georgia
//33 N 84 W
maxApi.addHandler("atlanta", () => {
    weather.setCity('atlanta');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//south carolina
//34 N 81 W
maxApi.addHandler("columbia", () => {
    weather.setCity('columbia');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

//florida
//30 N 84 W
maxApi.addHandler("tallahassee", () => {
    weather.setCity('tallahassee');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

/*//from Brian Ellis Sound (https://www.youtube.com/watch?v=eztLFYkJqz8)
maxApi.addHandler('say', (words) => {
	const urlWords = encodeURI(words)
	const fileWords = words.replace(/ /g,"_").replace(/\./g,"").replace(/\!/g,"").replace(/\?/g,"");
	fileName = "tts_"+fileWords+".wav"
	if (fs.existsSync(fileName)) {
		// they've already asked for it and we can just return what they did before
		maxApi.outlet("exists "+fileName);
		return;
  }
	var errorMessage = "";
	var isError = false;
	const file = fs.createWriteStream(fileName);
	const request = http.get("http://api.voicerss.org/?key="+myKey+"&hl=en-us&src="+words, function(response) {
		response.pipe(file);	
		response.on('data', function (chunk) {
			const decoder = new StringDecoder('utf8');
	    isError = decoder.write(chunk).startsWith("ERROR")
	    errorMessage = decoder.write(chunk)
	  });
	  response.on('end', function () {
	  	if(isError){
	  		maxApi.outlet("error "+errorMessage);
	  	}else{
				maxApi.outlet("success "+fileName);
	  	}
	  	console.log("isError: "+isError);
	  });	
	
	});
});*/ // did not work