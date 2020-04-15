import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../assets/css/Homepage.scss';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { Route } from 'react-router-dom';
import Overview from '../components/Overview';
import Footer from '../components/Footer';
import Header from '../components/Header';

class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <Header />
                <Overview />
                <Footer/>
                <div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        showLoginModal: state.showLoginModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: () => dispatch({ type: 'INCREMENT' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);