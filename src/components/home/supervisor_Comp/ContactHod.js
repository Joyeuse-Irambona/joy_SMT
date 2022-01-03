import React from "react";
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardBody, Col, FormGroup, Input, Row, Button, InputGroup } from 'reactstrap'

const ContactHOD = () =>(
    <div className='row'>
        <Col>
            <Row>
                <Col>
                    <h2>Contact HOD</h2>
                    <hr />
                </Col>
            </Row>
            <Row style={{marginLeft: "170px"}}><h5>Chat</h5></Row>
            <Row>
                <Card body style={{margin: "0% 15%"}}>
                    <CardBody>
                    <Col style={{marginTop: 15}}>
                            <Col>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</Col>                        
                            <Col><span><FontAwesomeIcon icon={faCheckDouble}/></span> Sent at 12:00</Col>
                        </Col>

                        <Col style={{marginTop: 15}}>
                            <Col>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</Col>                        
                            <Col style={{display: "flex", justifyContent: "flex-end"}}><span><FontAwesomeIcon icon={faCheckDouble}/></span>  Supervisor at 12:00</Col>
                        </Col>

                        <Col style={{marginTop: 15}}>
                            <Col>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</Col>                        
                            <Col><span><FontAwesomeIcon icon={faCheckDouble}/></span> Sent at 12:00</Col>
                        </Col>

                        <Col style={{marginTop: 15}}>
                            <Col>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</Col>                        
                            <Col style={{display: "flex", justifyContent: "flex-end"}}><span><FontAwesomeIcon icon={faCheckDouble}/></span>  Supervisor at 12:00</Col>
                        </Col>

                        <Col style={{marginTop: 15}}>
                            <Col>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</Col>                        
                            <Col><span><FontAwesomeIcon icon={faCheckDouble}/></span> Sent at 12:00</Col>
                        </Col>

                        <Col style={{marginTop: 15}}>
                            <Col>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</Col>                        
                            <Col style={{display: "flex", justifyContent: "flex-end"}}><span><FontAwesomeIcon icon={faCheckDouble}/></span>  Supervisor at 12:00</Col>
                        </Col>
                    </CardBody>
                </Card>
            </Row>

            <Row>
                <FormGroup style={{width: "100%", margin: "10px 190px"}}>
                    <Row style={{}}>
                        <InputGroup>
                            <Input
                                style={{padding: "10px 20px", borderRadius: "20px 0 0 20px"}}
                                type="text"                            
                                placeholder="Write your reply here . . ."
                            />
                            <Button style={{backgroundColor: "#1B4254", borderRadius: "0 20px 20px 0", padding: "0px 20px"}}>Send</Button>
                        </InputGroup>
                    </Row>
                </FormGroup>
            </Row>
        </Col>         
    </div>
       
    )


export default ContactHOD
