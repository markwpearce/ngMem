angular.module('ngMem').directive("memCompileDirective", function($compile, memLeakService) {

  var CompileDirective = {
    template: '<div><div>',
    scope: {},
    bindToController: {
      tag: '=',
      content: '='
    },
    controller: function() {
      this.data = library.makeData();
      this.updates = 0;
    },
    controllerAs: 'compileDirectiveCtrl',
    link: function(scope, element, attrs, ctrl) {
      var htmlToAdd = angular.element('<div></div>');

      if(memLeakService.isLeaky) {
        $compile(ctrl.content)(scope);
      }

      var compiledElement = $compile(ctrl.content)(scope);
      htmlToAdd.append(compiledElement);
      element.append(htmlToAdd);

    }
  };

  return CompileDirective;
});
