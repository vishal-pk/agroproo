/* eslint-disable */
import React, { Fragment,useState,useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


const PlantsDisplay = (props) => {
    const [plants,setPlants] = useState([]);
    const getPlants = async () =>{
        const res = await axios.get('https://floating-chamber-63070.herokuapp.com/api/plants');
        setPlants(res.data);
    }
    useEffect( () => {
        getPlants();
    },[])

    const category=props.match.params.id;

    return (
        <Fragment>
            <div className="site-section pb-0 site-portfolio">
                <div className="container">
                    <div className="row mb-5 align-items-end">
                    <div className="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
                        <h2>{category}</h2>
                        {(category === "Cereals") && (<p className="mb-0">A cereal is any grass cultivated (grown) for the edible components of its grain (botanically, a type of fruit called a caryopsis), composed of the endosperm, germ, and bran. The term may also refer to the resulting grain itself (specifically "cereal grain")</p>)}
                        {(category === "Millets") && (<p className="mb-0">Millets are a group of highly variable small-seeded grasses, widely grown around the world as cereal crops or grains for fodder and human food. Millets are important crops in the semiarid tropics of Asia and Africa, with 97% of millet production in developing countries.</p>)}
                        {(category === "Pulses") && (<p className="mb-0">Pulses are the edible seeds of plants in the legume family. Pulses grow in pods and come in a variety of shapes, sizes and colors. The United Nations Food and Agriculture Organization (FAO) recognizes 11 types of pulses: dry beans, dry broad beans, dry peas, chickpeas, cow peas, pigeon peas, lentils, Bambara beans, vetches, lupins and pulses nes </p>)}
                        {(category === "OilSeeds") && (<p className="mb-0">The most important oilseed crops grown in the State are Rape and Mustard. The bulk of production of Rape and Mustard is in Garo Hills, which constitutes upto 96% and 97% of the Area and Production under oilseeds respectively. Other oilseed crops are Groundnut, Soyabean, Sesamum, Castor, Linseed and Sunflower.</p>)}
                        {(category === "FibreCrops") && (<p className="mb-0">Fibre crops are crops grown for Fibres. These Fibres are used to make things such as cloth, rope, or paper. the three most notable examples include: Cotton. Cotton is the most popular and widely used fibre crop</p>)}
                        {(category === "SugarCrops") && (<p className="mb-0">Sugar crops, such as sugar cane, sugar beet and sweet sorghum, can be used as feedstocks for both conventional biofuels (ethanol via fermentation of sugar) and/or advanced biofuels. Residual beet pulp and bagasse (the fibrous material left after sugar extraction from cane or sorghum) can be used to produce cellulosic ethanol. Fermentable sugars can also be converted to 'drop-in' biofuels via biotechnology (e.g. Amyris/Total) or chemical catalysis (e.g. Virent).</p>)}
                        {(category === "ForageCrops") && (<p className="mb-0">Forage crops are crops grown specifically to be grazed by livestock or conserved as hay or silage. Forage crops assist in achieving production targets for attributes such as growth or weight gain and to make up seasonal short falls between feed demand and supply.</p>)}
                        {(category === "OtherCrops") && (<p className="mb-0">A crop is a plant or animal product that can be grown and harvested extensively for profit or subsistence.[1] Crop may refer either to the harvested parts or to the harvest in a more refined state. Most crops are cultivated in agriculture or aquaculture. A crop may include macroscopic fungus (e.g. mushrooms), or alga (algaculture).Most crops are harvested as food for humans or fodder for livestock. Some crops are gathered from the wild (including intensive gathering, e.g. ginseng).Important non-food crops include horticulture, floriculture and industrial crops. Horticulture crops include plants used for other crops (e.g. fruit trees). Floriculture crops include bedding plants, houseplants, flowering garden and pot plants, cut cultivated greens, and cut flowers. Industrial crops are produced for clothing (fiber crops), biofuel (energy crops, algae fuel), or medicine (medicinal plants).</p>)}
                    </div>
                    </div>
                    <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
                    {plants.map(plant=>(
                    (category === plant.category) && (
                    <div className="item web col-sm-6 col-md-4 col-lg-4 mb-20">
                        <Link to={`/plants/${category}/${plant._id}`} className="item-wrap fancybox">
                            <div className="work-info">
                                <h3>{plant.name}</h3>
                                <span></span>
                            </div>
                            <img  width="400px" height="300px" objectFit="cover" src={plant.image} />
                        </Link>
                    </div>
                    )))}
                    </div>
                </div>
            </div>
            </Fragment>
    )
}

export default PlantsDisplay;
