import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormFeedback, FormText} from 'reactstrap';

const Login = (props) => {

    const [modal, setModal] = useState(false)

    const toggle = () => setModal(!modal)

    return (
        <div className="mt-5">
            <Button color="primary" onClick={toggle}><i className="fas fa-user m-2 logo-user"></i></Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} className="text-center">Login</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup className="d-flex">
                            <Input className="text-center input" type="text" placeholder="Username/Email" name="userName"/>
                            <Input className="text-center input" type="password" placeholder="Password" name="password"/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={toggle}>Log In</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Login