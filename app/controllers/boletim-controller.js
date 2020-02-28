app.controller("BoletimController", function ($scope, $http) {

    $scope.listaAluno = [];
    $scope.aluno = {};

    $scope.listaBoletimDoAluno = [];
    $scope.boletim = {};

    var urlApi = 'http://localhost:8080/';

    $scope.listarBoletinsAluno = function (id) {
        $http({
            method: 'GET',
            url: urlApi + 'boletins/aluno/' + id
        }).then(function (response) {
            $scope.listaBoletimDoAluno = response.data;
            console.log(response.status);
        }, function (response) { 
            console.log('erro ao listar boletins')
            console.log(response.status);
         });
    }

    $scope.listarAlunos = function () {
        $http({
            method: 'GET',
            url: urlApi + 'alunos/'
        }).then(function (response) {
            $scope.listaAluno = response.data;
            console.log(response.status);
        }, function (response) { 
            console.log('erro ao listar alunos');
            console.log(response.status);
         });
    }

});
