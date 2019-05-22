import React from 'react';
import { Link } from "react-router-dom";
import './header.css';
const Header = (props) =>  (
    <nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to={`/`}>Quick Burger</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to={`/`}>Orders</Link>
                    </li>
                    <li>
                        <Link to={`/item-add`}>Add Item</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;
