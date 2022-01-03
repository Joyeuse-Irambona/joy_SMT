import React from 'react'
import { Row, Col, Form, FormGroup, Input, Button } from 'reactstrap'
import { faPaperclip, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const CreateProposal = () => {
    return (
        <div>
            <Row>
                <Col>
                    <h2>Project Proposal</h2>
                    <hr />
                </Col>
            </Row>

            <Row>
                <Form style={{width: "100%", padding: "0px 40px 0px 20px"}}>
                    <FormGroup>
                        <Input 
                            type='text'
                            placeholder='Enter the Title'
                        />
                    </FormGroup>

                    <FormGroup>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Write a short project description "
                        type="textarea"
                        style={{height: "200px", resize: "none"}}
                    />
                    </FormGroup>

                    <FormGroup>
                        <Row style={{justifyContent: "space-between", padding: "0px 30px"}}>
                            <Row style={{flexGrow: "initial"}}>
                                <Button className='buttons'><span><FontAwesomeIcon icon={faPaperclip} /></span>  Document</Button>
                            </Row>
                            <Row style={{flexGrow: "initial"}}>
                                <Button className='buttons'>Send  <span><FontAwesomeIcon icon={faPaperPlane}/></span></Button>
                            </Row>
                        </Row>
                    </FormGroup>
                </Form>
            </Row>
        </div>
    )
}

export default CreateProposal
