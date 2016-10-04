window.ngMemModule = angular.module('ngMem', [])
  .service('memLeakService', function(){
    return {
      isLeaky: true
    };
  })
  .controller('HomeCtrl', function($rootScope, memLeakService) {
    var ctrl = this;
    var nextItemId = 0;
    var nextCompileItemId = 0;

    ctrl.items = [];
    ctrl.compileItems = [];
    ctrl.itemContent='<span ng-init="value=0" ng-click="value=value+1">Click me to increment! <b>{{value}}</b></span>';

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
      return item.id % 2 === 0;
    };

    ctrl.isItemOdd = function(item) {
      return item.id % 2 === 1;
    };

    ctrl.addCompileItem = function(content) {
      ctrl.compileItems.push({id: nextCompileItemId, content: content});
      nextCompileItemId++;
    };

  });
