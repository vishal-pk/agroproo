/*eslint-disable*/
import React,{useContext,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Spinner from '../Layout/Spinner';

import AuthContext from "../../Context/auth/authContext";
const Profile = () => {
    const authContext=useContext(AuthContext);
    const {user}=authContext;
    if(user){
    return (
        <div>
            <div className="site-section pb-0 site-portfolio">
            <div className="container">
                <div className="row mb-5 align-items-end">
                <div className="col-md-6" data-aos="fade-up">
                    <h2>My Profile</h2>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-5 mb-md-10" data-aos="fade-up">
                    <form className="php-email-form">
                    <div className="row">
                        <div className="col-md-12 form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" className="form-control" id="name" value={user.name}  data-rule="minlen:4" data-msg="Please enter at least 4 chars" disabled required autofocus/>
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="name">Email</label>
                        <input type="email" className="form-control" name="email" id="email" value={user.email}  data-rule="email" data-msg="Please enter a valid email" disabled required />
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="number">Phone</label>
                        <input type="tel" name="number" className="form-control" id="number" value={user.number}  data-rule="minlen:10" data-msg="Please enter a valid Phone Number" disabled required/>
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="address">Address</label>
                        <input type="text" name="address" className="form-control" id="address" value={user.address}  data-rule="minlen:4" data-msg="Please enter at least 4 chars" disabled required />
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="city">City</label>
                        <input type="text" name="city" className="form-control" id="city" value={user.city} disabled required />
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="city">Profession</label>
                        <input type="text" name="profession" className="form-control" id="propfession" value={user.profession} disabled />
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="pincode">Pincode</label>
                        <input type="number" name="pincode" className="form-control" id="pincode" value={user.pincode}  data-rule="minlen:6" data-msg="Please enter at least 6 chars" required disabled />
                        <div className="validate"></div>
                        </div>
                        {/* <div class="col-md-12 input-group mb-5">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroupFileAddon01">Image</span>
                          </div>
                          <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile01"
                              aria-describedby="inputGroupFileAddon01" onChange={ImageChange} />
                            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                          </div>
                        </div>*/}
                        <div className="col-md-6 form-group">
                        <Link to='/profile/edit' className="readmore d-block w-100 mt-5">Edit Profile</Link>
                        </div> 
                    </div>
                    </form>
                </div>
                <div className="col-md-4 order-2" data-aos="fade-up">
                <p><img src={user.img} alt="Image" height="300px" width="400px" class="img-fluid"/></p>
                {/* <Link to='/profile/edit'><button className='btn btn-elegant'>Edit Profile</button></Link> */}
                </div>
                </div>
            </div>
            </div>
        </div>
    )
    } else {
        return(<Spinner />)
    }
}

export default Profile







 