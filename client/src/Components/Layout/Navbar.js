/* eslint-disable */
import React, { Fragment,useContext,useEffect } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/auth/authContext'

const Navbar = () => {
    const authContext = useContext(AuthContext);

    const { isAuthenticated, logout } = authContext;
    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
      }, []);

    const authLinks = (
        <Fragment>
            <li><Link to='/profile'>My Profile</Link></li>
            <li><Link to='/' onClick={logout}>Logout</Link></li>
            <li><Link to='/myads'>My Ads</Link></li>
            <div class="modal fade" id="centralModalSm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"aria-hidden="true">
            <div class="modal-dialog modal-sm" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title w-100" id="myModalLabel">Are you sure?</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-elegant btn-sm" data-dismiss="modal" onClick={logout}>Yes</button>
                    <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">No</button>
                </div>
                </div>
            </div>
            </div>
         </Fragment>
     
    );
    
     const guestLinks = (
        <Fragment>
          <li><Link to='/login' /*data-toggle="modal" data-target="#modalLRForm"*/>Login</Link></li>
          <li><Link to='/register' /*data-toggle="modal" data-target="#modalLRForm"*/>Register</Link></li>
        </Fragment>
    );

    return (
        <Fragment>
            <div className=" collapse navbar-collapse custom-navmenu" data-toggle="collapse" data-target=".navbar-collapse.show" id="main-navbar">
                <div className="container py-2 py-md-5">
                <div className="row align-items-start">
                    <div className="col-md-2">
                    <ul className="custom-menu">
                        <li className="active"><Link to='/'>Home</Link></li>
                        <li><Link to='/plants'>Crops</Link></li>
                        <li><Link to='/forum'>Forum</Link></li>
                        <li><Link to='/ads' >Store</Link></li>
                        <li><Link to='/about'>About</Link></li>
                      
                        {isAuthenticated ? authLinks : guestLinks}
                    </ul>
                    </div>
                    <div className="col-md-6 d-none d-md-block  mr-auto">
                    <div className="tweet d-flex">
                        <span className="icofont-twitter text-white mt-2 mr-3"></span>
                        <div>
                        <p><em>Agriculture, manufactures, commerce and navigation, the four pillars of our prosperity, are the most thriving when left most free to individual enterprise.</em><br/></p>
                        <p>&mdash; Jean Hicks</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                    <h3></h3>
                    <p>Earth is here so kind, that just tickle her with a hoe and she laughs with a harvest.</p>
                    <p>&mdash; Douglas Jerrold</p>
                    </div>
                </div>

                </div>
            </div>

            <nav className="navbar custom-navbar">
                <div className="container">
                <Link className="navbar-brand" to='/'>AgroPro</Link>

                <Link className="burger" data-toggle="collapse" data-target="#main-navbar">
                    <span></span>
                </Link>

                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar
