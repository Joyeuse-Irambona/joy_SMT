import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Row, Col } from 'reactstrap'
import { Form, FormGroup, Input, Button } from 'reactstrap'

const Participants = () => {
    return (
        <div>
            <Row className='text-center'>
                <Col>
                    <h5>Add New Member</h5>
                    <hr />
                </Col>
            </Row>
            <div class="row" style={{ }}>
                <div class="col-12">
                    <Form>
                        <FormGroup>
                            <Input type="number" name="email" id="exampleEmail" placeholder="Reg No" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="firstname" id="exampleEmail" placeholder="Firstname" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="lastname" id="exampleEmail" placeholder="Lastname" />
                        </FormGroup>
                        <FormGroup>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                        </FormGroup>

                        <FormGroup>
                            <Button className="btn buttons btn-lg btn-primary"><span><FontAwesomeIcon icon={faPlus} /></span>  Add</Button>
                        </FormGroup>
                        
                    </Form>

                    <div className="row mt-4">    
 
                        <div className="col-md-4 offset-md-3 mt-3 text-center" style={{background:"#fff",}}>
                            <h3>Group Members</h3>
                            
                            <p>Niringiyima Fabien <span>218008615</span></p>
                            <p>Niyongabo Florien <span>218002294</span></p>
                            <p>Irambona Joy <span>217000000</span></p>
                        </div>
                    </div>
                </div>
         
            </div>
        </div>
    )
}

export default Participants
