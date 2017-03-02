angular.module('appBuscar', [])
    .controller('ControladorFiltrar', ['$scope', 
        function($scope) {

            $scope.paginaActual = 0;
            $scope.tamPagina = 10;
            $scope.paginas = [];

            $scope.personas =[{
                nombre:'Uno', detalle: 'texto1', total: 200.000
                },
                {
                nombre:'Dos', detalle: 'texto2', total: 100.000
                },
                {
                nombre:'Tres', detalle: 'texto3', total: 50.000
                },
                {
                nombre:'Cuatro', detalle: 'texto7', total: 200.000
                },
                {
                nombre:'Cinco', detalle: 'texto8', total: 50.000
                },
                {
                nombre:'Seis', detalle: 'teexto9', total: 50.000
                },
                {
                nombre:'Siete', detalle: 'texto5', total: 100.000
                },
                {
                nombre:'Ocho', detalle: 'texto8', total: 200.000
                },
                {
                nombre:'Nueve', detalle: 'teexto9', total: 50.000
                },
                {
                nombre:'Diez', detalle: 'texto8', total: 200.000
                },
                {
                nombre:'Once', detalle: 'texto3', total: 200.000
                },
                {
                nombre:'Doce', detalle: 'texto7', total: 50.000
                },
                {
                nombre:'Trece', detalle: 'texto8', total: 100.000
                },
                {
                nombre:'Catorce', detalle: 'texto9', total: 100.000
                },
                {
                nombre:'Quince', detalle: 'texto5', total: 200.000
                },
                {
                nombre:'Diecisies', detalle: 'texto8', total: 50.000
                },
                {
                nombre:'Diecisiete', detalle: 'teexto9', total: 200.000
                },
                {
                nombre:'Dieciocho', detalle: 'texto5', total: 100.000
                },
                {
                nombre:'Diecinueve', detalle: 'texto8', total: 200.000
                },
                {
                nombre:'Veinte', detalle: 'texto8', total: 50.000
                },
                {
                nombre:'Veintiuno', detalle: 'teexto9', total: 100.000
                },
                {
                nombre:'Veintidos', detalle: 'texto5', total: 200.000
                },
                {
                nombre:'Veintitres', detalle: 'teexto9', total: 50.000
                },
                {
                nombre:'Veinticuatro', detalle: 'texto5', total: 100.000
                },
                {
                nombre:'Veinticinco', detalle: 'texto3', total: 100.000
                },
                {
                nombre:'Veintiseis', detalle: 'texto7', total: 100.000
                },
                {
                nombre:'Veintisiete', detalle: 'texto8', total: 50.000
                },
                {
                nombre:'Veintiocho', detalle: 'texto5', total: 100.000
                }
            ];

            $scope.listas =[{
                listado: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum a fugit ad laborum numquam.'
                },
                {
                listado: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum a fugit ad laborum numquam.'
                },
                {
                listado: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum a fugit ad laborum numquam.'
                }
            ];

            $scope.gastos =[{
                titulo: 'Lorem ipsum dolor sit amet, consectetur.', saldo: 50000000000000.0000000000000000
                },
                {
                titulo: 'magnam velit nam vero sit doloribus sint.', saldo: 2000000000000.0000000000000000
                },
                {
                titulo: 'Rerum a fugit ad laborum numquam dolor.', saldo: 100000000000000.000000000000000000
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


