/*eslint-disable*/
import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../Context/alert/alertContext';
import AuthContext from '../../Context/auth/authContext';

const Register = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);
    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
          props.history.push('/');
        }

        if (error === 'User already exists') {
            setAlert(error, 'danger');
            clearErrors();
        }
         // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
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

    const { name, email, password, confirmPassword,number,address,city,pincode,profession,img } = user;
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
    const ImageChange = async e => {
      setUser({...user,img: await toBase64(e.target.files[0])});
    }
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
          setAlert('Please enter all fields', 'danger');
        } else if (password !== confirmPassword) {
          setAlert('Passwords do not match', 'danger');
        } else {
          register({
            name,
            email,
            password,
            city,
            address,
            pincode,
            number,
            profession,
            img
          });
        }
      };

    return (
        <div>
            <div className="site-section pb-0 site-portfolio">
            <div className="container">
                <div className="row mb-5 align-items-end">
                <div className="col-md-6" data-aos="fade-up">
                    <h2>Register</h2>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-5 mb-md-10" data-aos="fade-up">
                    <form className="php-email-form" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-md-12 form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" className="form-control" id="name" value={name} onChange={onChange} data-rule="minlen:4" data-msg="Please enter at least 4 chars" required autofocus/>
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="name">Email</label>
                        <input type="email" className="form-control" name="email" id="email" value={email} onChange={onChange} data-rule="email" data-msg="Please enter a valid email" required />
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="number">Phone</label>
                        <input type="tel" name="number" className="form-control" id="number" value={number} onChange={onChange} data-rule="minlen:10" data-msg="Please enter a valid Phone Number" required/>
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="address">Address</label>
                        <input type="text" name="address" className="form-control" id="address" value={address} onChange={onChange} data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="city">City</label>
                        <input type="text" name="city" className="form-control" id="city" value={city} onChange={onChange} required />
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="city">Profession</label>
                        <input type="text" name="profession" className="form-control" id="propfession" value={profession} onChange={onChange} />
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="pincode">Pincode</label>
                        <input type="number" name="pincode" className="form-control" id="pincode" value={pincode} onChange={onChange} data-rule="minlen:6" data-msg="Please enter at least 6 chars" required />
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" name="password" id="password" value={password}  onChange={onChange} data-rule="minlen:6" data-msg="Please enter atleast 6 characters" required />
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="confirmPassword">Confirm Password</label>
                        <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" value={confirmPassword}  onChange={onChange} data-rule="minlen:6" data-msg="Please enter atleast 6 characters" required />
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
                        <input type="submit" className="readmore d-block w-100" value="Sign Up"/>
                        </div> 
                    </div> 
                    </form>
                </div>
                <div className="col-md-4 order-2" data-aos="fade-up">

                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Register
