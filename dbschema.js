var mongoose    = require ('mongoose');
var Schema      = mongoose.Schema;

var actionSchema= new Schema({
    action_name         :{type:String,required:true},
    action_Description  :{type:String,required:true},
   _client            :{type:mongoose.Schema.Types.ObjectId,ref:'Client',required:true},
    contact             :{type:String,required:true},
    seller              :{type:String},
    start_date          :{type:Date,required:true,default: Date.now},
    end_date            :{type:Date,required:true},
    
    prospection:{
        pros_date       :{type:Date},
        pros_objective  :{type:String},
        pros_summary    :{type:String}
    },

    request:{
        req_service_product     :{type:String},
        req_resources           :{type:String},
        client_response_date    :{type:Date},
        estimate_budget         :{type:Number},
        estimate_margin         :{type:String}
    },
    
    response:{
        offer_name              :{type:String},
        offer_budget            :{type:Number},
        offer_margin            :{type:String},
        date_send               :{type:Date},
        date_present            :{type:Date},
        client_decison_maker    :{type:String}, 
    },

    feedback_client:{
        offer_win           :{type:Boolean},
        project_start_date  :{type:Date},
        client_feedback     :{type:String}
    }
}, {
timestamps:true
});


// the schema is useless so far
// we need to create a model using it
var Actions = mongoose.model('Action', actionSchema);

// make this available to our Node applications
module.exports = Actions;