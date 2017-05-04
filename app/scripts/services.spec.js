describe('Services',function(){
     var update_action={
        "id": 5,
      "name": "ACT 1",
      "description": "Sale CRM",
      "_client": "ALIBB",
      "start_date": "2017/1/02",
      "end_date": "2017/5/19",
      "prospection": {
        
        "objective": "Explain our company and our CRM",
        "contact": "Juan Barregon 67896561234 juan@alibb.com",
        "meeting_date": "2017/01/15"
      },
      "request": {
        "service_product": "The client wants a CRM installation",
        "resources": "Software engineer, system engineer, software Arquiteture",
        "response_date": "2017/02/12",
        "estimate_budget": "50000"
      },
      "response": {
        "offer_name": "CRM for MAK company",
        "offer_document":"Document.pdf",
        "offer_budget": "55000",
        "offer_margin": "30%",
        "date_send": "2017/02/10"
      },
      "feedback": {
        "offer_win": "true",
        "project_start_date": "2017/03/03",
        "description": "Good buy our project"
      }
  };
    
var responseSuccess={
        "id": 5,
      "name": "ACT 1",
      "description": "Sale CRM",
      "_client": "ALIBB",
      "start_date": "2017/1/02",
      "end_date": "2017/5/19",
      "prospection": {
        
        "objective": "Explain our company and our CRM",
        "contact": "Juan Barregon 67896561234 juan@alibb.com",
        "meeting_date": "2017/01/15"
      },
      "request": {
        "service_product": "The client wants a CRM installation",
        "resources": "Software engineer, system engineer, software Arquiteture",
        "response_date": "2017/02/12",
        "estimate_budget": "50000"
      },
      "response": {
        "offer_name": "CRM for MAK company",
        "offer_document":"Document.pdf",
        "offer_budget": "55000",
        "offer_margin": "30%",
        "date_send": "2017/02/10"
      },
      "feedback": {
        "offer_win": "true",
        "project_start_date": "2017/03/03",
        "description": "Good buy our project"
      }

  };
    
    var action_list = [
   {
      "id": 0,
      "name": "ACT 78",
      "description": "Sale Web service TDD development",
      "_client": "GOOGLE",
      "start_date": "2017/1/02",
      "end_date": "2017/6/19",
      "prospection": {
        "objective": "Explain Wbe services Arquitecture and tdd development",
        "contact": "Manuel Frnacis 867921234 manuel@google.es",
        "meeting_date": "2017/03/15"
      },
      "request": {
        "service_product": "The client wants a Rest api installation on the server",
        "resources": "Software engineer,  software Arquiteture",
        "response_date": "2017/04/12",
        "estimate_budget": "90000"
     },
      "response": {
        "offer_name": "REST api for OLAPPP company",
        "offer_document":"Document.pdf",
        "offer_budget": "95000",
        "offer_margin": "33%",
        "date_send": "2017/04/24"
      }
    },
    {
      "id": 1,
      "name": "ACT 23",
      "description": "SAle BPM",
      "_client": "Pepsico",
     "start_date": "2017/1/02",
      "end_date": "2017/01/25"
    },
    {
      "id": 2,
      "name": "ACT 15",
      "description": "Sale ODP",
      "_client": "ALIBB",
      "end_date": "2017/2/25",
      "start_date": "2017/1/02",
      "prospection": {
        "objective": "Explain our company and our CRM",
        "contact": "Fergin Hastum 678172345 fregin@alibb.com",
        "meeting_date": "2017/01/15"
      }
    },
    {
      "id": 3,
      "name": "ACT 64",
      "description": "Act new client",
      "_client": "PASY",
     "start_date": "2017/1/02",
      "end_date": "2017/6/25"
    },
    {
      "id": 4,
      "name": "ACT 15",
      "description": "Sale ODP",
      "_client": "ALIBB",
      "start_date": "2017/1/02",
      "end_date": "2017/2/25",
      "prospection": {
        "objective":"Explain our company and finance software",
        "contact": "Hasan Balum 678912309 hasan@alibb.com",
        "meeting_date": "2017/01/15"
      },
      "request": {
        "service_product": "The client not like a CRM installation",
        "resources": "Software engineer, system engineer, software Arquiteture",
        "response_date": "",
        "estimate_budget": ""
      },
      "feedback": {
        "offer_win": "false",
        "project_start_date": "22/1/2017",
        "description": ""
      }
    },
    {
      "id": 5,
      "name": "ACT 1",
      "description": "Sale CRM",
      "_client": "ALIBB",
      "start_date": "2017/1/02",
      "end_date": "2017/5/19",
      "prospection": {
        
        "objective": "Explain our company and our CRM",
        "contact": "Juan Barregon 67896561234 juan@alibb.com",
        "meeting_date": "2017/01/15"
      },
      "request": {
        "service_product": "The client wants a CRM installation",
        "resources": "Software engineer, system engineer, software Arquiteture",
        "response_date": "2017/02/12",
        "estimate_budget": "50000"
      },
      "response": {
        "offer_name": "CRM for MAK company",
        "offer_document":"Document.pdf",
        "offer_budget": "55000",
        "offer_margin": "30%",
        "date_send": "2017/02/10"
      },
      "feedback": {
        "offer_win": "true",
        "project_start_date": "2017/03/03",
        "description": "Good buy our project"
      }
    },
    {
      "id": 6,
      "name": "ACT 2",
      "description": "Sale Web service development",
      "_client": "SONY",
      "start_date": "2017/1/02",
      "end_date": "2017/5/19",
      "prospection": {
        "objective": "Explain Wbe services Arquitecture",
        "contact": "Javier Fluma 567892153 javier@sony.es",
        "meeting_date": "2017/01/15"
      },
      "request": {
        "service_product": "The client wants a Rest api installation on the server",
        "resources": "Software engineer,  software Arquiteture",
        "response_date": "2017/04/12",
        "estimate_budget": "70000"
      },
      "response": {
        "offer_name": "REST api for OLAPPP company",
        "offer_document":"Document.pdf",
        "offer_budget": "70000",
        "offer_margin": "33%",
        "date_send": "2017/01/24"
      },
      "feedback": {
        "offer_win": "true",
        "project_start_date": "2017/02/017",
        "description": "Good buy our project"
      }
    },
    {
      "id": 7,
      "name": "ACT 3",
      "description": "ASI Web service development",
      "_client": "SONY",
      "start_date": "2017/1/02",
      "end_date": "2017/5/19",
      "prospection": {
        
        "objective": "Explain Wbe services Arquitecture",
        "contact": "Mascoder Nasui 7689123547 mascoder@sony.com",
        "meeting_date": "2017/02/18"
      }
    },
    {
      "id": 8,
      "name": "ACT 4",
      "description": "Car software development",
      "_client": "BMB",
      "start_date": "2017/1/02",
      "end_date": "2017/3/19",
      "prospection": {
        "objective": "Explain our Car software arquitecture",
        "contact": "Lorenzo Rodirgo 6578192391 lorenzo@bmb.es",
        "meeting_date": "2017/02/17"
      },
      "request": {
        "service_product": "The client wants a sofwatre car IA",
        "resources": "Software engineer, Arquiteture",
        "response_date": "2017/03/12",
        "estimate_budget": "70000"
      }
    },
    {
      "name": "ACT 22222",
      "description": "Mi primera accion def fdasfdfsasdasdfasddd",
      "_client": "google",
      "start_date": "2017/1/02",
      "end_date": "2017-02-20T23:00:00.000Z",
      "id": 9,
      "prospection": {
        "objective": "My new prospect is comming",
        "meeting_date": "2017-02-23T23:00:00.000Z",
        "contact": "josep hasmen 609092143 josep@google.es"
      }
    }
];
    
    
    
 
    
    //VAR AND MOCK OBJECTS
    var  $httpBackend, actionsService, result, clientsService, salesService;
    
    beforeEach(angular.mock.module('myApp'));
    
    beforeEach(inject(function(_$httpBackend_, _actionsService_,_clientsService_,_salesService_){    
        $httpBackend        =_$httpBackend_;
        actionsService      =_actionsService_;
        clientsService      =_clientsService_;
        salesService        =_salesService_;
    }));
 
    
    
    describe('actionsService',function(){
        
          var api = 'http://localhost:3000/actions';
        
        beforeEach(function() {
            // Initialize our local result object to an empty object before each test
            result = {};
            // Spy on our service call but allow it to continue to its implementation
            spyOn(actionsService, "getActions").and.callThrough(); 
        });
        
      
        
        it('Verify actionsService is create',function(){
            expect(actionsService).toBeDefined();
        });
    
        describe('getActions',function(){
            
            it('Verify getActions method of actionsService has create', function(){
                expect(actionsService.getActions).toBeDefined();
             });
            
            //GET OPERATION TO THE SERVER API END POINT
            it('Expect a method that retunr an action list',function(){
                $httpBackend.whenGET(api).respond(action_list);
                actionsService.getActions().query(function(response){
                    result=response;
                });
                $httpBackend.flush();
                expect(result[0].description).toEqual(action_list[0].description); 
            });
            
            //PUT OPERATION TO THE SERVER API END POINT
            it('Expect a method that update the action PUT operation',function(){
                var data_update;
                var api_update = 'http://localhost:3000/actions/0';
                
                actionsService.getActions().update({id:0},update_action,
                    function(upd){
                    data_update=upd;
                    console.log(upd);
                }); 

                $httpBackend.when('PUT',api_update).respond(responseSuccess);
                
                $httpBackend.expectPUT(api_update);
                
                $httpBackend.flush();
                
                expect(data_update.id).toEqual(5);
            });
        });
    });
    
    

    
    
    describe('clientsService',function(){
        //CLIENT SERVICE

        var clients =
        [
            {
                    "id":0,
                    "company_name":"ALI",
                    "direction":"Calle j 65",
                    "contacts":[
                        {
                        "id":0,
                        "name":"Raul",
                        "category":"Project Manager",
                        "phone":"678542312",
                        "email":"raul@ali.com"
                        },
                        {
                        "id":1,
                        "name":"Lauren",
                        "category":"CEO",
                        "phone":"653210974",
                        "email":"lauren@ali.com"
                        }
                    ]
                },

            {
                    "id":1,
                    "company_name":"MAK",
                    "direction":"Calle wer 6",
                    "contacts":[
                        {
                        "id":0,
                        "name":"Mauli",
                        "category":"Manager",
                        "phone":"673556612",
                        "email":"mau@mak.com"
                        },
                        {
                        "id":1,
                        "name":"Fari",
                        "category":"CEO",
                        "phone":"673556111",
                        "email":"fari@mak.com"
                        }
                    ]
                },

            {
                    "id":3,
                    "company_name":"OLAPPP",
                    "direction":"Calle COUTI 2",
                    "contacts":[
                        {
                        "id":0,
                        "name":"Kelli",
                        "category":"Team Leader",
                        "phone":"653421320",
                        "email":"kelli@olappp.com"
                        },
                        {
                        "id":1,
                        "name":"Jassim",
                        "category":"CTO",
                        "phone":"5678901234",
                        "email":"jassim@olapp.com"
                        }
                        ]
                }
        ];
        
        var client =
              {
                    "id":0,
                    "company_name":"ALI",
                    "direction":"Calle j 65",
                    "contacts":[
                        {
                        "id":0,
                        "name":"Raul",
                        "category":"Project Manager",
                        "phone":"678542312",
                        "email":"raul@ali.com"
                        },
                        {
                        "id":1,
                        "name":"Lauren",
                        "category":"CEO",
                        "phone":"653210974",
                        "email":"lauren@ali.com"
                        }
                    ]
                };
    
        var api_query='http://localhost:3000/clients';
        var api_put  ='http://localhost:3000/clients/0';
        var response;
        var up;
        var po;
        
        
        beforeEach(function() {
            
            // Spy on our service call but allow it to continue to its implementation
          spyOn(clientsService, "getClients").and.callThrough(); 
        });
    
        it('Verify getClients exist',function(){
            expect(clientsService.getClients).toBeDefined();
        });
            
        
        
       it('verify de backen',function(){
           
            $httpBackend.whenGET(api_query).respond(clients);
            $httpBackend.when('PUT',api_put).respond(client);
            $httpBackend.when('POST',api_query).respond(client);
           
            clientsService.getClients().query(function(res){
                    response=res;
            });
             
            clientsService.getClients().update({id:0},client,function(res){
                up=res;
            });
           
           clientsService.getClients().save(client,function(res){
               po=res;
           });
           
           
            $httpBackend.expectGET(api_query).respond(clients);
            $httpBackend.expectPUT(api_put);
            $httpBackend.expectPOST(api_query); 
           
            $httpBackend.flush();
            console.log('QUERY :');
            console.log( response);
            console.log(up);
            console.log(po);
           
            expect(response.length).toEqual(3);
           
           
        });
         
    });
    
    describe('salesService',function(){
        it('Verify salesService is defined',function(){
            expect(salesService).toBeDefined();
        });
    });
    
    
});