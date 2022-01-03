import React from "react";
import {  Route, Routes } from "react-router-dom";

import Topbar from "./top_bar";
import SideMenu from "../menu/side_menu";
import Dashboard from "../supervisor_Comp/dashboard";
import AssignedGrp from "../supervisor_Comp/assignedGrp";
import ContactHOD from "../supervisor_Comp/ContactHod";
import ContactGrp from "../supervisor_Comp/contactGrp";

const SupervisorDashboard = (props) => (
  <div className='row'>
    <div className='col-2'>
      <SideMenu user='supervisor'/>
    </div>
      <div className='col ml-4'>
        <Topbar toggleSidebar={null} />

        <div className='m-3'>
          <Routes>
            <Route exact path="" element={ <Dashboard /> }/>
            <Route exact path="/:grp_name" element={ <AssignedGrp /> }/>
            <Route exact path="contact_hod" element={<ContactHOD />}/>
            <Route exact path="contact_group" element={<ContactGrp />}/>
            {/* <Route exact path="proposals" element={ <Proposal /> }/>
            <Route exact path="supervisors" element={ <Supervisor /> }/>
            <Route exact path="supervisors/:name" element={ <View_Supervisor /> }/>
            <Route exact path="supervisors/:name/update" element={ <Update_supervisor /> }/>
            <Route exact path="progress/" element={ <Progress /> }/>
            <Route exact path="create_group" element={ <Create_group /> }/>
            <Route exact path="contact" element={ <Contact_supervisor /> }/> */}
          </Routes>
        </div>
      
      </div>
  </div>
);

export default SupervisorDashboard;
