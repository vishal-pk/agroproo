import React, { Fragment } from 'react'
/* eslint-disable */
const Landing = () => {
    return (
        <Fragment>
            <header>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                <div className="carousel-item active" style={{backgroundImage: "url('https://source.unsplash.com/collection/4720773')"}}>
                    <div className="carousel-caption d-none d-md-block">
                    <h2 className="display-4"></h2>
                    <p className="lead"></p>
                    </div>
                </div>
                <div className="carousel-item" style={{backgroundImage : "url('https://source.unsplash.com/collection/8290115')"}}>
                    <div className="carousel-caption d-none d-md-block">
                    <h2 className="display-4"></h2>
                    <p className="lead"></p>
                    </div>
                </div>
                <div className="carousel-item" style={{backgroundImage: "url('https://source.unsplash.com/collection/8955478')"}}>
                    <div className="carousel-caption d-none d-md-block">
                    <h2 className="display-4"></h2>
                    <p className="lead"></p>
                    </div>
                </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                    </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                    </a>
            </div>
            </header>
            <section class="py-5">
                <div class="container">
                    <h1 class="display-4">AgroPro</h1>
                    <p class="lead">Agriculture has become essential to life; the forest, the lake, and the ocean cannot sustain the increasing family of man; population declines with a declining cultivation, and nations have ceased to be with the extinction of their agriculture.</p>
                </div>
            </section>
        </Fragment>
    )
}

export default Landing
