/**
 * resume Module
 * Resume of Yizhe Wang
 */
var resumeApp = angular.module('resumeApp', []);

resumeApp.controller('resumeCtrl', ['$scope', '$sce', function($scope, $sce) {
	$scope.toHtml = $sce.trustAsHtml;
	$scope.languages = [
		{ name: 'English', abbr: 'en' },
		{ name: '中文', abbr: 'zh' }
	];
	$scope.selectedLang = 'zh';

	$scope.switchLanguage = function(lang) {
		$scope.fullname = fullname_multilingual[lang];
		$scope.contacts = contacts_multilingual[lang];
		$scope.educations = educations_multilingual[lang];
		$scope.skills = skills_multilingual[lang];
		$scope.projects = projects_multilingual[lang];
		$scope.experiences = experiences_multilingual[lang];
	};
}]);