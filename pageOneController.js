 angular.module('myApp').controller('pageOne', function ($scope, $q, $timeout)  {
    
var vm= this;
    vm.projects = [{
        name: 'projeto 1',
        invested : 5,
        total: 15
        
    },{
        name: 'projeto 3',
        invested : 10,
        total: 15
    },
    {
        name: 'projeto 2',
        invested : 5,
        total: 15
    }
]

    this.selectProject = function(){
        alert('ahoy!')

    }
})