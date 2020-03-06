/* eslint-disable */
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Plants = () => {
    return (
        <Fragment>
            <div className="site-section pb-0 site-portfolio">
            <div className="container">
                <div className="row mb-5 align-items-end">
                <div className="col-md-12 col-lg-6 mb-4 mb-lg-0" data-aos="fade-up">
                    <h2>Categories</h2>
                    <p className="mb-0">Choose the plant category you want to know about.</p>
                </div>
                </div>
                <div id="portfolio-grid" className="row no-gutter" data-aos="fade-up" data-aos-delay="200">
                <div className="item web col-sm-6 col-md-4 col-lg-4 mb-20">
                    <Link to="/plants/Cereals" className="item-wrap fancybox">
                    <div className="work-info">
                        <h3>Cereals</h3>
                        <span></span>   
                    </div>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1465765407776-61e63b99d10c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" />
                    </Link>
                </div>
                <div className="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                    <Link to="/plants/Millets" className="item-wrap fancybox">
                    <div className="work-info">
                        <h3>Millets</h3>
                        <span></span>
                    </div>
                    <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2J7ufPtqiaxJrvgKxJUr8t2DeXLtObFNJxagkN1hQeLxxtctO"/>
                    </Link>
                </div>
                <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                    <Link to="/plants/Pulses" className="item-wrap fancybox">
                    <div className="work-info">
                        <h3>Pulses</h3>
                        <span></span>
                    </div>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
                    </Link>
                </div>
                <div className="item design col-sm-6 col-md-4 col-lg-4 mb-4">
                    <Link to="/plants/OilSeeds" className="item-wrap fancybox">
                    <div className="work-info">
                        <h3>Oil Seeds</h3>
                        <span></span>
                    </div>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1491929007750-dce8ba76e610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"/>
                    </Link>
                </div>
                <div className="item photography col-sm-6 col-md-4 col-lg-4 mb-4">
                    <Link to="/plants/FibreCrops" className="item-wrap fancybox">
                    <div className="work-info">
                        <h3>Fibre Crops</h3>
                        <span></span>
                    </div>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1492114011589-509c6e695d8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
                    </Link>
                </div>
                <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                    <Link to="/plants/SugarCrops" className="item-wrap fancybox">
                    <div className="work-info">
                        <h3>Sugar Crops</h3>
                        <span></span>
                    </div>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
                    </Link>
                </div>
                <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                    <Link to="/plants/ForageCrops" className="item-wrap fancybox">
                    <div className="work-info">
                        <h3>Forage Crops</h3>
                        <span></span>
                    </div>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1525286102393-8bf945cd0649?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"/>
                    </Link>
                </div>
                <div className="item branding col-sm-6 col-md-4 col-lg-4 mb-4">
                    <Link to="/plants/OtherCrops" className="item-wrap fancybox">
                    <div className="work-info">
                        <h3>Other Crops</h3>
                        <span></span>
                    </div>
                    <img className="img-fluid" src="https://images.unsplash.com/photo-1437081327115-6c0ccc43d1ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"/>
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default Plants
