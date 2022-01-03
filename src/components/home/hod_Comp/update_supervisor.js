import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faPlus, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { Row, Col, Card, CardTitle , CardBody, Button, FormGroup, Input, Form } from 'reactstrap'

const Update_supervisor = () => {
    return (
        <div>
            <Row>
                <Card body style={{margin: "0% 5%"}}>
                    <CardTitle tag="h5" className='text-center'>Update Supervisor's Profile</CardTitle>
                    <CardBody>
                        <Form>
                            <Row>
                                <Col xs="auto" sm="16" md={{ size: 8, offset: 5 }}>
                                    <FontAwesomeIcon icon={faUserCircle}  size='10x'/>
                                </Col>
                            </Row>

                            <br />

                            <Col className={"mt-20"} xs="auto" sm="16" md={{ size: 8, offset: 2 }}>
                                <FormGroup>
                                    <Input
                                        Value='Fabien NIRINGIYIMANA'
                                        placeholder='Names'
                                        type='text'
                                        name='name'
                                        id='name'

                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        Value='INFOMATION TECHNOLOGY'
                                        placeholder='Department'
                                        type='text'
                                        name='dept'
                                        id='dept'

                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        Value='IT'
                                        placeholder='Specialization'
                                        type='text'
                                        name='spec'
                                        id='spec'

                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        Value='+25 078 557 1149'
                                        placeholder='Phone'
                                        type='phone'
                                        name='phone'
                                        id='phone'

                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        placeholder='Email'
                                        Value='supervisor@gmail.com'
                                        type='email'
                                        name='email'
                                        id='email'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Col style={{margin: "auto", width: "fit-content"}}>
                                    <Row>
                                        <Button><spna><FontAwesomeIcon icon={faPen} /></spna> Update</Button>
                                    </Row>
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Form>
                    </CardBody>
                </Card>
            </Row>
        </div>
    )
}

export default Update_supervisor
