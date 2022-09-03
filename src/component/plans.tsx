import * as React from "react";
import "./../sass/component/_plans.scss";
import elipseBlack from "./../assets/elipse-black.svg";
import elipseWhite from "./../assets/elipse-white.svg";

export default function Plans() {
    return (
        <React.Fragment>
            <div className={"plansComponent"}>
                <h2>Planes</h2>
                <span>Lorem ipsum tus mejores ideas</span>

                <div className="row pricing">
                    <div className="col">
                        <div className="card">
                            <h2>Basic</h2>
                            <p>Ideal para independientes o startups en plena incubación.</p>
                            <div className="list">
                                <div className="item">
                                    <span> <img src={elipseBlack} alt="yes" /> </span> <span>Lorem ipsum tus</span>
                                </div>
                                <div className="item">
                                    <span> <img src={elipseBlack} alt="yes" /> </span> <span>Lorem ipsum tus</span>
                                </div>
                                <div className="item">
                                    <span> <img src={elipseWhite} alt="no" /> </span> <span>Lorem ipsum tus</span>
                                </div>
                                <div className="item">
                                    <span> <img src={elipseWhite} alt="no" /> </span> <span>Lorem ipsum tus</span>
                                </div>
                            </div>
                            <div className="price">
                                <h2>S/. 699</h2>
                                <p>montly</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2>Pro</h2>
                            <p>
                                Ideal para startups que ya están realizando sus primeras ventas.
                            </p>
                            <div className="list">
                                <div className="item">
                                    <span> <img src={elipseBlack} alt="yes" /> </span> <span>Lorem ipsum tus</span>
                                </div>
                                <div className="item">
                                    <span> <img src={elipseBlack} alt="yes" /> </span> <span>Lorem ipsum tus</span>
                                </div>
                                <div className="item">
                                    <span> <img src={elipseBlack} alt="yes" /> </span> <span>Lorem ipsum tus</span>
                                </div>
                                <div className="item">
                                    <span> <img src={elipseWhite} alt="no" /> </span> <span>Lorem ipsum tus</span>
                                </div>
                            </div>
                            <div className="price">
                                <h2>S/. 899</h2>
                                <p>montly</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <h2>Growth</h2>
                            <p>
                                Ideal para startups <br /> en crecimiento.
                            </p>
                            <div className="list">
                                <div className="item">
                                    <span> <img src={elipseBlack} alt="yes" /> </span> <span>Lorem ipsum tus</span>
                                </div>
                                <div className="item">
                                    <span> <img src={elipseBlack} alt="yes" /> </span> <span>Lorem ipsum tus</span>
                                </div>
                                <div className="item">
                                    <span> <img src={elipseBlack} alt="yes" /> </span> <span>Lorem ipsum tus</span>
                                </div>
                                <div className="item">
                                    <span> <img src={elipseBlack} alt="yes" /> </span> <span>Lorem ipsum tus</span>
                                </div>
                            </div>
                            <div className="price">
                                <h2>Llámanos</h2>
                                <p className="none">call us</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
