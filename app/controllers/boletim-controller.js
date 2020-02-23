app.controller("BoletimController", function ($scope, $http) {

    $scope.listaAluno = [];
    $scope.aluno = {};

    $scope.listaBoletimDoAluno = [];
    $scope.boletim = {};

    $scope.format = "";

    var urlApi = 'http://localhost:8080/';

    $scope.listarBoletinsAluno = function (id) {
        $http({
            method: 'GET',
            url: urlApi + 'boletins/aluno/' + id
        }).then(function (response) {
            $scope.listaBoletimDoAluno = response.data;
            console.log(response.data)
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
            console.log(response)
            console.log(response.status);
        }, function (response) { 
            console.log('erro ao listar alunos');
            console.log(response.status);
         });
    }

    $scope.downloadBoletim = function (boletim) {
        $http({
            method: 'GET',
            url: urlApi + 'boletins/report/' + boletim + '/pdf'
        }).then(function (response) {
            console.log(response)
            console.log(response.status);
        }, function (response) { 
            console.log('erro ao baixar boletim');
            console.log(response.status);
         });
    }

    $scope.showBoletim = function (boletim) {
        $http({
            method: 'GET',
            url: urlApi + 'boletins/report/' + boletim + '/html'
        }).then(function (response) {
            console.log(response)
            console.log(response.status);
        }, function (response) { 
            console.log('erro ao mostrar boletim');
            console.log(response.status);
         });
    }

});
