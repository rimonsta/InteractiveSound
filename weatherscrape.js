const maxApi = require("max-api");
const weather = require('openweather-apis');

weather.setAPPID("e8d771dba25fa77cf010c6ec658e5ccc");
weather.setLang('en');
weather.setUnits('imperial');

maxApi.addHandler("olympia", () => {
    weather.setCity('olympia');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("boise", () => {
    weather.setCity('boise');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("bismarck", () => {
    weather.setCity('bismarck');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("minneapolis", () => {
    weather.setCity('minneapolis');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("madison", () => {
    weather.setCity('madison');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("lansing", () => {
    weather.setCity('lansing');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("albany", () => {
    weather.setCity('albany');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("montpelier", () => {
    weather.setCity('montpelier');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("nashua", () => {
    weather.setCity('concord');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});

maxApi.addHandler("lewiston", () => {
    weather.setCity('lewiston');
    weather.getAllWeather(function(err, JSONObj){
        maxApi.outlet(JSONObj);
    });
});