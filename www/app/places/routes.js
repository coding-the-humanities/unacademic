(function(){
  var app = angular.module('unacademic.places');

  app.config(function($stateProvider) {
    $stateProvider.state('app.places', {
      url: '/places',
      abstract: true,
      templateUrl: 'app/places/views/places.html'
    });

    $stateProvider.state('app.places.add', {
      url: '/add',
      templateUrl: 'app/places/views/add.html',
      controller: "Add as places",
      resolve: {
        places: function(places){
          return places.getAll();
        }
      }
    });

    $stateProvider.state('app.places.new', {
      url: '/new',
      templateUrl: 'app/places/views/new.html',
      controller: "Add as places",
      resolve: {
        places: function(places){
          return places.getAll();
        }
      }
    });

  });
})();
