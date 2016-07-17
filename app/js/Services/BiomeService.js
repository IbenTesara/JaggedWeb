app.service("biomeService", ["$http", function ($http) {
    this.load = function () {
        return $http({
            url: "http://localhost:3000/json/biomes.json"
        });
    }
    }]);
