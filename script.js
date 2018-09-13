

var app = angular.module('weather', []);
app.controller('myCtrl', function($scope, $http) {
    $scope.zip = "";
    $scope.datas = function(){
        
     var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + $scope.zip + ",us&APPID=764126d68f249066554911a9a05af466"
    
     $http({
        method : "GET",
        url : url
    })
    .then(function successCallback (response) {
        $scope.temp = Math.floor(response.data.main.temp * 9/5 - 459.67) + "º F";
        let e = response.data.weather;
        for(var i = 0; i < response.data.weather.length; i++){
            if(e[i].description == "overcast clouds"){
                $scope.img = "images2.jpg"
            }
        }
        return response.data;
    }, function errorCallback (response) {
        return response;
        
    })
};

});


   




