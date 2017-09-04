 angular.module('myApp')
 .controller('IPointController',IPointController)
 .controller('pageOne', function ($scope, $q, $timeout,$mdDialog)  {

    
var vm= this;
    vm.projects = [{
        name: 'projeto 1',
        invested : 5,
        total: 15
        
    },{
        name: 'projeto 2',
        invested : 10,
        total: 15
    },
    {
        name: 'projeto 3',
        invested : 5,
        total: 15
    }
]

    this.selectProject = function(proj){
         $mdDialog.show({
          template:
            '<md-dialog>' +
            '  <md-dialog-content>Hello {{ employee }}!</md-dialog-content>' +
            ' <input type="number" placeholder="Quantidade de pontos para investir" ng-model="pending" />'+
            '  <md-dialog-actions>' +
            '    <md-button ng-click="AddPoints()" class="md-primary">' +            
            '      Adicionar Pontos' +
            '    </md-button>' +
            '    <md-button ng-click="closeDialog()" class="md-primary">' +
            '      Fechar' +
            '    </md-button>' +
            '  </md-dialog-actions>' +
            '</md-dialog>',
          controller: 'IPointController',
          onComplete: afterShowAnimation,
           locals: { proj: proj }
        });

        // When the 'enter' animation finishes...

        function afterShowAnimation(scope, element, options) {
           // post-show code here: DOM element focus, etc.
        }

    }
})

function IPointController($scope, $mdDialog, proj) {
    // Assigned from construction <code>locals</code> options...
    $scope.proj = proj;

    $scope.AddPoints = function(){
        alert($scope.pending);
        proj.invested += $scope.pending
        proj.total += $scope.pending
      $mdDialog.hide();
    }
    $scope.closeDialog = function() {
      // Easily hides most recent dialog shown...
      // no specific instance reference is needed.
      $mdDialog.hide(proj);
    };
  }