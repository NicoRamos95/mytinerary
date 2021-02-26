import React from 'react';
import {NavLink} from 'react-router-dom'
import '../style.css'
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';
const Header = (props) => {
    if (props.loggedUser) {
        var links = <>
        <NavLink to="/cities">Cities</NavLink>
        <NavLink to="/" onClick={() => props.logoutUser()}>LogOut</NavLink>
                <div className="d-flex align-items-center justify-content-end">
                    <h3>Hi {props.loggedUser.userName}! </h3>
                    <img src={props.loggedUser.urlPic} alt="..." width="50vw" className="rounded"/>
                </div>
        </>
    } else {
        // eslint-disable-next-line no-redeclare
        var links = <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">login</NavLink>
            <NavLink to="/cities">Cities</NavLink>
        </>
    }
    return (
        <header>{
        console.log(props.loggedUser)}
            <div className="d-flex justify-content-between align-items-center m-3">
                <NavLink to="/">Home</NavLink>
                {links}
            </div>
            <div className="hdr bg-l">
                
                <img src="../assets/logo.png" alt="..." className="logo"></img>

            </div>
        </header>
    )
} 
const mapStateToProps = state => {
    return {
        loggedUser: state.authR.loggedUser
    }
}
const mapDispacthToProps = {
    logoutUser: authActions.logOutUser
}
export default connect(mapStateToProps, mapDispacthToProps)(Header)