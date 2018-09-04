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
                    <div className="navbar">
                        <ul>
                            <li>Home</li>
                            <li>Products</li>
                            <li>Shope</li>
                            <li>Contact</li>
                        </ul>
                    </div>
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
            <section className="deal">
                <img src="" alt=""/>
                <div className="deal-box">
                    <h1>BEST DEAL FOR THIS PRODUCT</h1>
                    <h5>Pineapple juice</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officia dolores minus!</p>
                    <a href="#" className="deal-btn">Shop Now</a>
                </div>
            </section>

            {/* caption */}
            <section className="seasonal">

                <div className="seasonal-header">
                    <div className="seasonal-header-box">
                        <p>Firm-Fressh</p>
                        <h3>Best Products</h3>
                    </div>

                </div>

                <div className="seasonal-content">

                    <div className="seasonal-content-box">
                        <a href="#"><img src="" alt=""/></a>
                        <div className="seasonal-content-box-text">
                            <p>Simplement Corn</p>
                            <span className="seasonal-deal">
                                <h5>$130.00</h5>
                                <p>$100.00</p>
                            </span>
                            <a href="#">Add to cart</a>
                        </div>
                    </div>

                </div>
            </section>

            {/* story */}
            <section className="story">
                <img src="" alt=""/>
                <h2>Tis is a powerfull product online store</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </section>

            {/* news */}
            <section className="news">
                <div className="news-title">
                    <img src="" alt=""/>
                    <h2>More Fresh Product</h2>
                </div>
                <div className="news-box">
                    <a href=""><img src="" alt=""/></a>
                    <p>Lorem, ipsum dolor.</p>
                    <h5>Lorem ipsum dolor sit amet consectetur.</h5>
                    <p>Apr 24, 2018 0 comments</p>
                </div>
            </section>

            {/* newsletter */}
            <section className="newletter">
                <div className="newsletter-title">
                    <p>Subscribe</p>
                    <h3>To Our Newsletter</h3>
                </div>
                <div className="newsletter-form">
                    <form action="">
                        <input type="text" placehoder="Enter Your E-mail"/>
                        <a href="#"><button className="newsletter-subscribe" type="submit">Subscribe</button></a>
                    </form>
                </div>
            </section>

            {/* footer */}
            <section className="footer">
                <div className="footer-about">
                    <h6>Fresh Fruit Online Shope</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ipsa!</p>
                    <h6><span></span> Address </h6>
                    <h6><span></span> 403-613-6871 </h6>
                    <h6><span></span> info@example.com</h6>
                </div>
                <dv className="footer-option">
                    <h3>Options</h3>
                    <ul>
                        <li>Cart</li>
                        <li>My Account</li>
                        <li>Whish List</li>
                        <li>Login</li>
                        <li>Register</li>
                    </ul>
                </dv>
                <div className="footer-info">
                <h3>Information</h3>
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Role</li>
                        <li>News</li>
                    </ul>
                </div>
                <div className="footer-flicker">
                    <a href=""><img src="" alt=""/></a>
                </div>
            </section>

        </body>
        );
    }
}
 
export default Home;