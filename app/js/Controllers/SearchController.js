app.controller('SearchCTRL', function($scope,$http){
    
 
    
    $http.get('http://localhost:3000/json/paraves.json')
    .success(function(data){
        $scope.species = data;
    })
    
})