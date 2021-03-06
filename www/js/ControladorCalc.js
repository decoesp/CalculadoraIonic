angular.module('starter')
.controller('ControladorCalc', function($scope){

  $scope.visor = 0;
  $scope.historico = '';
  var arrayNum = [];
  var num = 0;
  var valor_anterior = 0;
  var oper = '';
  var historico ='';

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
          valor_anterior = $scope.visor;
          $scope.visor += num;
          historic = num+'+'+valor_anterior+' = '+$scope.visor;
      break;
      case '-':
        if(valor_anterior!= 0){
          $scope.visor = $scope.visor - valor_anterior;
          historic = $scope.visor+'-'+valor_anterior+' = '+$scope.visor;
        }else{
          valor_anterior = $scope.visor;
          $scope.visor = num - $scope.visor;
          historic = num+'-'+valor_anterior+' = '+$scope.visor;
        }
      break;
      case '*':
          $scope.visor *= num;
          historic = $scope.visor+'*'+num+' = '+$scope.visor;
      break;
      case '/':
         if(valor_anterior!= 0){
          $scope.visor = $scope.visor / valor_anterior;
          historic = $scope.visor+'/'+valor_anterior+' = '+$scope.visor;
        }else{
          if($scope.visor == 0){
            break;
          }
          valor_anterior = $scope.visor;
          $scope.visor = num / $scope.visor;
          historic = num+'/'+valor_anterior+' = '+$scope.visor;
        };
      break;
      case '%':
        valor_anterior = $scope.visor;
        $scope.visor = ($scope.visor / 100) * num;
        historic = num+'% de '+valor_anterior+' = '+$scope.visor;
      break;
    }
     $scope.historico = historic;
  }

  $scope.raizQuadrada = function(){
    valor_anterior = $scope.visor;
    $scope.visor = Math.sqrt($scope.visor);
    arrayNum = [];
    historic = 'sqrt (' + valor_anterior + ')' + '=' + $scope.visor;
    $scope.historico = historic;
  }

  $scope.calcularSeno = function(){
    valor_anterior = $scope.visor;
    $scope.visor = Math.sin($scope.visor);
    arrayNum = [];
    historic = 'sin (' + valor_anterior + ')' + '=' + $scope.visor;
    $scope.historico = historic;
  }

  $scope.calcularCosseno = function(){
    valor_anterior = $scope.visor;
    $scope.visor = Math.cos($scope.visor);
    arrayNum = [];
    historic = 'cos (' + valor_anterior + ')' + '=' + $scope.visor;
    $scope.historico = historic;
  }

  $scope.pi = function(){
    valor_anterior = $scope.visor;
    $scope.visor *= Math.PI;
    arrayNum = [];
    historic = 'pi (' + valor_anterior + ')' + '=' + $scope.visor;
    $scope.historico = historic;
  }

  $scope.mudarSinal = function(){
    $scope.visor = $scope.visor * (-1);
  }

})
