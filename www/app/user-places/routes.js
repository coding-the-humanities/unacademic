(function(){
  var app = angular.module('unacademic.userplaces');

  app.config(function($stateProvider) {

    $stateProvider.state('app.userplaces', {
      url: '/user-places',
      abstract: true,
      templateUrl: 'app/user-places/views/user-places.html'
    });

    $stateProvider.state('app.userplaces.index', {
      url: '/index',
      templateUrl: 'app/user-places/views/index.html',
      controller: "Index as places"
    });

    $stateProvider.state('app.userplaces.edit', {
      url: '/edit',
      templateUrl: 'app/user-places/views/edit.html',
      controller: "EditUserPlaces as places",
      resolve: {
        places: function(userPlaces){
          return userPlaces.getAll();
        }
      }
    });
  });
})();
