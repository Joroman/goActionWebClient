angular.module('myApp')
  .constant("baseURL","http://localhost:3000/")

    .service('actionsService',['$resource','baseURL',function($resource,baseURL){
        this.getActions=function(){
           return $resource(baseURL+'actions/:id',null,{
               'update' :{method:'PUT'},
               'post'   :{method:'POST'}
           });
        };
    
    }])

    .service('panelService',function(){
        this.getPanels = function(){
            var panels=[
                {
                    id:0,
                    icon:'fa fa-comment-o fa-4x',
                    title:'Define Action',
                    text:'This is the first step of the cycle. You have to describe the action that you have in mind and choose the client that you want to make the action. Also put a dead line for all the cycle.',
                    collapse:'collapseOne',
                },
                {
                    id:1,
                    icon:'glyphicon glyphicon-earphone fa-4x',
                    title:'Prospect Action',
                    text:'Prospection is the second step of the cycle. In this phase the objective is to set  a meeting with a client to present our products or services. First of all think about the meeting objective and the strategy. What and why would you like to present or expose the products/services to the client?.¿Why the client would buy your porducts?.... Second you have to chose from the client the concret contact for the action. When you chose the contact you will see all the information you need to concret a meeting. To finish this phase you will have to stablish the meeting with the contact an fullfill  the field (meeting date). If you can arrenge the meeting close the action',
                    collapse:'collapseTwo'
                },
                {
                    id:2,
                    icon:'glyphicon glyphicon-import fa-4x',
                    title:'Request Action',
                    text:'Now you made the meeting with the client. So If the client request some product or service or you have seen an oportunity is time to resum the meeting and after start to prepare the offer. If the client not want anythig now close the action and explain your feelings.',
                    collapse:'collapseThree'
                },
                {
                    id:3,
                    icon:'glyphicon glyphicon-send fa-4x',
                    title:'Response Action',
                    text:'Response, in this phase you have to update information about the concret offer for the client. You update the offer, the budget, the margin ... If finally it is not possbile to develop the offer for any reasons close the action and set the feedback. If you send the offer, the client say to you if you are the winner or not. So you have to close the action and update the information fullfill the fields. If all the process go well and you win a sale you can see in the sales section',
                    collapse:'collapseFour'
                }
            ];
            return  panels; 
        };
        
    })

    .service('clientsService',['$resource','baseURL',function($resource,baseURL){
        this.getClients = function(){
            return $resource(baseURL+'clients/:id',null,{
                'update' :{method:'PUT'}
            });
        };
       
    }])
    
    .service('salesService',['$resource','baseURL',function($resource,baseURL){
        this.getSales = function(){
            return $resource(baseURL+'sales/:id',null,{
                'post'   :{method:'POST'}});
        };
    }])

.factory('$localStorage', ['$window', function ($window) {
    return {
        store: function (key, value) {
            $window.localStorage[key] = value;
        },
        get: function (key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
        },
        remove: function (key) {
            $window.localStorage.removeItem(key);
        },
        storeObject: function (key, value) {
            $window.localStorage[key] = JSON.stringify(value);
        },
        getObject: function (key, defaultValue) {
            return JSON.parse($window.localStorage[key] || defaultValue);
        }
    };
}])

.factory('AuthFactory', ['$resource', '$http', '$localStorage', '$rootScope', '$window', 'baseURL', 'ngDialog', function($resource, $http, $localStorage, $rootScope, $window, baseURL, ngDialog){
    
    var authFac = {};
    var TOKEN_KEY = 'Token';
    var isAuthenticated = false;
    var username = '';
    var authToken = undefined;
    

  function loadUserCredentials() {
    var credentials = $localStorage.getObject(TOKEN_KEY,'{}');
    if (credentials.username != undefined) {
      useCredentials(credentials);
    }
  }
 
  function storeUserCredentials(credentials) {
    $localStorage.storeObject(TOKEN_KEY, credentials);
    useCredentials(credentials);
  }
 
  function useCredentials(credentials) {
    isAuthenticated = true;
    username = credentials.username;
    authToken = credentials.token;
 
    // Set the token as header for your requests!
    $http.defaults.headers.common['x-access-token'] = authToken;
  }
 
  function destroyUserCredentials() {
    authToken = undefined;
    username = '';
    isAuthenticated = false;
    $http.defaults.headers.common['x-access-token'] = authToken;
    $localStorage.remove(TOKEN_KEY);
  }
     
    authFac.login = function(loginData) {
        
        $resource(baseURL + "users/login")
        .save(loginData,
           function(response) {
              storeUserCredentials({username:loginData.username, token: response.token});
              $rootScope.$broadcast('login:Successful');
           },
           function(response){
              isAuthenticated = false;
            
              var message = '\<div class="ngdialog-message">\<div><h3>Login Unsuccessful</h3></div>' +'<div><p>' +  response.data.err.message + '</p><p>' + response.data.err.name + '</p></div>' +'<div class="ngdialog-buttons">\<button type="button" class="ngdialog-button ngdialog-button-primary" ng-click=confirm("OK")>OK</button>\</div>';
            
                ngDialog.openConfirm({ template: message, plain: 'true'});
           }
        
        );

    };
    
    authFac.logout = function() {
        $resource(baseURL + "users/logout").get(function(response){
        });
        destroyUserCredentials();
    };
    
    authFac.register = function(registerData) {
        
        $resource(baseURL + "users/register")
        .save(registerData,
           function(response) {
              authFac.login({username:registerData.username, password:registerData.password});
            if (registerData.rememberMe) {
                $localStorage.storeObject('userinfo',
                    {username:registerData.username, password:registerData.password});
            }
           
              $rootScope.$broadcast('registration:Successful');
           },
           function(response){
            var message = '\<div class="ngdialog-message">\<div><h3>Registration Unsuccessful</h3></div>' +
                  '<div><p>' +  response.data.err.message + 
                  '</p><p>' + response.data.err.name + '</p></div>';

                ngDialog.openConfirm({ template: message, plain: 'true'});

           }
        
        );
    };
    
    authFac.isAuthenticated = function() {
        return isAuthenticated;
    };
    
    authFac.getUsername = function() {
        return username;  
    };

    loadUserCredentials();
    
    return authFac;
    
}])
;
