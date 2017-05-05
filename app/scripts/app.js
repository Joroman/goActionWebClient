angular.module('myApp', ['ui.router','ngResource','nvd3',"chart.js",'ngDialog'])
    .config(['$stateProvider','$urlRouterProvider','ChartJsProvider',function($stateProvider, $urlRouterProvider,ChartJsProvider) {

     // Configure all line charts
    ChartJsProvider.setOptions('line', {
      chartColors: ['#5cb85c','#FF7E67'],
      responsive: true
    });

    // route for the home page
        $stateProvider
            .state('app', {
                url:'/',
                views:{
                    'header':{
                        templateUrl:'views/header.html',
                         controller  : 'HeaderController'
                    },
                    'content':{
                        templateUrl :'views/home.html',
                        controller  :'HeaderController'
                    }
                }
            })
            .state('app.activeActions',{
                url:'active',
                views:{
                    'content@':{
                        templateUrl :'views/active_actions.html',
                        controller  :'ActionsController'
                    }
                }
            })

            .state ('app.getStartAction',{
                url:'getStart',
                views:{
                    'content@':{
                        templateUrl :'views/getstart_action.html',
                        controller  :'GetStartController'
                    }
                }
            })

            .state('app.editAction',{
                url:'defined/:id',
                views:{
                    'content@':{
                        templateUrl :'views/edit_action.html',
                        controller  :'EditActionController'
                    }
                }
            })
            .state('app.editPros',{
                url:'prospection/:id',
                views:{
                    'content@':{
                        templateUrl :'views/edit_pros.html',
                        controller  :'EditActionController'
                    }
                }
            })
            .state('app.editReq',{
                url:'request/:id',
                views:{
                    'content@':{
                        templateUrl :'views/edit_req.html',
                        controller  :'EditActionController'
                    }
                }
            })
            .state('app.editRes',{
                url:'respond:id',
                views:{
                    'content@':{
                        templateUrl :'views/edit_res.html',
                        controller  :'EditActionController'
                    }
                }
            })

          .state('app.closeActions',{
                url:'close',
                views:{
                    'content@':{
                        templateUrl :'views/close_actions.html',
                        controller  :'CloseActionController'
                    }
                }
            })

            .state('app.closeActions.detail',{
                url:'detail:id',
                views:{
                    'content@':{
                        templateUrl :'views/close_detail.html',
                        controller  :'CloseDetailController'
                    }
                }
            })


            .state('app.clients',{
                url:'clients',
                views:{
                    'content@':{
                        templateUrl :'views/clients.html',
                        controller  :'ClientsController'
                    }
                }
            })
            .state('app.clients.contacts',{
                url:'contacts:id',
                views:{
                    'content@':{
                        templateUrl :'views/contacts.html',
                        controller  :'ContactsController'
                    }
                }
            })
            .state('app.sales',{
                url:'sales',
                views:{
                    'content@':{
                        templateUrl:'views/sales.html',
                        controller:'SalesControllerDonut'
                    }
                }
            })
        ;

        $urlRouterProvider.otherwise('/');
    }]);
