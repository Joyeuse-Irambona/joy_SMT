import React from "react";
import { Table } from 'reactstrap'

import Topbar from "./top_bar";
import SideMenu from "../menu/side_menu";


const SubmitedProposal = () => (
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
                         
                     }}>Proposal</h3>
                     </div>
                </div>


            <div class="row" style={{ }}>
            <div class="col-12">
            <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Added Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
            
   
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

export default SubmitedProposal
