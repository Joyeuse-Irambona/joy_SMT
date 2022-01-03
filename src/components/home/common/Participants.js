import React from "react";
import { Button, Form, FormGroup,Input } from 'reactstrap'
import Topbar from "./top_bar";
import SideMenu from "../menu/side_menu";

const Participants = () => (
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
                         
                     }}>Add new member</h3>
                     </div>
                </div>
                
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
 <Button className="btn btn-lg btn-primary">Submit</Button>
     
      </Form>
            </div>
         
            </div>


 <div className="row mt-4">
   
     
 
     <div className="col-md-4 offset-md-3 mt-3 text-center" style={{
         background:"#fff",
        
     }}>
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


export default Participants
