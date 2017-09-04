var app = angular.module('myApp', ['ngRoute', 'ngMaterial']);


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
    });

})

.controller('MyController', function ($scope, $q, $timeout)  {
    alert('tesah') 
})