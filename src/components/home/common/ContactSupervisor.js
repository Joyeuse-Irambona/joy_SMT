import React from "react";
import { Form, FormGroup,Input } from 'reactstrap'
import Topbar from "./top_bar";
import SideMenu from "../menu/side_menu";

const ContactSupervisor = () =>(
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
                         
                     }}>Contact supervisor</h3>
                     </div>
                </div>
                <div class="row" style={{ }}>
                    <span>Chat</span>
            <div class="col-12" style={{
                border:"1px solid gray",
                background:"#fff"
            }}>
            <Form>
     
      <FormGroup>
      
        <Input rows="6"  cols="7" type="textarea" name="text"  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."  style={{
            borderColor:"transparent"
        }} />
      </FormGroup>
      </Form>
            </div>
            <div class="col-9 mt-3" style={{
                border:"1px solid gray",
                background:"#fff"
            }}>
            <Form>
     
      <FormGroup>
      <Input rows="6"  cols="7" type="textarea" name="text"  placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."  style={{
            borderColor:"transparent"
        }} />
      </FormGroup>
      </Form>
            </div>
             </div>           
            </div>
        
        </div>
    </div>
       
    )


export default ContactSupervisor
