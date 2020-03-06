const mongoose = require('mongoose');

const PlantSchema = mongoose.Schema({
    name: {
        type:String,
       // required: true
    },
    desc: {
        type: String,
        // required: true
    },
    category: {
        type: String,
       // required: true
    },
    temperature: {
        type: String,
       // required: true
    },
    rainfall:{
        type: String,
       // required: true
    },
    diseases:{
        type: String,
       // required: true
    },
    solarRadiation:{
        type: String,
       // required: true
    },
    pestManagement:{
        type: String,
       // required: true
    },
    image:{
        type: String,
       // required: true
    },
    soilTypes:{
        type: String,
        //required: true
    },
    varieties:{
        type: String,
        //required: true
    }
});


module.exports = mongoose.model('plant', PlantSchema);
