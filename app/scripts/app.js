'use strict';

angular.module('ConfusionApp',['ui.router'])
	.config(function($stateProvider , $urlRouterProvider){
		$stateProvider

			.state('app',{
				url:'/',
				views:{
					'header':{
						templateUrl : 'views/header.html',
					},
					'content':{
						templateUrl : 'views/home.html',
						controller : 'IndexController'
					},
					'footer':{
						templateUrl : 'views/footer.html',
					}
				}
			})

			.state('app.aboutus',{
				url:'aboutus',
				views:{
					'content@':{
						templateUrl : 'views/aboutus.html',
						controller : 'AboutController'
					}
				}
			})

			.state('app.contactus',{
				url:'contactus',
				views:{
					'content@':{
						templateUrl : 'views/contactus.html',
						controller : 'ContactController'
					}
				}
			})
			.state('app.menu',{
				url:'menu',
				views:{
					'content@':{
						templateUrl : 'views/menu.html',
						controller : 'Menucontroller'
					}
				}
			})
			.state('app.dishdetails',{
				url:'menu/:id',
				views:{
					'content@':{
						templateUrl : 'views/dishdetails.html',
						controller : 'dishDetailController'
					}
				}
			});
			$urlRouterProvider.otherwise('/');
	})
    
;