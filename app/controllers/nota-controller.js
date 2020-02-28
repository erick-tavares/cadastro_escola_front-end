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
			$scope.nota = {};
			console.log(response.status);
		}, function (response) {
			console.log(response.data);
			window.alert("Status " + response.status + " / " + response.data.message);
		});
	};

	$scope.listarNotas = function () {
		$http({
			method: 'GET',
			url: urlApi + 'notas/'
		}).then(function (response) {
			$scope.listaNota = response.data;
			console.log(response)
			console.log(response.status);
		}, function (response) { 
			console.log('erro ao listar notas');
			console.log(response.status);
		 });
	}

	$scope.listarBoletins = function () {
		$http({
			method: 'GET',
			url: urlApi + 'boletins/'
		}).then(function (response) {
			$scope.listaBoletim = response.data;
			console.log(response)
			console.log(response.status);
		}, function (response) {
			 console.log('erro ao listar boletins')
			 console.log(response.status);
			 });
	}

	$scope.listarBoletinsAluno = function (id) {
		$http({
			method: 'GET',
			url: urlApi + 'boletins/aluno/' + id
		}).then(function (response) {
			$scope.listaBoletimDoAluno = response.data;
			console.log(response.data)
			console.log(response.status);
		}, function (response) { 
			console.log('erro ao listar boletins');
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
			onsole.log('erro ao listar alunos');
			console.log(response.status);
		});
	}

	$scope.listarMaterias = function () {
		$http({
			method: 'GET',
			url: urlApi + 'materias/'
		}).then(function (response) {
			$scope.listaMateria = response.data;
			console.log(response)
			console.log(response.status);
		}, function (response) { 
			console.log('erro ao listar materias');
			console.log(response.status);
		 });
	}

	$scope.deleteNota = function (id) {
		$http({
			method: 'DELETE',
			url: urlApi + 'notas/' + id
		}).then(function (response) {
			$scope.listaNota.splice(id, 1);
			$scope.listarNotas();
			console.log(response.status);
		}, function (response) {
			console.log('error ao deletar nota ');
			console.log(response.status);
		});
	};

	$scope.alterarNota = function (nota) {
		$scope.nota = angular.copy(nota);
	}

	$scope.cancelarAlteracaoNota = function (nota) {
		$scope.nota = {};
	};

});