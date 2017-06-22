angular.module('starter')
.controller('ControladorCalc', function($scope){

  $scope.visor = 0;
  $scope.historico = 'espaco para os registros';
  var arrayNum = [];
  var num = 0;
  var valor_anterior = 0;
  var oper = '';

  $scope.apagar = function(){
    $scope.visor = 0;
    valor_anterior = 0;
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
    if(isNaN($scope.visor)){
      $scope.visor = 0
    }
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
    switch(oper){
      case '+':
          $scope.visor += num;
      break;
      case '-':
        if(valor_anterior!= 0){
          $scope.visor = $scope.visor - valor_anterior;
        }else{
          valor_anterior = $scope.visor;
          $scope.visor = num - $scope.visor;
        }
      break;
      case '*':
          $scope.visor *= num;
      break;
      case '/':
         if(valor_anterior!= 0){
          $scope.visor = $scope.visor / valor_anterior;
        }else{
          if($scope.visor == 0){
            break;
          }
          valor_anterior = $scope.visor;
          $scope.visor = num / $scope.visor;
        };
      break;
      case '%':
          $scope.visor = ($scope.visor / 100) * num;
      break;
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

  $scope.mudarSinal = function(){
    $scope.visor = $scope.visor * (-1);
  }

})
