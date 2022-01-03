import React from 'react'
import { Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap'

import screenShare from '../../images/scrShare.svg';
import nxtWeek from '../../images/nxtWeek.svg';
import people from '../../images/people.svg';
import list from '../../images/list.svg';
const Dashboard = () => {
    return (
        <div>
            <Row>
                <Col>
                    <h2>Group's Dashboard</h2>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col sm="3">
                    <Card style={{padding: "0px 0px 10px 0px"}} body className="text-center">
                        <CardBody><img width={60} src={screenShare}/></CardBody>
                        <CardTitle tag="h4"> 0 </CardTitle>
                        <CardText>Pending proposals</CardText>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card style={{padding: "0px 0px 10px 0px"}} body className="text-center">
                        <CardBody><img width={60} src={nxtWeek}/></CardBody>
                        <CardTitle tag="h4"> 0 </CardTitle>
                        <CardText>Total Approved proposals</CardText>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card style={{padding: "0px 0px 10px 0px"}} body className="text-center">
                        <CardBody><img width={60} src={people}/></CardBody>
                        <CardTitle tag="h4"> 0 </CardTitle>
                        <CardText>Total Submitted proposals</CardText>
                    </Card>
                </Col>

                <Col sm="3">
                    <Card style={{padding: "0px 0px 10px 0px"}} body className="text-center">
                        <CardBody> <img width={60} src={list} /></CardBody>
                        <CardTitle tag="h4"> 0 </CardTitle>
                        <CardText>Supervisors</CardText>
                    </Card>
                </Col>            
            </Row>

            <Card style={{minHeight: "200px"}} body className="mx-auto my-4">
                <Col>
                    <h5>PROJECT STATUS</h5>
                    <Row></Row>
                </Col>
            </Card>

            <Card style={{minHeight: "200px"}} body className="mx-auto my-4">
                <Col>
                    <h6>RECENT ACTIVITIES</h6>
                    <Row></Row>
                </Col>
            </Card>
        </div>
    )
}

export default Dashboard
