const express = require('express');
const router = express.Router();

const Plant = require('../models/Plant');


router.get('/', async (req , res) =>{
    try{
        const plants = await Plant.find({});
        res.json(plants);
    }
    catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req, res) => {
    
    const { name,desc,category,temperature,rainfall,diseases,majorProducers,highestProducer,research,soilTypes,varieties,highestCountry } = req.body;
    try {
      const newPlant = new Plant({
        name,
        desc,
        category,
        temperature,
        rainfall,
        diseases,
        majorProducers,
        highestProducer,
        research,
        soilTypes,
        varieties,
        highestCountry
      });
      const plant = await newPlant.save();
      res.json(plant);
    }catch (err) {
        console.error(er.message);
        res.status(500).send('Server Error');
      }
});



module.exports = router;