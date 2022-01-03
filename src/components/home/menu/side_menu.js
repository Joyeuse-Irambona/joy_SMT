import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import SubMenu from "./sub_menu";
const SideMenu = (props)=> {

const{isOpen,toggle,user}=props
  const getUserMenu=()=>{
    switch(user){
      case 'student':
        return studentMenu
      case 'hod':
        return hodMenu
        case 'supervisor':
        return supervisorMenu
      default:
        return studentMenu
    }
  }
  
  return(
  <div className={classNames("sidebar", { "is-open": isOpen??true })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>CST-SPMS</h3>
    </div>
    <div style={{overflowY: "initial"}} className="side-menu">
      <Nav vertical className="list-unstyled pb-3">

        {
          getUserMenu().map((menu,i)=><>{menu.submenus.length==0?<NavItem>
            <NavLink tag={Link} to={menu.target}>
              <FontAwesomeIcon icon={menu.icon} className="mr-2" />
              {menu.name}
            </NavLink>
          </NavItem>:<SubMenu title={menu.name} icon={menu.icon} items={menu.submenus} />}</>)
        }
        
        

      </Nav>
    </div>
  </div>
);
      }


const studentMenu=[
  {
    name:"Dashboard",
    icon:faChartLine,
    target:'/student/',
    submenus:[]
  },
  {
    name:"Proposal",
    icon:faChartLine,
    target:'/student/proposal',
    submenus:[]
  },
  {
    name:"Contact supervisor",
    icon:faChartLine,
    target:'/student/contact',
    submenus:[]
  },
  {
    name:"Participants",
    icon:faChartLine,
    target:'/student/participants',
    submenus:[]
  },
  {
    name:"Final work",
    icon:faChartLine,
    target:'/student/final_work',
    submenus:[]
  },
  {
    name:"Progress",
    icon:faChartLine,
    target:'/student/progress',
    submenus:[]
  },
  {
    name:"Logout",
    icon:faSignOutAlt,
    target:'/student/logout',
    submenus:[]
  },
  
]


const hodMenu=[
  {
    name:"Dashboard",
    icon:faChartLine,
    target:'/hod/',
    submenus:[]
  },
  {
    name:"Proposals",
    icon:faChartLine,
    target:'/hod/proposals',
    submenus:[]
  },
  {
    name:"Supervisors",
    icon:faChartLine,
    target:'/hod/supervisors',
    submenus:[]
  },
  {
    name:"Progress",
    icon:faChartLine,
    target:'/hod/progress',
    submenus:[
      {
        title:"Group 1",
        target:"/hod/progress/Group1"
      },
      {
        title:"Group 2",
        target:"/hod/progress/group2"
      },
    ]
  },
  {
    name:"Create group",
    icon:faChartLine,
    target:'/hod/create_group',
    submenus:[]
  },
  {
    name:"Contact group",
    icon:faChartLine,
    target:'/hod/contact_group',
    submenus:[]
  },
  {
    name:"Contact supervisor",
    icon:faChartLine,
    target:'/hod/contact_supervisor',
    submenus:[]
  },
  {
    name:"Logout",
    icon:faSignOutAlt,
    target:'/hod/logout',
    submenus:[]
  },
  
]


const supervisorMenu=[
  {
    name:"Dashboard",
    icon:faChartLine,
    target:'/supervisor/',
    submenus:[]
  },
  {
    name:"Proposals",
    icon:faChartLine,
    target:'/supervisor/proposals',
    submenus:[]
  },

  {
    name:"Groups",
    icon:faChartLine,
    target:'/supervisor/groups',
    submenus:[
      {
        title:"Group 1",
        target:"/supervisor/Group1"
      },
      {
        title:"Group 2",
        target:"/supervisor/Group2"
      },
    ]
  },
  {
    name:"Contact HOD",
    icon:faChartLine,
    target:'/supervisor/contact_hod',
    submenus:[]
  },
  {
    name:"Contact group",
    icon:faChartLine,
    target:'/supervisor/contact_group',
    submenus:[]
  },
  {
    name:"Logout",
    icon:faSignOutAlt,
    target:'/supervisor/logout',
    submenus:[]
  },
  
]

export default SideMenu;
