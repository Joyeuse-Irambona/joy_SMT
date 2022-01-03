import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPlus, faTrash, faCheck, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import {
    Row,
    Button,
    Col,
    Table,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Input,
    Form,
    Dropdown, 
    DropdownItem,
    DropdownToggle,
    DropdownMenu } from 'reactstrap'

const Proposal = () => {
    const [apMod, setApMod] = useState(false);
    const togglePopupAp = () => setApMod(!apMod);

    const [delMod, setDelMod] = useState(false);
    const togglePopupDel = () => setDelMod(!delMod);

    const [assMod, setAssMod] = useState(false);
    const togglePopupAss = () => setAssMod(!assMod);
    return (
        <div>
            <Row>
                <Col>
                    <h2>Proposals</h2>
                    <hr />
                </Col>
            </Row>

            <Modal centered isOpen={apMod} toggle={togglePopupAp}>
                <ModalHeader toggle={togglePopupAp}></ModalHeader>
                <ModalHeader>
                    <Row>
                        <Col className='justify-content-md-center'>
                            Are you sure you want to approve this proposal entitled Gender balance in  Rwanda?
                        </Col>
                    </Row>
                </ModalHeader>

                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Leave comment"
                                type="textarea"
                                style={{height: "200px", resize: "none"}}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>

                <ModalFooter style={{justifyContent: "space-between", padding: "10px 40px"}}>
                    <Button className='buttons' onClick={togglePopupAp}>
                        <span><FontAwesomeIcon icon={faCheck} /></span>  Yes
                    </Button>
                    <Button className='buttons dngr' onClick={togglePopupAp}>
                        <span><FontAwesomeIcon icon={faTimesCircle}/></span> No
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal centered isOpen={delMod} toggle={togglePopupDel}>
                <ModalHeader toggle={togglePopupDel}></ModalHeader>
                <ModalHeader>
                    <Row>
                        <Col className='justify-content-md-center'>
                            Are you sure you want to reject this proposal entitled Gender balance in  Rwanda?
                        </Col>
                    </Row>
                </ModalHeader>

                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Leave comment"
                                type="textarea"
                                style={{height: "200px", resize: "none"}}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>

                <ModalFooter style={{justifyContent: "space-between", padding: "10px 40px"}}>
                    <Button className='buttons' onClick={togglePopupDel}>
                        <span><FontAwesomeIcon icon={faCheck} /></span>  Yes
                    </Button>
                    <Button className='buttons dngr' onClick={togglePopupDel}>
                        <span><FontAwesomeIcon icon={faTimesCircle}/></span> No
                    </Button>
                </ModalFooter>
            </Modal>

            <Modal centered isOpen={assMod} toggle={togglePopupAss}>
                <ModalHeader toggle={togglePopupAss}></ModalHeader>
                <ModalHeader>
                    <Row>
                        <Col className='justify-content-md-center'>
                            Gender balance in  Rwanda
                        </Col>
                    </Row>
                </ModalHeader>

                <ModalBody>
                    <Col className='justify-content-md-center'>
                        Are you sure you want to assign this proposal a superviser?
                    </Col>

                    <div className="d-flex justify-content-center p-5">
                        <Dropdown toggle={function noRefCheck(){}}>
                            <DropdownToggle caret> Choose supervisor . . . </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>Fabien NIRINGIYIMANA</DropdownItem>
                                <DropdownItem>Fabien NIRINGIYIMANA</DropdownItem>
                                <DropdownItem>Fabien NIRINGIYIMANA</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        </div>
                    
                </ModalBody>

                <ModalFooter style={{justifyContent: "center", padding: "10px 40px"}}>
                    <Button className='buttons' onClick={togglePopupAss}>
                        <span><FontAwesomeIcon icon={faPlus} /></span>  Assign
                    </Button>
                </ModalFooter>
            </Modal>

            <Table hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Group Name</th>
                        <th>Added Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Gender balance in rwanda</th>
                        <th>Group one</th>
                        <th>4 oct 2021</th>
                        <th>Pending</th>

                        <th>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faCheckCircle} onClick={togglePopupAp} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faTrash} onClick={togglePopupDel}/>
                                </Col>
                                <Col>
                                    <Row>
                                        <Button onClick={togglePopupAss}
                                            className="buttons"
                                        ><FontAwesomeIcon icon={faPlus}/> Assign</Button>
                                    </Row>
                                </Col>
                            </Row>
                        </th>
                    </tr>
                    <tr>
                        <th>Gender balance in rwanda</th>
                        <th>Group one</th>
                        <th>4 oct 2021</th>
                        <th>Pending</th>

                        <th>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faCheckCircle} onClick={togglePopupAp} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faTrash} onClick={togglePopupDel}/>
                                </Col>
                                <Col>
                                    <Row>
                                        <Button onClick={togglePopupAss}
                                            className="buttons"
                                        ><FontAwesomeIcon icon={faPlus}/> Assign</Button>
                                    </Row>
                                </Col>
                            </Row>
                        </th>
                    </tr>
                    <tr>
                        <th>Gender balance in rwanda</th>
                        <th>Group one</th>
                        <th>4 oct 2021</th>
                        <th>Pending</th>

                        <th>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faCheckCircle} onClick={togglePopupAp}/>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faTrash}  onClick={togglePopupDel}/>
                                </Col>
                                <Col>
                                    <Row>
                                        <Button onClick={togglePopupAss}
                                            className="buttons"
                                        ><FontAwesomeIcon icon={faPlus}/> Assign</Button>
                                    </Row>
                                </Col>
                            </Row>
                        </th>
                    </tr>
                    <tr>
                        <th>Gender balance in rwanda</th>
                        <th>Group one</th>
                        <th>4 oct 2021</th>
                        <th>Pending</th>

                        <th>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faCheckCircle} onClick={togglePopupAp} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faTrash} onClick={togglePopupDel}/>
                                </Col>
                                <Col>
                                    <Row>
                                        <Button onClick={togglePopupAss}
                                            className="buttons"
                                        ><FontAwesomeIcon icon={faPlus}/> Assign</Button>
                                    </Row>
                                </Col>
                            </Row>
                        </th>
                    </tr>
                    <tr>
                        <th>Gender balance in rwanda</th>
                        <th>Group one</th>
                        <th>4 oct 2021</th>
                        <th>Pending</th>

                        <th>
                            <Row>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faCheckCircle} onClick={togglePopupAp}/>
                                </Col>
                                <Col>
                                    <FontAwesomeIcon cursor={"pointer"} icon={faTrash} onClick={togglePopupDel} />
                                </Col>
                                <Col>
                                    <Row>
                                        <Button onClick={togglePopupAss}
                                            className="buttons"
                                        ><FontAwesomeIcon icon={faPlus}/> Assign</Button>
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

export default Proposal
