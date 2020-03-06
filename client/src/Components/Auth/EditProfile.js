/*eslint-disable*/
import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../Context/auth/authContext';
import AlertContext from '../../Context/alert/alertContext';
import {Link} from 'react-router-dom';
import Spinner from '../Layout/Spinner';


const EditProfile = (props) => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);
    const {user,editUser} = authContext;
    const { setAlert } = alertContext;
    
    const [euser, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        number: '',
        address: '',
        city: '',
        pincode: '',
        profession:'',
        img:''
      });

      useEffect(() => {
          setUser(user);
        //   console.log(euser);
      }, [authContext, user]);

    const onChange = e =>{
    setUser({ ...euser, [e.target.name]: e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
          editUser(euser);
        props.history.push('/profile')
      };

      const ImageChange = async e => {
        setUser({...euser,img: await toBase64(e.target.files[0])});
      }
      const toBase64 = file => new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
      });

      if(euser){
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
                        <form className="php-email-form" onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-md-12 form-group">
                            <label for="name">Name</label>
                            <input type="text" name="name" className="form-control" id="name" value={euser.name} onChange={onChange} data-rule="minlen:4" data-msg="Please enter at least 4 chars" required autofocus/>
                            <div className="validate"></div>
                            </div>
                            <div className="col-md-12 form-group">
                            <label for="name">Email</label>
                            <input type="email" className="form-control" name="email" id="email" value={euser.email} onChange={onChange} data-rule="email" data-msg="Please enter a valid email" required />
                            <div className="validate"></div>
                            </div>
                            <div className="col-md-12 form-group">
                            <label for="number">Phone</label>
                            <input type="tel" name="number" className="form-control" id="number" value={euser.number} onChange={onChange} data-rule="minlen:10" data-msg="Please enter a valid Phone Number" required/>
                            <div className="validate"></div>
                            </div>
                            <div className="col-md-12 form-group">
                            <label for="address">Address</label>
                            <input type="text" name="address" className="form-control" id="address" value={euser.address} onChange={onChange} data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                            <div className="validate"></div>
                            </div>
                            <div className="col-md-12 form-group">
                            <label for="city">City</label>
                            <input type="text" name="city" className="form-control" id="city" value={euser.city} onChange={onChange} required />
                            <div className="validate"></div>
                            </div>
                            <div className="col-md-12 form-group">
                            <label for="city">Profession</label>
                            <input type="text" name="profession" className="form-control" id="profession" value={euser.profession} onChange={onChange} />
                            <div className="validate"></div>
                            </div>
                            <div className="col-md-12 form-group">
                            <label for="pincode">Pincode</label>
                            <input type="number" name="pincode" className="form-control" id="pincode" value={euser.pincode} onChange={onChange} data-rule="minlen:6" data-msg="Please enter at least 6 chars" required />
                            <div className="validate"></div>
                            </div>
                            <div class="col-md-12 input-group mb-5">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroupFileAddon01">Image</span>
                              </div>
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile01"
                                  aria-describedby="inputGroupFileAddon01" onChange={ImageChange} />
                                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                              </div>
                            </div>
                            <div className="col-md-6 form-group">
                            <input type="submit" className="readmore d-block w-100" value="Save Changes"/>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="col-md-4 order-2" data-aos="fade-up">
                    {/* <p><img src={user.img} alt="Image" class="img-fluid"/></p> */}
                    {/* <p><button className='btn btn-elegant'>Edit Profile</button></p> */}
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

export default EditProfile
