describe('Controllers',function(){
    var action_list=[
                 {
            name            :"ACT 78",
            description     :"Sale Web service TDD development",
            _client         :"GOOGLE",
            start_date      :"2017/1/12",
            end_date        :"2017/6/19",

            prospection:{
                pros_objective  :"Explain Wbe services Arquitecture and tdd development",
                contact             :"Kelli",
                meeting_date        :"2017/03/15"
            },

            request:{
                service_product     :"The client wants a Rest api installation on the server",
                resources           :"Software engineer,  software Arquiteture",
                response_date       :"2017/04/12",
                estimate_budget     :"90000"
            },

            response:{
                offer_name              :"REST api for OLAPPP company",
                offer_document          :"document.doc",
                offer_budget            :"95000",
                offer_margin            :"33%",
                date_send               :"2017/04/24"
            }
        },
         
         {
            name            :"ACT 23",
            description     :"SAle BPM",
            _client         :"Pepsico",
            start_date      :"2017/01/28",
            end_date        :"2017/01/25"
        },
        
        {
            name                :"ACT 15",
            description         :"Sale ODP",
            _client             :"ALIBB",
            start_date          :"01/01/2017",
            end_date            :"2017/2/25",

            prospection:{
                objective           :"Explain our company and our CRM",
                contact             :"JOSA",
                meeting_date        :"2017/01/15"
            }
        },
        {
            name                :"ACT 64",
            description         :"Act new client",
            _client             :"PASY",
            start_date          :"2017/01/31",
            end_date            :"2017/6/25"
        },
        
        {
            name                :"ACT 15",
            description         :"Sale ODP",
            _client             :"ALIBB",
            start_date          :"01/01/2017",
            end_date            :"2017/2/25",

            prospection:{
                objective       :"Explain our company and our CRM",
                meeting_date    :"2017/01/15",
                contact         :"josep hachin 670214378 josep@alibb.es"
            },

            request:{
                service_product     :"The client not like a CRM installation",
                resources           :"Software engineer, system engineer, software Arquiteture",
                response_date       :"",
                estimate_budget     :""
            },
            feedback:{
                offer_win           :"false",
                project_start_date  :"2017-03-03",
                description         :"no project"
            }
        },
        
        {
            name                :"ACT 1",
            description         :"Sale CRM",
            _client             :"ALIBB",
            start_date          :"    ",
            end_date            :"2017/5/19",

            prospection:{
                objective       :"Explain our company and our CRM",
                contact         :"Mauli",
                meeting_date    :"2017/01/15"
            },

            request:{
                service_product     :"The client wants a CRM installation",
                resources           :"Software engineer, system engineer, software Arquiteture",
                response_date       :"2017/02/12",
                estimate_budget     :"50000"
            },

            response:{
                offer_name              :"CRM for MAK company",
                offer_document          :'document.doc',
                offer_budget            :"55000",
                offer_margin            :"30%",
                date_send               :"2017/02/10"
            },

            feedback:{
                offer_win           :"true",
                project_start_date  :"2017/03/03",
                description         :"Good buy our project"
            }
        },
        
        {
            name                :"ACT 2",
            description         :"Sale Web service development",
            _client             :"SONY",
            start_date          :'2017/1/11',
            end_date            :"2017/5/19",

            prospection:{
                meeting_date    :"2017/01/15",
                objective       :"Explain Wbe services Arquitecture",
                contact         :'juan maponest 789675432 juna@sony.com'
            },

            request:{
                service_product     :"The client wants a Rest api installation on the server",
                resources           :"Software engineer,  software Arquiteture",
                response_date       :"2017/04/12",
                estimate_budget     :"70000"
            },

            response:{
                offer_name              :"REST api for OLAPPP company",
                offer_document          :'document.doc',
                offer_budget            :"70000",
                offer_margin            :"33%",
                date_send               :"2017/01/24"
            },

            feedback:{
                offer_win           :"true",
                project_start_date  :"2017/02/017",
                description     :"Good buy our project"
            }
        },
        
        {
            name                   :"ACT 3",
            description         :"ASI Web service development",
            _client             :"SONY",
            start_date          :'2017/1/1',
            end_date              :"2017/5/19",

            prospection:{
                objective       :"Explain Wbe services Arquitecture",
                contact         :"Marie Juan 789547832 marie@sony.es",
                meeting_date       :"2017/02/18"
            }
        },
        
        {
            name                :"ACT 4",
            description         :"Car software development",
            _client             :"BMB",
            start_date          :'2017/1/02',
            end_date            :"2017/3/19",

            prospection:{
                objective       :"Explain our Car software arquitecture",
                contact         :"Halim sater 678124367 halim@bmb.es",
                meeting_date    :"2017/02/17"
            },

            request:{
                service_product         :"The client wants a sofwatre car IA",
                resources               :"Software engineer, Arquiteture",
                client_response_date    :"2017/03/12",
                estimate_budget         :"70000"
                
            }
        } 
         
    ];
    var responseSuccess={
    id:0,
    name: "ACT 1",
    description: "Sale CRM",
    _client: "58821c28e372a624cc0fdd4b",
    start_date: "2017/1/3",
    end_date: "2017/5/19"
  };
    
    var actionClose =     {
            name                :"ACT 15",
            description         :"Sale ODP",
            _client             :"ALIBB",
            start_date          :"01/01/2017",
            end_date            :"2017/2/25",

            prospection:{
                objective       :"Explain our company and our CRM",
                meeting_date    :"2017/01/15",
                contact         :"josep hachin 670214378 josep@alibb.es"
            },

            request:{
                service_product     :"The client not like a CRM installation",
                resources           :"Software engineer, system engineer, software Arquiteture",
                response_date       :"",
                estimate_budget     :""
            },
            feedback:{
                offer_win           :"false",
                project_start_date  :"2017-03-03",
                description         :"no project"
            }
        };
    
    //CONTROLLERS
    
    //VARIABLES FOR THE CONTROLLERS
    var ActionsController,GetStartController,EditActionController,ClientsController,ContactsController, CloseActionController, CloseDetailController; 
        
    var $controller, $scope, $httpBackend, actionsService, clientsService;
   
    beforeEach(angular.mock.module('myApp'));
    
    
    beforeEach(inject(function(_$controller_,_actionsService_,_$httpBackend_,
                                _$rootScope_,_clientsService_){
       
        $controller         =_$controller_;
        actionsService      =_actionsService_;
        $httpBackend        =_$httpBackend_;
        $scope              =_$rootScope_.$new();
        clientsService      =_clientsService_;
        
    }));

    //ACTIONS CONTROLLER
    
        describe('ActionsController',function(){
        var api='http://localhost:3000/actions';
        var result={};
        $scope=$scope;
       
       beforeEach(function(){
            $httpBackend.whenGET(api).respond(action_list);
           //declarar el controlador antes de httpBackend.flush();
            ActionsController=$controller('ActionsController',{$scope:$scope,actionsService:actionsService});  
            
            $httpBackend.flush();
            
            
            spyOn(actionsService,'getActions').and.callFake(function(){
                return action_list;
            });
            
        });
      
        it('should be define',function(){
            expect(ActionsController).toBeDefined();
        });

        it('Shoul inicialize with a call of .getActions',function(){
            expect($scope.actions[0].name).toEqual(action_list[0].name);
            expect($scope.actions.length).toBe(9);
        });
        
        it('Verifiy diferent actions exist Def, Pro, Req, Res', function(){
            expect($scope.actionsPro).toBeDefined();
            expect($scope.actionsDef).toBeDefined();
            expect($scope.actionsReq).toBeDefined();
            expect($scope.actionsRes).toBeDefined();    
        });
        
        it('Verify it the diferent actions collection have the correct number of elements', function(){
            expect($scope.actionsPro.length).toBe(2);
            expect($scope.actionsDef.length).toBe(2);
            expect($scope.actionsReq.length).toBe(1);
            expect($scope.actionsRes.length).toBe(1);
          
        });
        it('verify creation varibles with number of acctions in diferent phases', function(){
            expect($scope.titleDef).toBeDefined();
            expect($scope.num_def).toBeDefined();
            
            expect($scope.titlePros).toBeDefined();
            expect($scope.num_pros).toBeDefined();
            
            expect($scope.titleReq).toBeDefined();
            expect($scope.num_req).toBeDefined();
            
            expect($scope.titleRes).toBeDefined();
            expect($scope.num_res).toBeDefined();
            
        });
     
        it('verify the functions has been created changeToDefiend, changeToProspect, changeToRequest, changeToResponse', function(){
            expect($scope.changeToDefined).toBeDefined();
            expect($scope.changeToProspect).toBeDefined();
            expect($scope.changeToRequest).toBeDefined();
            expect($scope.changeToResponse).toBeDefined();
            
        });
        
        it('verify creation varibles def, pros, req, res to manage ng-show',function(){
            expect($scope.def).toBeDefined();
            expect($scope.def).toEqual(true);
            expect($scope.pros).toBeDefined();
            expect($scope.pros).toEqual(false);
            expect($scope.req).toBeDefined();
            expect($scope.req).toEqual(false);
            expect($scope.res).toBeDefined();
            expect($scope.res).toEqual(false);
        });
   
        
       
   });
    
        describe('GetStartController',function(){
        
        var api='http://localhost:3000/actions';
       
        beforeEach(function(){
            
            GetStartController=$controller('GetStartController',{$scope:$scope,actionsService:actionsService});
            
            $httpBackend.when('POST',api).respond(responseSuccess);
            
            $httpBackend.expectPOST(api).respond(responseSuccess);
             
            $scope.save();
           
            $httpBackend.flush();
            
        });
        
      it('verify save is defined',function(){
          expect($scope.save).toBeDefined();
      });
        

        
    });
      
    
        describe('EditActionController',function(){
        var api='http://localhost:3000/actions/0';
        var api_post='http://localhost:3000/actions';
        
        var response_pros={
            id                  :0,
            name                :"ACT 15",
            description         :"Sale ODP",
            _client             :"ALIBB",
            start_date          :"01/01/2017",
            end_date            :"2017/2/25",

            prospection:{
                objective           :"Explain our company and our CRM",
                contact             :"JOSA",
                meeting_date        :"2017/01/15"
            }
        };
        
        var response_req={
             id                  :0,
            name                :"ACT 15",
            description         :"Sale ODP",
            _client             :"ALIBB",
            start_date          :"01/01/2017",
            end_date            :"2017/2/25",

            prospection:{
                objective           :"Explain our company and our CRM",
                contact             :"JOSA",
                meeting_date        :"2017/01/15"
            },
            request:{
                service_product         :"The client wants a sofwatre car IA",
                resources               :"Software engineer, Arquiteture",
                client_response_date    :"2017/03/12",
                estimate_budget         :"70000"    
            }
        };
        
            
        beforeEach(function(){
            EditActionController = $controller('EditActionController',{
                $scope:$scope,actionService:actionsService
            });
            
            $httpBackend.when('PUT',api,response_pros).respond({name:'ACT15'});
            $httpBackend.whenGET(api).respond(response_pros);
            $httpBackend.when('DELETE',api).respond(response_pros);
            $httpBackend.when('POST', api_post).respond(response_req);
           
            
            $httpBackend.expectGET(api).respond(response_pros);
            $httpBackend.expectPUT(api);
            $httpBackend.expect('DELETE',api).respond(response_pros);
            $httpBackend.expectPOST(api_post).respond(response_req);
            
            $scope.update();
            $scope.saveNew();
            
            $httpBackend.flush();
        });
        
        it('verify the controller EditActionController is defined',function(){
            expect('EditActionController').toBeDefined();
        });
        
        it('verify the method update is defined',function(){
            expect($scope.update).toBeDefined();
        });
        
    });
    
        describe('CloseActionController',function(){
            var api = 'http://localhost:3000/actions';
            beforeEach(function(){
                CloseActionController = $controller('CloseActionController',{$scope:$scope, actionsService:actionsService});
                
                $httpBackend.when('GET',api).respond(action_list);
               
                $httpBackend.expectGET(api);
                
                $httpBackend.flush();
            });
            
            it('verify the controller CloseActionController is defined', function(){
                expect(CloseActionController).toBeDefined();
                expect($scope.numActionsWin).toEqual(0);
                expect($scope.numActionsLose).toEqual(3);
            });
            
        });
    
    
        describe('CloseDetailController',function(){
           var api = 'http://localhost:3000/actions/0';
            beforeEach(function(){
                CloseDetailController= $controller('CloseDetailController',{$scope:$scope,actionsService:actionsService});
                
                $httpBackend.expectGET(api).respond(actionClose);
                
                $httpBackend.flush();
            });
            
            it('Verify controller CloseActionDetailController is defined',function(){
                expect(CloseDetailController).toBeDefined();
            });
        });
        
        
    //CLIENTS CONTROLLERS
    var clients =[
                {
                _id:0,
                company_name    :"ALI",
                direction       :"Calle juarez 65",
                city            :"Barcelona",
                country         :"Spain",
                phone           :678902134,
                email           :"info@ali.com",
                contacts:[
                    {
                    _id          :0,
                    name        :"Raul",
                    category    :"Project Manager",
                    phone       :678542312,
                    email       :"raul@ali.com"
                    },
                    {
                    _id          :1,
                    name        :"Lauren",
                    category    :"CEO",
                    phone       :653210974,
                    email       :"lauren@ali.com"
                    }
                ]
                    },

                {
                    _id:1,
                    company_name:"MAK",
                    direction   :"Calle wer 6",
                    city        :"Barcelona",
                    country         :"Spain",
                    phone           :"678902134",
                    email           :"info@ali.com",
                    contacts:[
                            {
                            _id:0,
                            name:"Mauli",
                            category:"Manager",
                            phone:"673556612",
                            email:"mau@mak.com"
                            },
                            {
                            _id:1,
                            name:"Fari",
                            category:"CEO",
                            phone:"673556111",
                            email:"fari@mak.com"
                            }
                        ]
                    },

                {
                    _id:2,
                    company_name:"OLAPPP",
                    direction:"Calle COUTI 2",
                    city            :"Barcelona",
                country         :"Spain",
                phone           :"678902134",
                email           :"info@ali.com",
                    contacts:[
                            {
                            _id:0,
                            name:"Kelli",
                            category:"Team Leader",
                            phone:"653421320",
                            email:"kelli@olappp.com"
                            },
                            {
                            _id:1,
                            name:"Jassim",
                            category:"CTO",
                            phone:"5678901234",
                            email:"jassim@olapp.com"
                            }
                            ]
                    }
            ];
    var client=   {
            _id:0,
            company_name    :"ALI",
            direction       :"Calle juarez 65",
            city            :"Barcelona",
            country         :"Spain",
            phone           :678902134,
            email           :"info@ali.com",
        };
    var contacts=[
                            {
                            _id:0,
                            name:"Raul",
                            category:"Project Manager",
                            phone:678542312,
                            email:"raul@ali.com"
                            },
                            {
                            _id:1,
                            name:"Lauren",
                            category:"CEO",
                            phone:653210974,
                            email:"lauren@ali.com"
                            }
                        ];
    client.contacts=contacts;
    var contact={
                _id          :0,
                name        :"Raul",
                category    :"Project Manager",
                phone       :678542312,
                email       :"raul@ali.com"
                };
    
    
        describe('ClientsController',function(){
            
            var api='http://localhost:3000/clients';
            var api_put='http://localhost:3000/clients/0';
            var _id=0;
            beforeEach(function(){
                
                ClientsController=$controller('ClientsController',{$scope:$scope,clientsService:clientsService});
            
                $httpBackend.whenGET(api).respond(clients);
                $httpBackend.whenPOST(api).respond(client);
                $httpBackend.when('PUT',api_put).respond(client);
                $httpBackend.when('DELETE',api_put).respond(client);
                
                $httpBackend.expectGET(api).respond(clients);
                $httpBackend.expectPOST(api);
                $httpBackend.expectPUT(api_put);
                $httpBackend.expectDELETE(api_put);
                
                $scope.createClient();
                $scope.updateClient(_id);
                $scope.deleteClient(_id);
                $scope.returnClients();
                $httpBackend.flush();
            });
    
            it('verify clients controoller to be defined',function(){
                expect(ClientsController).toBeDefined();
            });
            
            it('verify method return client is defined',function(){
                expect($scope.returnClients).toBeDefined();
                expect($scope.clients.length).toEqual(clients.length);
                expect($scope.client).toEqual({});
            });
            
        });
    
        describe('ContactsController', function(){
            var api= 'http://localhost:3000/clients';
            var api_up='http://localhost:3000/clients/0';
            
            beforeEach(function(){
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
                
                ContactsController = $controller('ContactsController',{$scope:$scope,clientsService:clientsService});
                
                
                
                $httpBackend.whenGET(api_up).respond(client);
                $httpBackend.when('DELETE',api_up).respond(client);
                $httpBackend.when('POST',api).respond(client);
                $httpBackend.when('PUT',api_up,client).respond(client);
                
                
                $httpBackend.expectGET(api_up);
                $httpBackend.expectDELETE(api_up);
                $httpBackend.expectPOST(api);
                //$httpBackend.expectPUT(api_up);
           
               
                
                //GET OPERATION CLIENT
                $scope.getClient();
                //NEW CONTACT DELETE AND POST CLIENT OPERATION. 
                $scope.newContact();
                //EIDT CONTACT (PUT CLIENT)
                $scope.contact=contact;
                $scope.client=client;
             
                $scope.updateClientContact();
               
                $scope.deleteContact();
                $httpBackend.flush();
            });
            
             
            
            it('verify new contact to be defined',function(){
                expect($scope.newContact).toBeDefined();
                   
            });
            
            it('verify deleteContact is defined',function(){
                expect($scope.deleteContact).toBeDefined();
                expect($scope.id).toEqual(0);
                expect($scope.client.contacts.length).toEqual(2);
            });
          
            it ('verify takeContact exist',function(){
                
                expect($scope.takeContact).toBeDefined();
                expect($scope.contact.name).toEqual(contact.name);
            });
            
            it('verify updateClientContact exist',function(){
               expect($scope.updateClientContact).toBeDefined();
                
            });
        
        });
});
