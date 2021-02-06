import React from 'react';
import {
    Navbar,
    NavLink,
  } from 'reactstrap';
import '../style.css'
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';
const Header = (props) => {
    if (props.loggedUser) {
        var links = <>
        <NavLink href="/cities">Cities</NavLink>
        <NavLink href="/" onClick={() => props.logOutUser()}>LogOut</NavLink>
        </>
    } else {
        // eslint-disable-next-line no-redeclare
        var links = <>
                <NavLink href="/register">Register</NavLink>
                <NavLink href="/login">login</NavLink>
        </>
    }
    return (
        <header>
            <div className="d-flex justify-content-between">
                <Navbar light expand="md" className="nav">
                    <NavLink href="/">Home</NavLink>
                    {links}
                </Navbar>
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