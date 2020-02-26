app.config(function($routeProvider){

    $routeProvider
    .when('/', {templateUrl : 'app/views/home.html',controller  : 'HomeController'})

    .when('/aluno', {templateUrl : 'app/views/aluno.html', controller  : 'AlunoController'})

    .when('/nota', {templateUrl : 'app/views/nota.html', controller  : 'NotaController'})

    .when('/adm', {templateUrl : 'app/views/adm.html', controller  : 'AdmController'})

    .when('/boletim', {templateUrl : 'app/views/boletim.html', controller  : 'BoletimController'})

    .otherwise ({ redirectTo: '/' });
});