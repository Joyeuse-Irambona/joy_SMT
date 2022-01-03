import React from "react";
import HomePage from "./components/home";
import Login from "./components/login";
import GroupLogin from "./components/glogin";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HodDashboard from "./components/home/common/hod_dashboard";
import SupervisorDashboard from "./components/home/common/supervisor_dashboard";
import SupCreateGroup from "./components/createGroup";
import GroupDashboard from "./components/home/common/group_dashboard";
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <HomePage /> }/>   
        <Route exact path="/login" element={ <Login /> }/>
        <Route exact path="/glogin" element={ <GroupLogin /> }/>
        <Route exact path="/create-group" element={ <SupCreateGroup /> }/>
        <Route exact path="/supervisor/*" element={ <SupervisorDashboard /> } />
        <Route exact path="/hod/*" element={ <HodDashboard /> }  />
        <Route exact path="/student/*" element={ <GroupDashboard />}/>    
      </Routes>
    </Router>
  );
}

export default App;