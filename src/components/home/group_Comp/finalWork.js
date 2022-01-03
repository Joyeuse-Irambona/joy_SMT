import React from 'react'
import { Form, FormGroup, Input, Button } from 'reactstrap'

const FinalWork = () => {
    return (
        <div>
            <div class="row" style={{ }}>
               <div class="col-12">
                    <Form>
                        <FormGroup>        
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="Enter the Title"
                            />
                        </FormGroup>
   
      
                        <FormGroup>
                            <Input
                                rows="6" 
                                cols="7"
                                type="textarea"
                                name="text"
                                placeholder="Write a project short projection"
                                style={{borderColor:"transparent"}}
                            />
                        </FormGroup>

                        <FormGroup>     
                            <Input type="file" name="file" />
                            <Input type="file" name="file" />
                        </FormGroup>

                        <FormGroup>
                            <Button className="buttons text-right">Submit</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default FinalWork
