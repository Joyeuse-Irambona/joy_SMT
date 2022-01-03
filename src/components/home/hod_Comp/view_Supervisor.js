import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Row, Col, Card, CardTitle , CardBody, Button } from 'reactstrap'

const View_Supervisor = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Row>
                <Card body style={{margin: "0% 5%"}}>
                    <CardTitle tag="h5" className='text-center'>Supervisor Profile</CardTitle>
                    <CardBody>
                        <Col>
                            <Row>
                                <Col xs="auto" sm="16" md={{ size: 8, offset: 5 }}>
                                    <FontAwesomeIcon icon={faUserCircle}  size='10x'/>
                                </Col>
                            </Row>

                            <Col xs="auto" sm="16" md={{ size: 8, offset: 4 }}>
                                <Row>
                                    <Col style={{marginTop: "17px"}}>
                                        Name: <strong style={{paddingLeft: "10px"}}> Fabien NIRINGIYIMANA</strong>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col style={{marginTop: "17px"}}>
                                        Dept: <strong style={{paddingLeft: "10px"}}>INFOMATION TECHNOLOGY</strong>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col style={{marginTop: "17px"}}>
                                        Spec: <strong style={{paddingLeft: "10px"}}>IT</strong>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col style={{marginTop: "17px"}}>
                                        Phone: <strong style={{paddingLeft: "10px"}}>+25 078 557 1149</strong>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col style={{marginTop: "17px"}}>
                                        Email: <strong style={{paddingLeft: "10px"}}>supervisor@gmail.com</strong>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col style={{marginTop: "17px"}}>
                                        Supervised groups till now: <strong style={{paddingLeft: "10px"}}>65</strong>
                                    </Col>
                                </Row>
                            </Col>

                            <Row>
                                <Col md={{ span: 4, offset: 10 }}>
                                    <Button onClick={() => navigate('update')}>
                                        <span><FontAwesomeIcon icon={faPen}/></span> Edit
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                    </CardBody>
                </Card>
            </Row>            
        </div>
    )
}

export default View_Supervisor
