app.config(function($routeProvider){

    $routeProvider
    .when('/', {
        templateUrl : 'app/views/home.html',
        controller  : 'HomeController',
    })

    .when('/alunos', {
        templateUrl : 'app/views/aluno.html',
        controller  : 'AlunoController',
    })

    .when('/notas', {
        templateUrl : 'app/views/nota.html',
        controller  : 'NotaController',
    })

    .when('/adm', {
        templateUrl : 'app/views/adm.html',
        controller  : 'AdmController',
    })

    .otherwise ({ redirectTo: '/' });
});