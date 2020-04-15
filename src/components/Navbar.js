import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navbar = (props) => {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand">
                <div className="col-md-3 navbar-brand-box">
                    <div>
                        <a className="navbar-brand">Navbar</a>
                    </div>
                </div>
                <div className="col-md-9 navbar-container">
                    <div className="nav-links">
                        <div className="nav-links link-1"><Link to="/">Home</Link></div>
                        <div className="nav-links link-3"><Link to="/">About</Link></div>
                        <div className="nav-links link-2"><Link to="/login">Login</Link></div>
                        <div className="nav-links link-3"><Link to="/register">Register</Link></div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        showLoginModal: () => dispatch({ type: 'SHOW_MODAL' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);