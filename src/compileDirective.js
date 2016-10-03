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

      var htmlToAdd = '<'+ctrl.tag+'>{{compileDirectiveCtrl.content}}</'+ctrl.tag+'>';

      if(memLeakService.isLeaky) {
        $compile(htmlToAdd)(scope);
      }

      var compiledElement = $compile(htmlToAdd)(scope);

      element.append(compiledElement);

    }
  };

  return CompileDirective;
});
