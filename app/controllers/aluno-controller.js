app.controller("AlunoController", function ($scope, $http) {

	$scope.listaAluno = [];
	$scope.aluno = {};



	var urlApi = 'http://localhost:8080/';


	$scope.salvarAluno = function () {
		var metodo = 'POST';
		if ($scope.aluno.id) {
			metodo = 'PUT';
		}
		$http({
			method: metodo,
			url: urlApi + 'alunos/',
			data: $scope.aluno
		}).then(function (response) {
			$scope.listaAluno.push(response.data);
			$scope.listarAlunos();
		}, function (response) {
			console.log('erro ao salvar aluno');
		});
	};

	$scope.listarAlunos = function () {
		$http({
			method: 'GET',
			url: urlApi + 'alunos/'
		}).then(function (response) {
			$scope.listaAluno = response.data;
		}, function (response) { console.log('erro ao listar alunos') });
	}


	$scope.deleteAluno = function (id) {

		$http({
			method: 'DELETE',
			url: urlApi + 'alunos/'+ id
		}).then(function (response) {
			$scope.listaAluno.splice(id, 1);
			$scope.listarAlunos();
		}, function (response) {
			console.log('error ao deletar aluno ');
		});
	};

	$scope.cancelarAlteracaoAluno = function (aluno) {
		$scope.aluno = {};
	};

});




