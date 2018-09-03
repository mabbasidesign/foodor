import React, { Component } from 'react';

class Home extends Component {
    state = {  }
    render() { 
        return (
        <body>

            {/* langing page */}
            <section className="landing">
                <div className="header">
                    <div className="log"></div>
                    <div className="navbar"></div>
                    <div className="header-cart">
                        <div className="header-log">
                            <ul>
                                <li><a href="#">LOG OUT</a></li>
                                |
                                <li><a href="#">REG</a></li>
                            </ul>
                            <div className="header-cart-icon"></div>
                            <div className="container">
                                <img className="text-header-slide" src="" alt=""/>
                                <p>Health is not about the weight you lose. But about the life you gain!</p>
                                <a classNam="btn-headr" href="#">Shop Now</a>
                                <img className="img-header-slide" src="" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* banner */}
            <section className="banner">
                <div className="product-banner">
                    <img src="" alt=""/>
                    <div className="banner-text">
                        <h4>Super Natural</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quia!</p>
                        <a className="banner-btn" href="#"></a>
                    </div>
                    <div className="banner-text">
                        <h4>Super Natural</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quia!</p>
                        <a className="banner-btn" href="#"></a>
                    </div>
                    <div className="banner-text">
                        <h4>Super Natural</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quia!</p>
                        <a className="banner-btn" href="#"></a>
                    </div>
                </div>
            </section>

            {/* newest product */}
            <section className="newest-product">
                <div className="newes-product-title">
                    <img src="" alt=""/>
                    <h2>Ouur Newest Product</h2>
                </div>
                
                <div className="newest-product-slider">
                    <a href="#"><img src="" alt=""/></a>
                    <div className="newest-product-action">
                        <a className="newest-product-action-left" href="#"><span></span></a>
                        <a className="newest-product-action-right" href="#"><span></span></a>
                    </div>
                    <div className="newest-product-slider-text">
                        <h4>Organical Oranges</h4>
                        <p className="price">$550.00</p>
                        <p className="deal">$700.00</p>
                    </div>
                </div>
            </section>

            {/* chose */}
            <section className="chose">
            <h1>WHY CHOOSE US ?</h1>
            <div className="single-product-chose">
                <div className="product-choise-serial"><h3>1</h3></div>
                <div className="product-choice-text">
                    <h1>Lorem ipsum dolor sit.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            </section>

            {/* fresh */}
            <section className="fresh">
                <div className="fresh-product-title">
                    <img src="" alt=""/>
                    <h2>More Fresh Product</h2>
                </div>

                <div className="newest-product-slider">
                    <a href="#"><img src="" alt=""/></a>
                    <div className="newest-product-action">
                        <a className="fresh-product-action-left" href="#"><span></span></a>
                        <a className="fresh-product-action-right" href="#"><span></span></a>
                    </div>
                    <div className="fresh-product-slider-text">
                        <h4>Organical Oranges</h4>
                        <p className="price">$550.00</p>
                        <p className="deal">$700.00</p>
                    </div>
                </div>
            </section>

            {/* image */}
            <section className="banner-iamages">
                <div className="banner-images-wrape">
                    <a href="#"><img src="" alt=""/></a>
                    <a href="#"><img src="" alt=""/></a>
                </div>
            </section>

            {/* text service */}
            <section className="service">
                <div className="service-box">
                    <img src="" alt=""/>
                    <div className="service-box-text">
                        <h4>Collect your Product</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, qui!</p>
                    </div>
                </div>
            </section>

            {/* deal */}
            <section className="deal"></section>

            {/* caption */}
            <section className="seasonal"></section>

            {/* story */}
            <section className="story"></section>

            {/* news */}
            <section className="news"></section>

            {/* newsletter */}
            <section className="newletter"></section>

            {/* footer */}
            <section className="footer"></section>

        </body>
        );
    }
}
 
export default Home;