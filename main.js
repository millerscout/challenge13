var app = angular.module('myApp', ['ngRoute', 'ngMaterial' ]);
window.user= JSON.stringify({
    name: "Nome",
    totalIcoin: 20
});

app
.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'page1.html',
        controller: 'pageOne',
        controllerAs: "vm"

    })
    .when('/page2', {
        templateUrl: 'page2.html'
    })
    .when('/dashboard', {
        templateUrl: 'dashboard.html',
        controller:  'dashboard',
        controllerAs: "vm"
    })
    .when('/login', {
        templateUrl: 'login.html',
        controller: 'login',
        controllerAs: 'vm'
    })
    ;

})

.controller('MyController', function ($scope, $q, $timeout)  {
    alert('tesah') 
})