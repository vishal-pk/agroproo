/*eslint-disable*/
import React, { useState, useContext, useEffect } from 'react';
import Spinner from '../Layout/Spinner';
import AuthContext from '../../Context/auth/authContext';
import AlertContext from '../../Context/alert/alertContext';

const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
        props.history.push('/');
        }

        if (error === 'Invalid Credentials') {
        setAlert(error, 'danger');
        clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
        setAlert('Please fill in all fields', 'danger');
        } else {
        while(login({
            email,
            password
        })){
            return <Spinner />;
        }
        }
    };

    return (
        <div>
            <div className="site-section pb-0 site-portfolio">
            <div className="container">
                <div className="row mb-5 align-items-end">
                <div className="col-md-6" data-aos="fade-up">
                    <h2>Login</h2>
                </div>
                </div>
                <div className="row">
                <div className="col-md-6 mb-5 mb-md-10" data-aos="fade-up">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form" onSubmit={onSubmit}>
                    <div className="row">
                        <div className="col-md-12 form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" className="form-control" id="email" data-rule="email" data-msg="Please enter a valid email" value={email} onChange={onChange}/>
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-12 form-group">
                        <label for="name">Password</label>
                        <input type="password" className="form-control" name="password" id="password" data-rule="minlen:6" data-msg="Please enter atleast 6 characters" value={password}  onChange={onChange} />
                        <div className="validate"></div>
                        </div>
                        <div className="col-md-6 form-group">
                        <input type="submit" className="readmore d-block w-100" value="Log In"/>
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

export default Login
