var app = angular.module('weather', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.zip = "";
    $scope.today = new Date()
    $scope.datas = function(){
        
     var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + $scope.zip + ",us&APPID=764126d68f249066554911a9a05af466"
    
     $http({
        method : "GET",
        url : url
    })
    .then(function successCallback (response) {
        $scope.temp = Math.floor(response.data.main.temp * 9/5 - 459.67) + "º F";
        let e = response.data.weather;
        for(var i = 0; i < e.length; i++){
        
        var forecast = e[i].description.split(" ");    
        for(var q = 0; q < forecast.length; q++){
             forecast[q] = forecast[q].substring(0,1).toUpperCase() + forecast[q].substring(1);   
        }
        forecast = forecast.join(" ")
        $scope.description =  "Forecast: " + forecast;
        }
        $scope.mintemp = "Current Minimum Temp: " + Math.floor(response.data.main.temp_min * 9/5 - 459.67) + "º F";
        $scope.maxtemp = "Current Maximum Temp: " + Math.floor(response.data.main.temp_max * 9/5 - 459.67) + "º F";
        $scope.location = response.data.name;
        return response.data;
    }, function errorCallback (response) {
        return response;
        
    })



};


});



   




