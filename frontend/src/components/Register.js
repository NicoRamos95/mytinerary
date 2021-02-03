import React from 'react'
import { Button, Form, FormGroup, Input} from 'reactstrap';

const Register = () => {
    return (
            <div className="container">
                <Form className="form">
                    <div>
                        <FormGroup className="d-flex mt-5" >
                            <Input className="text-center input" type="text" placeholder="FirstName" name="firstName"/>
                            <Input className="text-center input" type="text" placeholder="LastName" name="lastName"/>
                        </FormGroup>
                        <FormGroup  className="d-flex mt-2" >
                            <Input className="text-center input" type="text" placeholder="UserName" name="userName"/>
                            <Input className="text-center input" type="text" placeholder="Email" name="email"/>
                        </FormGroup>
                        <FormGroup className="d-flex mt-2 " >
                            <Input className="text-center input" type="password" placeholder="Password" name="password"/>
                            <Input className="text-center input" type="select" name="pais" >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        <FormGroup className="d-flex mt-2 mb-3">
                            <Input className="text-center" type="text" placeholder="UrlPic" />
                        </FormGroup>
                    <Button>Register</Button>
                    </div>
                </Form>
            </div>
    )
}

export default Register