import React from "react";
import {  Route, Routes } from "react-router-dom";

import Topbar from "./top_bar";
import SideMenu from "../menu/side_menu";
import Dashboard from "../hod_Comp/dashboard";
import Proposal from "../hod_Comp/proposals";
import Supervisor from "../hod_Comp/supervisor";
import Create_group from "../hod_Comp/create_group";
import Contact_supervisor from "../hod_Comp/contact_supervisor";
import View_Supervisor from "../hod_Comp/view_Supervisor";
import Update_supervisor from "../hod_Comp/update_supervisor";
import Progress from "../hod_Comp/progress";
import Contact_group from "../hod_Comp/contact_group";

const HodDashboard = (props) => {
  return (
      <div className="row">
        <div className="col-2">
          <SideMenu user='hod' />
        </div>

        <div className="col ml-4">
          <Topbar toggleSidebar={null} />
          <div className="m-3">
            <Routes>
              <Route exact path="" element={ <Dashboard /> }/>
              <Route exact path="proposals" element={ <Proposal /> }/>
              <Route exact path="supervisors" element={ <Supervisor /> }/>
              <Route exact path="supervisors/:name" element={ <View_Supervisor /> }/>
              <Route exact path="supervisors/:name/update" element={ <Update_supervisor /> }/>
              <Route exact path="progress/:group_name" element={ <Progress /> }/>
              <Route exact path="create_group" element={ <Create_group /> }/>
              <Route exact path="contact_group" element={ <Contact_group /> }/>
              <Route exact path="contact_supervisor" element={ <Contact_supervisor /> }/>
            </Routes>
          </div>
        </div>
      </div>
  )
}

export default HodDashboard;