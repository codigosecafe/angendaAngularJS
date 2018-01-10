var app = angular.module('agendaApp', ['cecContactApp']);
app.filter('unsafe', function($sce) { return $sce.trustAsHtml; });
