app.controller("AlunoController", function($scope, $http) {

    var urlApi = 'http://localhost:8080/alunos';



	$scope.salvarAluno = function(aluno) {

		if ($scope.aluno.id){
			return $http.put(urlApi + "/" + aluno.id,aluno);
		}else{
            return $http.post(urlApi, aluno);
        }

	};


});