window.ngMemModule = angular.module('ngMem', [])
  .service('memLeakService', function(){
    return {
      isLeaky: true
    };
  })
  .controller('HomeCtrl', function($rootScope, memLeakService) {
    var ctrl = this;
    var nextItemId = 0;

    ctrl.hello = "Hello";
    ctrl.items = [];

    ctrl.leakService = memLeakService;

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
