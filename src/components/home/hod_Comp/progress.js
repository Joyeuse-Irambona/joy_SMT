import React from 'react'
import { Card, CardTitle, Row, Col, CardBody } from 'reactstrap'
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

const Progress = () => {
    const per_a = 45;
    const per_b = 79;
    const per_c = 20;
    return (
        <div>
            <Row>
                <Col>
                    <h3>Progress</h3>
                    <hr />
                </Col>
            </Row>
            <Card body className="mx-auto my-4">
                <Col className='text-center'>
                    <h2>PROJECT STATUS</h2>
                    <Row>
                    <Col>
                        <Card>
                            <CardTitle tag={"h5"}>Group 1</CardTitle>
                            <CardBody>
                                <Col>
                                    <CircularProgressbar
                                        value={per_a}
                                        text={`${per_a}%`}
                                        strokeWidth={20}
                                        styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'round',
                                        textSize: '14px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `#1b4254`,
                                        textColor: '#1b4254',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#1b4254',
                                        })}
                                    />
                                    <Row >
                                        <div style={{backgroundColor: '#1b4254', padding: "20px"}}></div>
                                        <div style={{padding: "5px" }}><h4>Group Progress</h4></div>
                                    </Row>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <CardTitle>Group 2</CardTitle>
                            <CardBody>
                                <Col>
                                    <CircularProgressbar
                                        value={per_b}
                                        text={`${per_b}%`}
                                        strokeWidth={20}
                                        styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'round',
                                        textSize: '14px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `#1b4254`,
                                        textColor: '#1b4254',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#1b4254',
                                        })}
                                    />
                                    <Row >
                                        <div style={{backgroundColor: '#1b4254', padding: "20px"}}></div>
                                        <div style={{padding: "5px" }}><h4>Group Progress</h4></div>
                                    </Row>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            <CardTitle>Group 3</CardTitle>
                            <CardBody>
                                <Col>
                                    <CircularProgressbar
                                        value={per_c}
                                        text={`${per_c}%`}
                                        strokeWidth={20}
                                        styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'round',
                                        textSize: '14px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `#1b4254`,
                                        textColor: '#1b4254',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#1b4254',
                                        })}
                                    />
                                    <Row >
                                        <div style={{backgroundColor: '#1b4254', padding: "20px"}}></div>
                                        <div style={{padding: "5px" }}><h4>Group Progress</h4></div>
                                    </Row>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>
                    </Row>
                </Col>
            </Card>
        </div>
    )
}

export default Progress
