(function(){
  var app = angular.module('unacademic.objectives');

  app.controller('EditUserObjectives', function(authentication, $state, $ionicActionSheet, session, objectives){

    var vm = this;

    vm.all = objectives;

    vm.signIn = signIn;
    vm.add = add;
    vm.remove = remove;
    vm.showOptions = showOptions;

    function showOptions(){
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: 'Add New' },
          { text: 'Add Existing' },
          { text: 'Remove Existing'}
        ],
        cancelText: 'Cancel',
        cancel: function() {
          hideSheet();
        },
        buttonClicked: function(index) {
          if(index === 0){
            $state.go('app.objectives.new');
          }
          if(index === 1){
            $state.go('app.objectives.add');
          }
          if(index === 2){
            $state.go('app.profile');
          }
          return true;
        }
      });
    }

    function signIn(){
      authentication.signIn();
    }

    function add(id){
      objectives[id].added = true;
      session.user.addObjective(id);
    }

    function remove(id){
      objectives[id].added = false;
      session.user.removeObjective(id);
    }

    return vm;
  });
})();
