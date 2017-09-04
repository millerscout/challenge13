var app = angular.module('myApp', ['ngRoute', 'ngMaterial']);

app
.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'page1.html'
    })
    .when('/page2', {
        templateUrl: 'page2.html'
    });

})

.controller('MyController', function ($scope, $q, $timeout)  {
    alert('tesah') 
})