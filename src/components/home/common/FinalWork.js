import React from "react";
import { Button, Form, FormGroup,Input } from 'reactstrap'
import Topbar from "./top_bar";
import SideMenu from "../menu/side_menu";

const FinalWork = () => (
    <div className='row'
    >
     <div className='col-2'><SideMenu user='student'/></div>
        <div className='col ml-4'>
        <Topbar toggleSidebar={null} />
            <div className='m-3'>
                <div className="row justify-content-center text-center"
                style={{
                    borderBottom:"1px solid black",
                    margin:"2rem"
                }}>
                     <div className="col-12">
                         <h3 
                         style={{
                         
                     }}>Final Work</h3>
                     </div>
                </div>


            <div class="row" style={{ }}>
            <div class="col-12">
            <Form>
      <FormGroup>
        
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter the Title" />
      </FormGroup>
   
      
      <FormGroup>
      <Input rows="6"  cols="7" type="textarea" name="text"  placeholder="Write a project short projection"  style={{
            borderColor:"transparent"
        }} />
      </FormGroup>
      <FormGroup>
     
     <Input type="file" name="file" />
     <Input type="file" name="file" />

   </FormGroup>
    
   
       <FormGroup>
       <Button className="text-right">Submit</Button>
       </FormGroup>
      </Form>
            </div>
             </div>
  
    <div class="row">
  
        <div class="col-12">
       
        
        </div>

    </div>
  
              
            </div>
        
        </div>
    </div>

)

export default FinalWork
