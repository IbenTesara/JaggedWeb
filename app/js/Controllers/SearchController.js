app.controller('SearchCTRL', function($scope,$http){
    
    var species = [{"firstName" : "Deinonychus", "secondName" : "antirrhopus", "description" : "Deinonychus antirrhopus is one of the best-known dromaeosaurid species, and is a close relative of the smaller Velociraptor, which is found in younger, Late Cretaceous–age rock formations in Central Asia. ", "continent":"North-America", "location": "Montana-Utah-Wyoming-Oklahoma", "food" : "Carnivore", "date" : "TBR", "link" : "x"}, {"firstName" : "Austroraptor", "secondName" : "cabazai","description" : "Austroraptor is an extinct genus of dromaeosaurid dinosaur that lived about 70 million years ago during the Cretaceous Period in what is now modern Argentina.", "continent":"South-America", "location": "Argentina", "food" : "Piscivore" ,"date" : "TBR", "link" : "x"}, {"firstName" : "Velociraptor", "secondName" : "mongoliensis","description" : "Velociraptor is a genus of dromaeosaurid theropod dinosaur that lived approximately 75 to 71 million years ago during the later part of the Cretaceous Period..","continent":"Asia", "location": "Mongolia", "food" : "Carnivore", "date" : "TBR", "link" : "x"}];
    
 
    $scope.species = species;
    
})