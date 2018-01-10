angular.module('cecContactApp', ["ngStorage", 'jlareau.pnotify'])
	.filter('unsafe', function($sce) { return $sce.trustAsHtml; });