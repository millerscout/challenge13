angular.module('myApp').controller('login', function ($scope, $q, $timeout, $location,$rootScope)  {
var vm= this;
vm.user = "";
vm.pass = "";

this.doLogin = function(){
    if(vm.user == "" || vm.pass == ""){
        alert("Entre usuário e senha.");
        return;
    }
    $rootScope.user= {
        name: vm.user,
        totalIcoin: 20
    };
    $location.path( '/dashboard' );

} 

});