window.ngMemModule = angular.module('ngMem', [])
  .controller('HomeCtrl', function($rootScope) {
    var ctrl = this;
    ctrl.hello = "Hello";
    ctrl.items = [];
    var nextItemId = 0;

    ctrl.fireEvent  = function(name) {
      $rootScope.$broadcast(name);
    };

    ctrl.addItem = function() {
      ctrl.items.push({id: nextItemId});
      nextItemId++;
    };

    ctrl.clearItems = function() {
      ctrl.items = [];
    };


    ctrl.isItemEven = function(item) {
      return item.id % 2 == 0;
    };

    ctrl.isItemOdd = function(item) {
      return item.id % 2 == 1;
    };

  });
