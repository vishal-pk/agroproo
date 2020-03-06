/* eslint-disable */
import React from 'react';
import Navbar from './Components/Layout/Navbar';
import Landing from './Components/Layout/Landing';
import About from './Components/Layout/About';
import Plants from './Components/Layout/Plants';
import PlantsDisplay from './Components/Plants/PlantsDisplay';
import PlantItem from './Components/Plants/PlantItem';
import Forum from './Components/Forum/Forum'; 
import ForumItem from './Components/Forum/ForumItem';
import Ads from './Components/Ad/Ads';
import Footer from './Components/Layout/Footer';
import LoginModal from './Components/Auth/LoginModal';
import Login from './Components/Auth/Login';
import Profile from './Components/Auth/Profile';
import Register from './Components/Auth/Register';
import Alerts from './Components/Layout/Alerts';
import CreatePost from './Components/Forum/CreatePost';
import CreateAd from './Components/Ad/CreateAd';
import EditProfile from './Components/Auth/EditProfile';
import MyAds from './Components/Ad/MyAds';
import AdItem from './Components/Ad/AdItem';
import PostState from './Context/forum/PostState';
import AddState from './Context/adds/AddState';
import AuthState from './Context/auth/AuthState';
import AlertState from './Context/alert/AlertState';
import PrivateRoute from './Components/routing/PrivateRoute';
import setAuthToken from './utils/setAuthToken';
import Image from './Components/Layout/Image';



import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App(){
  return (
      <AuthState>
      <PostState>
      <AlertState>
      <AddState>
      <Router>
        <Navbar />
        <Alerts />
        <LoginModal />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/about' component={About} />
          <Route exact path='/profile' component={Profile} />
          <Route exact path='/profile/edit' component={EditProfile} />
          <Route exact path='/plants' component={Plants} />
          <Route exact path='/plants/:id' component={PlantsDisplay} />
          <Route exact path='/plants/:category/:id' component={PlantItem} />
          <Route exact path='/forum' component={Forum} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute exact path= '/forum/create' component={CreatePost} />
          <PrivateRoute exact path= '/ad/create' component={CreateAd} />
          <Route exact path='/forum/:id' component={ForumItem} />
          <Route exact path='/ads' component={Ads} />
          <Route exact path='/ads/:id' component={AdItem} />
          <Route exact path='/myads' component={MyAds} />
          <Route exact path='/image' component={Image} />
        </Switch>
        {/* <Footer /> */}
      </Router>
      </AddState>
      </AlertState>
      </PostState>
      </AuthState>

  );
}

export default App;
