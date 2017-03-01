angular.module('appBuscar', [])
    .controller('ControladorFiltrar', ['$scope', 
        function($scope) {

            $scope.paginaActual = 0;
            $scope.tamPagina = 10;
            $scope.paginas = [];

            $scope.personas =[{
                nombre:'Uno', detalle: 'texto1', saldo: 200.000
                },
                {
                nombre:'Dos', detalle: 'texto2', saldo: 100.000
                },
                {
                nombre:'Tres', detalle: 'texto3', saldo: 50.000
                },
                {
                nombre:'Cuatro', detalle: 'texto7', saldo: 200.000
                },
                {
                nombre:'Cinco', detalle: 'texto8', saldo: 50.000
                },
                {
                nombre:'Seis', detalle: 'teexto9', saldo: 50.000
                },
                {
                nombre:'Siete', detalle: 'texto5', saldo: 100.000
                },
                {
                nombre:'Ocho', detalle: 'texto8', saldo: 200.000
                },
                {
                nombre:'Nueve', detalle: 'teexto9', saldo: 50.000
                },
                {
                nombre:'Diez', detalle: 'texto8', saldo: 200.000
                },
                {
                nombre:'Tres', detalle: 'texto3', saldo: 200.000
                },
                {
                nombre:'Cuatro', detalle: 'texto7', saldo: 50.000
                },
                {
                nombre:'Cinco', detalle: 'texto8', saldo: 100.000
                },
                {
                nombre:'Seis', detalle: 'texto9', saldo: 100.000
                },
                {
                nombre:'Siete', detalle: 'texto5', saldo: 200.000
                },
                {
                nombre:'Cinco', detalle: 'texto8', saldo: 50.000
                },
                {
                nombre:'Seis', detalle: 'teexto9', saldo: 200.000
                },
                {
                nombre:'Siete', detalle: 'texto5', saldo: 100.000
                },
                {
                nombre:'Cinco', detalle: 'texto8', saldo: 200.000
                },
                {
                nombre:'Cinco', detalle: 'texto8', saldo: 50.000
                },
                {
                nombre:'Seis', detalle: 'teexto9', saldo: 100.000
                },
                {
                nombre:'Siete', detalle: 'texto5', saldo: 200.000
                },
                {
                nombre:'Seis', detalle: 'teexto9', saldo: 50.000
                },
                {
                nombre:'Siete', detalle: 'texto5', saldo: 100.000
                },
                {
                nombre:'Tres', detalle: 'texto3', saldo: 100.000
                },
                {
                nombre:'Cuatro', detalle: 'texto7', saldo: 100.000
                },
                {
                nombre:'Cinco', detalle: 'texto8', saldo: 50.000
                },
                {
                nombre:'Siete', detalle: 'texto5', saldo: 100.000
                }
            ];


//Filtro Ordenar por Nº
$scope.filtrar = function(orden) {
    $scope.ordenar = orden;
};

//Paginas
$scope.configPages = function() {

    $scope.paginas.length = 0;
        var inicio = $scope.paginaActual - 4;
        var final = $scope.paginaActual + 5;
        
        if (inicio < 1) {
            inicio = 1;
            if (Math.ceil($scope.personas.length / $scope.tamPagina) > 10)
                final = 10;
            else
                final = Math.ceil($scope.personas.length / $scope.tamPagina);
        }   
        else {
            if (inicio >= ($scope.personas.length / $scope.tamPagina) - 10) {
                inicio = ($scope.personas.length / $scope.tamPagina) - 10;
                final = ($scope.personas.length / $scope.tamPagina);
            }
        }
            if (inicio < 1) inicio = 1;
                for (var i = inicio; i <= final; i++) {
                    $scope.paginas.push({
                        numero: i
                     });
                }
            if ($scope.paginaActual >= $scope.paginas.length){
                $scope.paginaActual = $scope.paginas.length - 1;
            }    
};

    $scope.paginador = function(index) {
        $scope.paginaActual = index - 1;
    };

$scope.configPages();

}]);


angular.module('appBuscar').filter('startFromGrid', function (){
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});


