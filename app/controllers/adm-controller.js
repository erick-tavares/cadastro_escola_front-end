app.controller("AdmController", function ($scope, $http) {

	$scope.listaAluno = [];
	$scope.aluno = {};

	$scope.materia = {};
	$scope.listaMateria = [];

	$scope.boletim = {};
	$scope.listaPeriodo = [];

	$scope.listaPeriodo = [];
	$scope.periodo = {};

	var urlApi = 'http://localhost:8080/';

	//Materia
	$scope.salvarMateria = function () {
		var metodo = 'POST';
		var urlMateria = urlApi + 'materias/';
		if ($scope.materia.id) {
			metodo = 'PUT';
			urlMateria = urlApi + 'materias/' + $scope.materia.id;
		}
		$http({
			method: metodo,
			url: urlMateria,
			data: $scope.materia
		}).then(function (response) {
			$scope.listaMateria.push(response.data);
			$scope.listarMaterias();
			$scope.materia = {};
			console.log(response.status);
		}, function (response) {
			console.log(response.data);
			window.alert("Status " + response.status + " / " + response.data.message);
		});
	};

	$scope.listarMaterias = function () {
		$http({
			method: 'GET',
			url: urlApi + 'materias/'
		}).then(function (response) {
			$scope.listaMateria = response.data;
			console.log(response.status);
		}, function (response) {
			console.log('erro ao listar materias');
			console.log(response.status);
		});
	}

	$scope.deleteMateria = function (id) {
		$http({
			method: 'DELETE',
			url: urlApi + 'materias/' + id
		}).then(function (response) {
			$scope.listaMateria.splice(id, 1);
			$scope.listarMaterias();
			console.log(response.status);
		}, function (response) {
			console.log('error ao deletar materia ');
			console.log(response.status);
		});
	};

	$scope.alterarMateria = function (materia) {
		$scope.materia = angular.copy(materia);
	}

	$scope.cancelarAlteracaoMateria = function (materia) {
		$scope.materia = {};
	};

	//Periodo
	$scope.salvarPeriodo = function () {
		var metodo = 'POST';
		var urlPeriodo = urlApi + 'periodos/';
		if ($scope.periodo.id) {
			metodo = 'PUT';
			urlPeriodo = urlApi + 'periodos/' + $scope.periodo.id;
		}
		$http({
			method: metodo,
			url: urlPeriodo,
			data: $scope.periodo
		}).then(function (response) {
			$scope.listaPeriodo.push(response.data);
			$scope.listarPeriodos();
			$scope.periodo = {};
			console.log(response.status);
		}, function (response) {
			console.log(response.data);
			window.alert("Status " + response.status + " / " + response.data.message);
		});
	};

	$scope.listarPeriodos = function () {
		$http({
			method: 'GET',
			url: urlApi + 'periodos/'
		}).then(function (response) {
			$scope.listaPeriodo = response.data;
			console.log(response.status);
			console.log(response.data)
		}, function (response) {
			console.log('erro ao listar periodos');
			console.log(response.status);
		});
	}

	$scope.deletePeriodo = function (id) {
		$http({
			method: 'DELETE',
			url: urlApi + 'periodos/' + id
		}).then(function (response) {
			$scope.listaPeriodo.splice(id, 1);
			$scope.listarPeriodos();
			console.log(response.status);
		}, function (response) {
			console.log('error ao deletar periodo ');
			console.log(response.status);
		});
	};

	$scope.alterarPeriodo = function (periodo) {
		$scope.periodo = angular.copy(periodo);
	}

	$scope.cancelarAlteracaoPeriodo = function (periodo) {
		$scope.periodo = {};
	};

	//Boletim
	$scope.salvarBoletim = function () {
		var metodo = 'POST';
		var urlBoletim = urlApi + 'boletins/';
		if ($scope.boletim.id) {
			metodo = 'PUT';
			urlBoletim = urlApi + 'boletins/' + $scope.boletim.id;
		}
		$http({
			method: metodo,
			url: urlBoletim,
			data: $scope.boletim
		}).then(function (response) {
			$scope.listaBoletim.push(response.data);
			$scope.listarBoletins();
			$scope.boletim = {};
			console.log(response.status);
		}, function (response) {
			console.log(response.data);
			window.alert("Status " + response.status + " / " + response.data.message);
		});
	};

	$scope.listarBoletins = function () {
		$http({
			method: 'GET',
			url: urlApi + 'boletins/'
		}).then(function (response) {
			$scope.listaBoletim = response.data;
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

	$scope.deleteBoletim = function (id) {

		$http({
			method: 'DELETE',
			url: urlApi + 'boletins/' + id
		}).then(function (response) {
			$scope.listaBoletim.splice(id, 1);
			$scope.listarBoletins();
			console.log(response.status);
		}, function (response) {
			console.log('error ao deletar boletim ');
			console.log(response.status);
		});
	};

	$scope.alterarBoletim = function (boletim) {
		$scope.boletim = angular.copy(boletim);
	}

	$scope.cancelarAlteracaoBoletim = function (boletim) {
		$scope.boletim = {};
	};

});




