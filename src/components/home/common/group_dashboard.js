import React from "react";
import {  Route, Routes } from "react-router-dom";
import ContactSupervisor from "../group_Comp/contactSupervisor";
import CreateProposal from "../group_Comp/create_proposal";
import Dashboard from "../group_Comp/dashboard";
import SideMenu from "../menu/side_menu";
import Participants from "../group_Comp/participants";
import Topbar from "./top_bar";
import FinalWork from "../group_Comp/finalWork";
import Notification from "../group_Comp/notification";

const GroupDashboard = () => {
    return (
        <div className="row">
            <div className="col-2">
                <SideMenu user='student' />
            </div>

            <div className="col ml-4">
                <Topbar toggleSidebar={null} />

                <div className="m-3">
                    <Routes>
                        <Route exact path="" element={<Dashboard />} />
                        <Route exact path="proposal" element={ <CreateProposal />}/> 
                        <Route exact path="contact" element={ <ContactSupervisor /> }/>
                        <Route exact path="participants" element={ <Participants /> }/>
                        <Route exact path="final_work" element={<FinalWork />} />
                        <Route exact path="notifications" element={ <Notification />}/>
                    </Routes>
                </div>

            </div>
        </div>
    )
}

export default GroupDashboard
