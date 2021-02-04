import { connect } from 'react-redux';
import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Alert } from 'reactstrap';
import authActions from '../redux/actions/authActions';
import Countries from './Countries';

const Register = (props) => {
    const [newUser, setNewUser] = useState({userName: "", password: "", email: ""})
    const [errors, setErrors] = useState([])
    const seeInput = e => {
        const value = e.target.value
        const campo = e.target.name
        setNewUser({
            ...newUser,
            [campo]: value
        })
    }

    const validateUser = async e => {
        e.preventDefault()
        if (newUser.email === "" ) {
            alert("Falta email")
            return false
            }
        setErrors([])
        console.log(newUser)
        const response = await props.addUser(newUser)
        if (response && !response.success) {
            setErrors(response.errores)
        } else {
            alert("usuario creado")
        }
        console.log(response)
    }
    console.log(props)
    return (
            <div className="container">
                <Form className="form">
                    <div>
                        <FormGroup className="d-flex mt-5" >
                            <Input className="text-center input" onChange={seeInput} type="text" placeholder="FirstName" name="firstName"/>
                            <Input className="text-center input" onChange={seeInput} type="text" placeholder="LastName" name="lastName"/>
                        </FormGroup>
                        <FormGroup  className="d-flex mt-2" >
                            <Input className="text-center input" onChange={seeInput} type="text" placeholder="UserName" name="userName"/>
                            <Input className="text-center input" onChange={seeInput} type="text" placeholder="Email" name="email"/>
                        </FormGroup>
                        <FormGroup className="d-flex mt-2 " >
                            <Input className="text-center input" onChange={seeInput} type="password" placeholder="Password" name="password"/>
                            <select className="text-center input" onChange={seeInput} type="select" placeholder="pais" name="country">
                                <Countries />
                            </select>
                        </FormGroup>
                        <FormGroup className="d-flex mt-2 mb-3">
                            <Input className="text-center" onChange={seeInput} type="text" placeholder="UrlPic" name="urlPic"/>
                        </FormGroup>
                    <Button onClick={validateUser}>Register</Button>
                    </div>
                </Form>
                <div>
                        {errors.map((error, index) => 
                                <Alert className={index % 2 === 0 ? 'alert-l' : 'alert-r'}>
                                    {error}
                            </Alert>
                        )}
                </div>
            </div>
    )
}

const mapDispatchToProps = {
    addUser: authActions.newUser
}

const mapStateToProps = state => {
    return {
        loggedUser: state.authR.loggedUser
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Register)