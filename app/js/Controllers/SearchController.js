app.controller('SearchCTRL', function($scope,$http){
    
    var species = [{"firstName" : "Deinonychus", "secondName" : "antirrhopus", "description" : "Deinonychus antirrhopus is one of the best-known dromaeosaurid species, and is a close relative of the smaller Velociraptor, which is found in younger, Late Cretaceous–age rock formations in Central Asia. ", "date" : "TBR", "link" : "x"}, {"firstName" : "Austroraptor", "secondName" : "cabazai","description" : "Austroraptor is an extinct genus of dromaeosaurid dinosaur that lived about 70 million years ago during the Cretaceous Period in what is now modern Argentina.", "date" : "TBR", "link" : "x"}, {"firstName" : "Velociraptor", "secondName" : "mongoliensis","description" : "Austroraptor is an extinct genus of dromaeosaurid dinosaur that lived about 70 million years ago during the Cretaceous Period in what is now modern Argentina.", "date" : "TBR", "link" : "x"}];
    
 
    $scope.species = species;
    
})