window.ngMemModule.directive("memItem", function() {

  var ElementEvent = {
    template: '<span style="display:inline-block;padding:2px;margin:1px;border: 1px solid blue;">{{itemCtrl.id}}</span>',
    scope: true,
    bindToController: {
      id: '='
    },
    controller: function() {
      var ctrl = this;
      ctrl.data = library.makeData();
    },
    controllerAs: 'itemCtrl'
  };


  return ElementEvent;
});
