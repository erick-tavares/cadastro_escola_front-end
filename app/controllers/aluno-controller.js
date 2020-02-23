app.controller("AlunoController", function ($scope, $http) {

	$scope.listaAluno = [];
	$scope.aluno = {};



	var urlApi = 'http://localhost:8080/';


	$scope.salvarAluno = function () {
		var metodo = 'POST';
		var urlAluno = urlApi + 'alunos/';
		if ($scope.aluno.id) {
			metodo = 'PUT';
			urlAluno = urlApi + 'alunos/' + $scope.aluno.id;
		}
		$http({
			method: metodo,
			url: urlAluno,
			data: $scope.aluno
		}).then(function (response) {
			$scope.listaAluno.push(response.data);
			$scope.listarAlunos();
			console.log(response.status);
		}, function (response) {
			console.log('erro ao salvar aluno');
			console.log(response.data);
			console.log(response.status);
		});
	};

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

	$scope.deleteAluno = function (id) {

		$http({
			method: 'DELETE',
			url: urlApi + 'alunos/' + id
		}).then(function (response) {
			$scope.listaAluno.splice(id, 1);
			$scope.listarAlunos();
			console.log(response.status);
		}, function (response) {
			console.log('error ao deletar aluno ');
			console.log(response.status);
		});
	};

	$scope.alterarAluno = function (aluno) {
		$scope.aluno = angular.copy(aluno);
	}

	$scope.cancelarAlteracaoAluno = function (aluno) {
		$scope.aluno = {};
	};

});




