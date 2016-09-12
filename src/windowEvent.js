window.ngMemModule.directive("memWindowEvent", function() {

  var ElementEvent = {
    template: '<div style="width:200px;height:100px;">Changed Color: {{elementEventCtrl.updates}}<div>',
    scope: true,
    controller: function() {
      this.data = library.makeData();
      this.updates = 0;
    },
    controllerAs: 'elementEventCtrl',
    link: function(scope, element, attrs, ctrl) {

      function setElementBGColor() {
        scope.$evalAsync(function() {
          if(ctrl.data) {
            ctrl.updates++;
            library.setRandomBGColor(element.find('div')[0]);
          }
        });
      }

      window.addEventListener('resize', setElementBGColor);

      //scope.$on('$destroy', function() {
      //  window.removeEventListener('resize', setElementBGColor);
      //});
    }

  };


  return ElementEvent;
});
