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
        places: function(userPlaces){
          return userPlaces.getAll();
        }
      }
    });

    $stateProvider.state('app.places.new', {
      url: '/new',
      templateUrl: 'app/places/views/new.html',
      controller: "Add as places",
      resolve: {
        places: function(userPlaces){
          return userPlaces.getAll();
        }
      }
    });

    $stateProvider.state('app.places.detail', {
      url: '/:placeId',
      templateUrl: 'app/places/views/details.html',
      controller: "Details as place",
      resolve: {
        place: function($stateParams, $q, userPlaces, session, Place){
          var deferred = $q.defer();
          var placeId = $stateParams.placeId;

          userPlaces.get(session.user, placeId).then(function(data){
            var place = new Place(data);
            deferred.resolve(place);
          });
          return deferred.promise;
        }
      }
    });
  });
})();
