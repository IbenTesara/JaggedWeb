app.controller("BiomeCTRL", ["$scope", "biomes", function ($scope, biomes) {
    $scope.biomes = biomes.data;
    }]);
