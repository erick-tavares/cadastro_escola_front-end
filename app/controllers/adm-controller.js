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
			urlAluno = urlApi + 'materias/' + $scope.materia.id;
		}
		$http({
			method: metodo,
			url: urlMateria,
			data: $scope.materia
		}).then(function (response){
			console.log('erro ao salvar materia');
		});
    };
    
    $scope.listarMaterias = function () {
		$http({
			method: 'GET',
			url: urlApi + 'materias/'
		}).then(function (response) {
			$scope.listaMateria = response.data;
		}, function (response) { console.log('erro ao listar materias') });
	}

    $scope.deleteMateria = function (id) {
		$http({
			method: 'DELETE',
			url: urlApi + 'materias/' + id
		}).then(function (response) {
			$scope.listaMateria.splice(id, 1);
			$scope.listarMaterias();
		}, function (response) {
			console.log('error ao deletar materia ');
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
			data: $scope.Periodo
		}).then(function (response){
            $scope.listaPeriodo.push(response.data);
			$scope.listarPeriodos();
		}, function (response) {
			console.log('erro ao salvar periodo');
		});
    };
    $scope.listarPeriodos = function () {
		$http({
			method: 'GET',
			url: urlApi + 'periodos/'
		}).then(function (response) {
			$scope.listaPeriodo = response.data;
		}, function (response) { console.log('erro ao listar periodos') });
	}

    $scope.deletePeriodo = function (id) {
		$http({
			method: 'DELETE',
			url: urlApi + 'periodos/' + id
		}).then(function (response) {
			$scope.listaPeriodo.splice(id, 1);
			$scope.listarPeriodos();
		}, function (response) {
			console.log('error ao deletar periodo ');
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
			data: $scope.Boletim
		}).then(function (response){
			console.log('erro ao salvar boletim');
		});
	};

	$scope.listarBoletins = function () {
		$http({
			method: 'GET',
			url: urlApi + 'boletins/'
		}).then(function (response) {
			$scope.listaBoletim = response.data;
		}, function (response) { console.log('erro ao listar boletins') });
	}


	$scope.deleteBoletim = function (id) {

		$http({
			method: 'DELETE',
			url: urlApi + 'boletins/' + id
		}).then(function (response) {
			$scope.listaBoletim.splice(id, 1);
			$scope.listarBoletins();
		}, function (response) {
			console.log('error ao deletar boletim ');
		});
	};

	$scope.alterarBoletim = function (boletim) {
		$scope.boletim = angular.copy(boletim);
	}

	$scope.cancelarAlteracaoBoletim = function (boletim) {
		$scope.boletim = {};
	};

});




