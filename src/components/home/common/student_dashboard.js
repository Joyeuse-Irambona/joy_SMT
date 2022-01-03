import React from "react";
import { Jumbotron } from 'reactstrap'

import Topbar from "./top_bar";
import SideMenu from "../menu/side_menu";

const StudentDashboard = (props) => (
  <div className='row'
  >
   <div className='col-2'><SideMenu user='student'/></div>
      <div className='col ml-4'>
      <Topbar toggleSidebar={null} />
          <div className='m-3'>
          <div class="row justify-content-center text-center" style={{
              
             
            }}>
   <div class="col-md-3" style={{
       padding:"1rem",
    
   }}>
       <div class="card">
           <div class="card-body ">
         
                <div class="card-text"><h5>Research proposals</h5></div>
                <span><strong>43</strong></span>
                
           </div>
       </div>
   </div>
   <div class="col-md-3" style={{
       padding:"1rem"
   }}>
       <div class="card">
           <div class="card-body ">
         
                <div class="card-text"><h5>Research Projects</h5></div>
                <span><strong>43</strong></span>
                
           </div>
       </div>
   </div>
   <div class="col-md-3" style={{
       padding:"1rem"
   }}>
       <div class="card">
           <div class="card-body ">
         
                <div class="card-text"><h5>Group Participants</h5></div>
                <span><strong>43</strong></span>
                
           </div>
       </div>
   </div>
   <div class="col-md-3" style={{
       padding:"1rem"
   }}>
       <div class="card">
           <div class="card-body ">
         
                <div class="card-text"><h5>Total tasks</h5></div>
                <span><strong>43</strong></span>
                
           </div>
       </div>
   </div>
      </div>

  <div class="row">

      <div class="col-12">
      <Jumbotron style={{
          background:"#fff"
      }}>
        <h5 className="" style={{
           position:"absolute",
           top:"5%",
           left:"2%"
        }}>Project Status</h5>
        
      </Jumbotron>
      
      </div>
      <div class="col-12">
      <Jumbotron style={{
          background:"#fff"
      }}>
        <h5 className="" style={{
           position:"absolute",
           top:"5%",
           left:"2%"
        }}>Recent Activities</h5>
        
      </Jumbotron>
      
      </div>
 
  </div>

            
          </div>
      
      </div>
  </div>
);

export default StudentDashboard;
