import React from 'react';
import './footer.css';


export const Footer  = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 col-3">
                        <p><i className="fa fa-map-marker" aria-hidden="true"></i>Faisalabad, Punjab,Pakistan</p>
                    </div>

                    <div className="col-sm-2 col-2">
                        <p><i className="fa fa-phone" aria-hidden="true"></i> &nbsp; (+92) 3146464747</p>
                    </div>

                    <div className="col-sm-7 col-7">
                        <div className="tags">
                            <a title="Facebook" href="github.com" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        </div>
                            
                        <div className="tags">
                            <a title="Github" href="facebook.com" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                        </div>

                        <div className="tags">
                            <a title="Mail" href="gmail.com"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                        </div>

                        <div className="tags">
                            <a title="Linkedin" href="linkedin.com" target="_blank"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                    </div>
                </div>
                <hr/>
                <h6>Copyright © 2019 a. All rights reserved. </h6>
            </div>
        </div>
    )
}