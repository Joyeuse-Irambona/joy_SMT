import React from 'react'
import { Row, Col, Card, CardTitle , CardBody, Button, FormGroup, Input, Form } from 'reactstrap'
import { Link } from 'react-router-dom'

const CreateGroup = () => {
    return (
        <div>
            <Row>
                <Card body style={{margin: "0% 5%"}}>
                    <CardTitle tag="h5" className='text-center'>Create group</CardTitle>
                    <CardBody>
                        <Form>
                            <Col className={"mt-20"} xs="auto" sm="16" md={{ size: 8, offset: 2 }}>
                                <FormGroup>
                                    <Input
                                        placeholder='Group creation Key'
                                        type='text'
                                        name='grpKey'
                                        id='grpKey'
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        placeholder='Enter group Password'
                                        type='password'
                                        name='password'
                                        id='password'

                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Input
                                        placeholder='Confirm group Password'
                                        type='password'
                                        name='ConfPassword'
                                        id='confPassword'

                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Col style={{margin: "auto", width: "fit-content"}}>
                                    <Row style={{margin: "auto", width: "fit-content"}}>
                                        <Button
                                        className='buttons mt-3'
                                        color="primary"
                                        style={{width: "150px", padding: "10px"}}
                                        > Create</Button>
                                    </Row>
                                    </Col>
                                </FormGroup>

                                <Row style={{display: "flex", justifyContent: "center"}}>
                                    <Link to="" style={{textDecoration: "underline"}}>Forgot password?</Link>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <Link to="/glogin" style={{textDecoration: "underline"}}>Already have a group?</Link>
                                </Row>
                            </Col>
                        </Form>
                    </CardBody>
                </Card>
            </Row>
        </div>
    )
}

export default CreateGroup
