angular.module('starter')
.controller('ControladorCalc', function($scope){

  $scope.visor = 0;
  $scope.historico = 'espaco para os registros';
  var arrayNum = [];
  var num = 0;
  var oper = '';

  $scope.apagar = function(){
    $scope.visor = 0;
    oper = '';
    arrayNum = [];
  }

  $scope.apagarNum =function(){
    arrayNum.pop();
    $scope.visor = arrayNum.join('')*1;
  }

  $scope.numClicado = function(n){
    arrayNum.push(n);
    $scope.visor = arrayNum.join('')*1;
  }

  $scope.operacao = function(op){
    if(oper !== ''){
      $scope.resultado();
    }
    num = $scope.visor;
    arrayNum = [];
    oper = op;
  }

  $scope.resultado = function(){
    if(oper === '+'){
      $scope.visor += num;
    }
    else if(oper === '-'){
      $scope.visor = num - $scope.visor; // não continua a subtração ao apertar o igual duas vezes
    }
    else if(oper === '*'){
      $scope.visor *= num;
    }
    else if(oper === '/'){
      $scope.visor = num / $scope.visor; // mesmo bug da subtração
    }
  }

  $scope.raizQuadrada = function(){
    $scope.visor = Math.sqrt($scope.visor);
  }

  $scope.calcularSeno = function(){
    $scope.visor = Math.sin($scope.visor);
  }

  $scope.calcularCosseno = function(){
    $scope.visor = Math.cos($scope.visor);
  }

  $scope.pi = function(){
    $scope.visor *= Math.PI;
  }


})
