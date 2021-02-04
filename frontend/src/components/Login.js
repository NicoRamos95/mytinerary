import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Alert} from 'reactstrap';
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';



const Login = (props) => {
    const [userLogin, setUserLogin] = useState({})
    const [errors, setErrors] = useState([])

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const seeInput = e => {
        const value = e.target.value
        const campo = e.target.name
        setUserLogin({
            ...userLogin,
            [campo]: value
        })
    }
    const validateUser = async e => {
        e.preventDefault()
        if (userLogin.userName === "" || userLogin.password === "") {
            alert("Completar campos")
            return false
            }
        setErrors([])
        const response = await props.loginUser(userLogin)
        console.log(userLogin)
        if (response && !response.success) {
            setErrors([response.mensaje])
        } else {
            alert("Bienvenido")
        }
    }
    return (
    <div className="container">
    <Form className="form">
        <div>
            <FormGroup className="d-flex mt-5" >
                <Input className="text-center input" onChange={seeInput} type="text" placeholder="userName" name="userName"/>
                <Input className="text-center input" onChange={seeInput} type="password" placeholder="password" name="password"/>
            </FormGroup>
        <Button onClick={validateUser}>login</Button>
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

const mapStateToProps = state => {
    return {
        loggedUser: state.authR.loggedUser
    }
  }

const mapDispatchToProps = {
    loginUser: authActions.loginUser
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)