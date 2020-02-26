app.controller("NotaController", function ($scope, $http) {

	$scope.listaNota = [];
	$scope.nota = {};

	$scope.listaMateria = [];
	$scope.materia = {};

	$scope.listaBoletim = [];
	$scope.listaBoletimDoAluno = [];
	$scope.boletim = {};

	$scope.listaAluno = [];
	$scope.aluno = {};

	$scope.listaPeriodo = [];
	$scope.periodo = {};

	var urlApi = 'http://localhost:8080/';


	$scope.salvarNota = function () {
		var metodo = 'POST';
		var urlNota = urlApi + 'notas/';
		if ($scope.nota.id) {
			metodo = 'PUT';
			urlNota = urlApi + 'notas/' + $scope.nota.id;
		}
		$http({
			method: metodo,
			url: urlNota,
			data: $scope.nota
		}).then(function (response) {
			$scope.listaNota.push(response.data);
			$scope.listarNotas();
		}, function (response) {
			console.log('erro ao salvar nota');
			console.log(response.data);
			console.log(response);
		});
	};

	$scope.listarNotas = function () {
		$http({
			method: 'GET',
			url: urlApi + 'notas/'
		}).then(function (response) {
			$scope.listaNota = response.data;
			console.log(response)
		}, function (response) { console.log('erro ao listar notas') });
	}

	$scope.listarBoletins = function () {
		$http({
			method: 'GET',
			url: urlApi + 'boletins/'
		}).then(function (response) {
			$scope.listaBoletim = response.data;
			console.log(response)
		}, function (response) { console.log('erro ao listar boletins') });
	}


	$scope.listarBoletinsAluno = function (id) {
		$http({
			method: 'GET',
			url: urlApi + 'boletins/aluno/' + id
		}).then(function (response) {
			$scope.listaBoletimDoAluno = response.data;
			console.log(response.data)
		}, function (response) { console.log('erro ao listar boletins') });
	}



	$scope.listarAlunos = function () {
		$http({
			method: 'GET',
			url: urlApi + 'alunos/'
		}).then(function (response) {
			$scope.listaAluno = response.data;
			console.log(response)
		}, function (response) { console.log('erro ao listar alunos') });
	}

	$scope.listarMaterias = function () {
		$http({
			method: 'GET',
			url: urlApi + 'materias/'
		}).then(function (response) {
			$scope.listaMateria = response.data;
			console.log(response)
		}, function (response) { console.log('erro ao listar materias') });
	}

	$scope.listarPeriodos = function () {
		$http({
			method: 'GET',
			url: urlApi + 'periodos/'
		}).then(function (response) {
			$scope.listaPeriodo = response.data;
			console.log(response)
		}, function (response) { console.log('erro ao listar periodos') });
	}

	$scope.findAluno = function (id) {
		$http({
			method: 'GET',
			url: urlApi + 'alunos/cadastro/' + id
		}).then(function (response) {
			$scope.aluno = response.data;
		}, function (response) {
			console.log('error ao listar aluno ');
		});
	};



	$scope.deleteNota = function (id) {

		$http({
			method: 'DELETE',
			url: urlApi + 'notas/' + id
		}).then(function (response) {
			$scope.listaNota.splice(id, 1);
			$scope.listarNotas();
		}, function (response) {
			console.log('error ao deletar nota ');
		});
	};

	$scope.alterarNota = function (nota) {
		$scope.nota = angular.copy(nota);
	}

	$scope.cancelarAlteracaoNota = function (nota) {
		$scope.nota = {};
	};

});