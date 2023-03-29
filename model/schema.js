const mongoose = require('mongoose')

const tallyschema = new mongoose.Schema({
    state:{
        type:String,
        required:true
    },
    infected: {
        type:Number,
        // required:true
    },
    recovered: {
        type:Number,
        // required:true
    },
    death: {
        type:Number,
        // required:true
    },
})

const covidtally= mongoose.model('covidtally',tallyschema)
module.exports=covidtally