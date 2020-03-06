/* eslint-disable */
import React, {Fragment,useState,useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

const PlantItem = (props) => {
    const id=props.match.params.id;
    const [plants,setPlants] = useState([]);
    const getPlants = async () =>{
        const res = await axios.get('https://floating-chamber-63070.herokuapp.com/api/plants');
        setPlants(res.data);
    }
    useEffect( () => {
        getPlants();
    },[])


    return (
        <div>
            {
                plants.map(plant=> (plant._id===id) && (


                    <Fragment>
                        <section className="post-content-section">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 post-title-block">
                                        <h1 className="text-center">{plant.name}</h1>
                                    </div>
                                    <div className="col-lg-9 col-md-9 col-sm-12">
                                        <br/>
                                        <br/>
                                        <h2>Description</h2>
                                        <p>{plant.desc}</p>
                                        <h2>Temperature</h2>
                                        <p>{plant.temperature}</p>
                                        <h2>Rainfall</h2>
                                        <p>{plant.rainfall}</p>
                                        <h2>Diseases</h2>
                                        <p>{plant.diseases}</p>
                                        <h2>Solar Radiation</h2>
                                        <p>{plant.solarRadiation}</p>
                                        <h2>Pest Management</h2>
                                        <p>{plant.pestManagement}</p>
                                    </div>
                                    <div className="col-lg-3  col-md-3 col-sm-12">
                                        <br/>
                                        <br/>
                                        <div className="well">
                                            <h2>Soil Types</h2>
                                            <p>{plant.soilTypes}</p>
                                        </div>
                                        <div className="well">
                                            <h2>Varieties</h2>
                                            <p>{plant.varieties}</p>
                                        </div>
                                        <div className="well">
                                            <img src={plant.image} alt="Image" class="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </Fragment>

                ))
            }
        </div>
    )
}

export default PlantItem
