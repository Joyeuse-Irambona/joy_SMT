import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { faFile, faEye, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Row, Col } from 'reactstrap'
const AssignedGrp = () => {
    return (
        <div>
            <Card style={{padding: "70px"}}>
                <CardTitle tag="h4">Gender balance in Rwanda</CardTitle>
                <CardText><small>Added Date &nbsp; &nbsp; &nbsp; 4 Oct 2021</small></CardText>
                <CardBody>
                    <CardSubtitle tag="h5" style={{marginBottom: "20px"}}>Abstract</CardSubtitle>

                    <CardText>                    
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </CardText>
                    

                    <CardSubtitle>Description</CardSubtitle>
                    <CardText><small>Lorem ipsum</small></CardText>

                    <CardSubtitle>Group name</CardSubtitle>
                    <CardText><small>Lorem ipsum</small></CardText>

                    <CardSubtitle>Group Members</CardSubtitle>
                    <CardText><small>Lorem ipsum Lorem ipsum</small></CardText>          
                
                    <Row style={{justifyContent: "space-between", paddingRight: "90px"}}>
                        <Col style={{flexGrow: "1"}}>
                            <Row><span><FontAwesomeIcon icon={faFile}/> View/Open</span></Row>
                        </Col>
                        <Col style={{flexGrow: "initial"}}>
                            <span><FontAwesomeIcon icon={faEye}/></span>
                        </Col>
                    </Row>

                    <Row style={{marginTop: "30px"}}>
                        <Button className='buttons'><span><FontAwesomeIcon icon={faEye} /></span> Details</Button>
                        <span>&nbsp;</span>
                        <Button className='buttons'><span><FontAwesomeIcon icon={faPaperPlane} /></span> Contact</Button>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}

export default AssignedGrp
