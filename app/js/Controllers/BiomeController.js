app.controller("BiomeCTRL", ["$scope", "biomes", function ($scope, biomes) {
    $scope.biomes = biomes.data;
    $scope.currentBiome = biomes.data[0];
    $scope.getBiome = function (id) {
        for (var i = 0; i < biomes.data.length; i++) {
            if (biomes.data[i].ID === id) {
                $scope.currentBiome = biomes.data[i];
            }
        }
    };
    $scope.currentDiv = "info";
    $scope.setCurrentDiv = function (div) {
        $scope.currentDiv = div;
    }
    }]);
