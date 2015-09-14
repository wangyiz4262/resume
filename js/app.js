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
		$scope.contacts = [
			{name: 'Email', value: '<a href="mailto:wangyiz4262@hotmail.com">wangyiz4262@hotmail.com</a>'},
			{name: 'Phone', value: '+1 (857) 221-2798'},
			{name: 'GitHub', value: '<a href="http://github.com/wangyiz4262" target="_blank">http://github.com/wangyiz4262</a>'}
		];
		$scope.educations = educations_multilingual[lang];
		$scope.skills = skills_multilingual[lang];
		$scope.projects = projects_multilingual[lang];
		$scope.experiences = experiences_multilingual[lang];
	};
}]);