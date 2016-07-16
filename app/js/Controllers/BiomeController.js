app.controller('BiomeCTRL', function ($scope, $http) {
    var list=[];
    $http.get('http://localhost:3000/json/biomes.json').success(function (data) {
        angular.copy(data,list);
    });
    $scope.biomes = list;
})