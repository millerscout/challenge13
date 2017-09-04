angular.module('myApp').controller('dashboard', function ($scope, $q, $timeout)  {
    var usr = window.user;
    console.log(usr);
var vm= this;

vm.user = usr.name;
vm.totalIcoin = usr.totalIcoin;

});