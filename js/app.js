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
			'Email: <a href="mailto:wangyiz4262@hotmail.com">wangyiz4262@hotmail.com</a>',
			'<a href="http://wangyizhe.net" target="_blank">Personal Blog</a>',
			'<a href="http://github.com/wangyiz4262" target="_blank">GitHub</a>',
			'<a href="https://www.linkedin.com/in/wangyizhe" target="_blank">LinkedIn</a>'
		];
		$scope.educations = educations_multilingual[lang];
		$scope.skills = skills_multilingual[lang];
		$scope.projects = projects_multilingual[lang];
		$scope.experiences = experiences_multilingual[lang];
	};
}]);