            app.config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/', {
                    template: 'index.html'
                }).when('/downloads', {
                    templateUrl: 'html/downloads.html'
                }).when('/products', {
                    templateUrl: 'html/products.html'
                }).when('/biomes', {
                    templateUrl: 'html/products/biomes.html',
                    controller: "BiomeCTRL",
                    resolve: {
                        biomes: ["biomeService", function (biomeService) {
                            return biomeService.load();
                    }]
                    }
                }).otherwise({
                    redirectTo: '/'
                });
            }]);
