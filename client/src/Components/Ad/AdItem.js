/*eslint-disable*/
import React,{useContext,Fragment,useEffect,useState} from 'react'
import AddContext from '../../Context/adds/addContext';
import AuthContext from '../../Context/auth/authContext';

const AdItem = (props) => {
    const addContext = useContext(AddContext);
    const authContext=useContext(AuthContext);
    const { user }=authContext;
    const {adds,getAdds,loading,setCurrent,updateAdd,deleteAdd} = addContext;
    const id=props.match.params.id; 

    useEffect(()=>{
        getAdds();
    },[]);

    const onDelete= e =>{
        deleteAdd(id);  
        props.history.push('/ads');
    }

    const authLinks = (add)=>(
        <Fragment>
            <div className="card my-4">
                <h5 className="card-header">Ad Options</h5>
                <div className="card-body">
                    <button className="btn btn-sm btn-outline-danger" onClick={onDelete}>Delete</button>
                    <button type="button" onClick={() =>{ 
                        updateAdd(add);
                        setCurrent(add);
                        props.history.push('/ad/create') }} className="btn btn-sm btn-outline-warning">Edit</button>
                </div>
            </div>
         </Fragment>
     );

    return (
        <div>
            { 
            adds.map(add => (add._id===id) && (
            <div className="container">
                <div className="row fadeIn">
                <div className="col-lg-8">
                    <h1 className="mt-4">{add.title}</h1>
                    <p className="lead">
                    - {add.userName}
                    <a href="#">  </a>
                    </p>
                    <hr></hr>
                    <p>Posted on  {add.date.toString()}  </p>
                    <hr></hr>
                    <img className="rounded" src={add.img} height="400px" width="700px" objectFit="cover"  alt="Ad Image"></img>
                    <hr></hr>
                    <h4>Details:</h4>
                    <h6>Price:</h6><p className="lead">{add.price} ₹/Kg</p>
                    <h6>Description:</h6><p className="lead">{add.desc}</p>
                    <h6>Location:</h6><p className="lead">{add.location}</p>
                    <h6>Phone:</h6><p className="lead">{add.number}</p>
                    <h6>Email:</h6><p className="lead">{add.email}</p>
                    <hr></hr>
                </div>
                 <div className="col-md-4">
                   {user && user._id === add.user && authLinks(add) }
                </div>
                </div>
                </div>
            ))}
        </div>
    )
}

export default AdItem
