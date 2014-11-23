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

    $stateProvider.state('app.userplaces.detail', {
      url: '/:placeId',
      templateUrl: 'app/user-places/views/details.html',
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
