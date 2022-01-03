import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faPen, faPlus, faTrash, faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import {
    Col,
    Row,
    Table,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Input,
    Form
} from 'reactstrap'

const Supervisor = () => {
    const [modal, setModal] = useState(false);
    const togglePopup = () => setModal(!modal);

    const [delMod, setDelMod] = useState(false);
    const togglePopupDel = () => setDelMod(!delMod);

    const navigate = useNavigate();
    return (
        <div>
            <Modal isOpen={modal} toggle={togglePopup}>
                <ModalHeader toggle={togglePopup}></ModalHeader>
                <ModalHeader>
                    <Row>
                        <Col className='justify-content-md-center'>Add a new Supervisor</Col>
                    </Row>
                </ModalHeader>

                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Supervisor's Name"
                                type="name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                id="department"
                                name="department"
                                placeholder="Department"
                                type="name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                id="special"
                                name="special"
                                placeholder="Specialization"
                                type="name"
                            />
                        </FormGroup>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        placeholder='Phone'
                                        type='phone'
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input
                                        id="date"
                                        name="date"
                                        placeholder='Creation Date'
                                        type='date'
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Email"
                                type="name"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={togglePopup}>Save</Button>
                </ModalFooter>
            </Modal>

            <Modal centered isOpen={delMod} toggle={togglePopupDel}>
                <ModalHeader toggle={togglePopupDel}></ModalHeader>
                <ModalHeader>
                    <Row>
                        <Col className='justify-content-md-center'>
                            Are you sure you want to delete this supervisor called  Fabien NIRINGIYIMANA?
                        </Col>
                    </Row>
                </ModalHeader>

                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Leave a comment to inform this supervisor that (s)he was removed, and the reason of this removal"
                                type="textarea"
                                style={{height: "200px", resize: "none"}}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>

                <ModalFooter style={{justifyContent: "space-between", padding: "10px 40px"}}>
                    <Button color="success" onClick={togglePopupDel}>
                        <span><FontAwesomeIcon icon={faCheck} /></span>  Yes
                    </Button>
                    <Button color="danger" onClick={togglePopupDel}>
                        <span><FontAwesomeIcon icon={faTimesCircle}/></span> No
                    </Button>
                </ModalFooter>
            </Modal>
        
            
            <Row>
                <Col>
                    <h2>Supervisors</h2>
                    <hr />
                </Col>
            </Row>
            <Row >
                <Col md={{ span: 4, offset: 10 }}>
                    <Row>
                        <Button onClick={togglePopup}><FontAwesomeIcon icon={faPlus}/> Supervisor</Button>
                    </Row>
                </Col>
            </Row>
            <Table hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Added Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Fabien NIRINGIYIMANA</th>
                        <th>super@gmail.com</th>
                        <th>0785571149</th>
                        <th>4 Oct 2021</th>

                        <th>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faPen} onClick={() => navigate('supername/update')} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faTrash} onClick={togglePopupDel} />
                                </Col>
                                <Col>
                                    <Row>
                                        <Button onClick={() => navigate('supername')}
                                            color='secondary'>
                                                <FontAwesomeIcon icon={faEye}/> View
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </th>
                    </tr>
                    <tr>
                        <th>Fabien NIRINGIYIMANA</th>
                        <th>super@gmail.com</th>
                        <th>0785571149</th>
                        <th>4 Oct 2021</th>

                        <th>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faPen} onClick={() => navigate('supername/update')} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faTrash} onClick={togglePopupDel} />
                                </Col>
                                <Col>
                                    <Row>
                                        <Button onClick={() => navigate('supername')}
                                            color='secondary'>
                                                <FontAwesomeIcon icon={faEye}/> View
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </th>
                    </tr>
                    <tr>
                        <th>Fabien NIRINGIYIMANA</th>
                        <th>super@gmail.com</th>
                        <th>0785571149</th>
                        <th>4 Oct 2021</th>

                        <th>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faPen} onClick={() => navigate('supername/update')} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faTrash} onClick={togglePopupDel} />
                                </Col>
                                <Col>
                                    <Row>
                                        <Button onClick={() => navigate('supername')}
                                            color='secondary'>
                                                <FontAwesomeIcon icon={faEye}/> View
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </th>
                    </tr>
                    <tr>
                        <th>Fabien NIRINGIYIMANA</th>
                        <th>super@gmail.com</th>
                        <th>0785571149</th>
                        <th>4 Oct 2021</th>

                        <th>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faPen} onClick={() => navigate('supername/update')} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faTrash} onClick={togglePopupDel} />
                                </Col>
                                <Col>
                                    <Row>
                                        <Button onClick={() => navigate('supername')}
                                            color='secondary'>
                                                <FontAwesomeIcon icon={faEye}/> View
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </th>
                    </tr>
                    <tr>
                        <th>Fabien NIRINGIYIMANA</th>
                        <th>super@gmail.com</th>
                        <th>0785571149</th>
                        <th>4 Oct 2021</th>

                        <th>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faPen} onClick={() => navigate('supername/update')} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faTrash} onClick={togglePopupDel} />
                                </Col>
                                <Col>
                                    <Row>
                                        <Button onClick={() => navigate('supername')}
                                            color='secondary'>
                                                <FontAwesomeIcon icon={faEye}/> View
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </th>
                    </tr>
                    <tr>
                        <th>Fabien NIRINGIYIMANA</th>
                        <th>super@gmail.com</th>
                        <th>0785571149</th>
                        <th>4 Oct 2021</th>

                        <th>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faPen} onClick={() => navigate('supername/update')} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faTrash} onClick={togglePopupDel} />
                                </Col>
                                <Col>
                                    <Row>
                                        <Button onClick={() => navigate('supername')}
                                            color='secondary'>
                                                <FontAwesomeIcon icon={faEye}/> View
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </th>
                    </tr>
                    
                </tbody>
            </Table>
        </div>
    )
}

export default Supervisor
