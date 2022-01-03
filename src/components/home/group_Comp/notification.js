import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Row, Col, Card, CardTitle, CardBody, CardText,  } from 'reactstrap'
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons'

const Notification = () => {
    return (
        <div>
            <Row className='text-center'>
                <Col>
                    <h3>Notifications</h3>
                    <hr />
                </Col>
            </Row>

            <Col>
                <Row tag={"h4"}>Notifications</Row>
                <Card body>
                    <Card style={{backgroundColor: "#1b4254", color: "lightblue", padding: "25px", marginBottom: "20px"}}>
                        <CardTitle tag={"h5"}  style={{paddingLeft: "42px"}}>Title</CardTitle>

                        <CardBody style={{padding: "0px"}}>
                            <Row>
                                <Col style={{flexGrow: "initial"}}>
                                    <FontAwesomeIcon icon={faCheckDouble}/>
                                </Col>

                                <Col>
                                    <CardText style={{color: "lightgrey"}}>
                                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                    </CardText>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    <Card style={{backgroundColor: "#1b4254", color: "lightblue", padding: "25px", marginBottom: "20px"}}>
                        <CardTitle tag={"h5"}  style={{paddingLeft: "42px"}}>Title</CardTitle>

                        <CardBody style={{padding: "0px"}}>
                            <Row>
                                <Col style={{flexGrow: "initial"}}>
                                    <FontAwesomeIcon icon={faCheckDouble}/>
                                </Col>

                                <Col>
                                    <CardText style={{color: "lightgrey"}}>
                                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                    </CardText>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>

                    <Card style={{backgroundColor: "#1b4254", color: "lightblue", padding: "25px", marginBottom: "20px"}}>
                        <CardTitle tag={"h5"}  style={{paddingLeft: "42px"}}>Title</CardTitle>

                        <CardBody style={{padding: "0px"}}>
                            <Row>
                                <Col style={{flexGrow: "initial"}}>
                                    <FontAwesomeIcon icon={faCheckDouble}/>
                                </Col>

                                <Col>
                                    <CardText style={{color: "lightgrey"}}>
                                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
                                    </CardText>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Card>
            </Col>
        </div>
    )
}

export default Notification
