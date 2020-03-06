/*eslint-disable */
import React,{useContext,useEffect} from 'react'
import {Link} from 'react-router-dom'
import AddContext from '../../Context/adds/addContext';
import AuthContext from "../../Context/auth/authContext";

const MyAds = () => {
    const addContext = useContext(AddContext);
    const {adds,getAdds,loading} = addContext;
    const authContext=useContext(AuthContext);
    const {user}=authContext;
    useEffect(() =>{
        getAdds();
    },[]);

    return (
        <div>
            <div className="container"> 
            <br/>
                <h1>YOUR ADS<Link to='/ad/create' style={{float: "right"}}><button type="button" class="btn btn-elegant">Create AD</button></Link></h1>
                <br/>
                <h4>Ads:</h4>
                <div className="row">
                
                {(user)&&(adds.map( ad => (
                    (user._id===ad.user) && (
                    <div className="col-md-4 mb-5">
                        <div className="card card-cascade wider">
                        <div className="view view-cascade overlay">
                        <img  className="card-img-top" src= {ad.img} objectFit="cover" width="100px" height="300px" alt="Add image"/>
                        <Link>
                            <div className="mask rgba-white-slight"></div>
                        </Link>
                        </div>
                        <div className="card-body card-body-cascade text-center">
                        <h4 className="card-title"><strong> {ad.title} </strong></h4>
                        <h5 className="blue-text pb-2">{ad.price} ₹/Kg</h5>
                        <p className="card-text">Seller - {ad.userName}</p>
                        <Link to={`/ads/${ad._id}`} className="px-2 fa-lg fb-ic"><button type="button" className="btn btn-elegant">See Ad</button></Link>
                        </div>
                        </div>
                    </div>
                ))))}
                </div>
            </div>
        </div>
    )
}

export default MyAds;
