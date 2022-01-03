import React from 'react'
import MyNavBar from './nav'
import {Button} from 'reactstrap'
import MyFooter from './footer'
import { useNavigate } from 'react-router-dom'

function HomePage(){
    var navigate = useNavigate();

    return(
        <div className='root'>
            <MyNavBar/>
            
            <div className='row'>

                <div className='col-lg-12 col-sm-12' >
                        <div style={{marginLeft:'30%',marginTop:'117px',marginRight:'30%', textAlign:"center",display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',height:'90%'}}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                            qui officia deserunt mollit anim id est laborum."                        
                        
                            <div style={{display:'flex-end',marginTop:20}}>
                            <Button onClick={()=> navigate('hod')} className='buttons'  color="primary" style={{marginRight:20 }}>HOD</Button>
                            <Button onClick={()=> navigate('login')} className='buttons' color="primary" style={{marginLeft:20 }}>Superviser</Button>
                            <Button onClick={()=> navigate('glogin')} className='buttons' color="primary" style={{marginLeft:20 }}> Group</Button>
                            </div>
                        </div>

                </div>

                
            </div> 
            <div>
                <MyFooter/>
            </div>
     </div>
    
       
    )
}

export default HomePage