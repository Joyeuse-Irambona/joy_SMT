import React,{useState} from 'react'
import MyNavBar from './nav'
import MyFooter from './footer'
import {Col, Form,FormGroup, Input,Button,FormFeedback, Row} from 'reactstrap';
import { Link } from 'react-router-dom';
function Login(){

  const [email,setEmail]=useState({})
  const [password,setPassword]=useState({})

  const onEmailChange=(e)=>{
    var em=e.target.value
    if(em!==""){
      setEmail({value:em})
    }else{
      setEmail({value:em,message:"Write your email"})
    }
  }

  const onPasswordChange=(e)=>{
    var pass=e.target.value
    if(pass!==""){
      setPassword({value:pass})
    }else{
      setPassword({value:pass,message:"Write your password"})
    }
  }

  const handleLogin=(e)=>{
   e.preventDefault()

   if(email.value===null || email.value===""){
     setEmail({message:"Write your email first"})
   }else if(password.value===null || password.value===""){
     setPassword({message:"Write your password"})
   }else{
     alert("Implement the login logic by connecting to API and everything")
   }
  }
    return(
        <div className='root'>
           <MyNavBar/>
          <div className='container mt-3'>

            <div className='row'>
  
              <div className='col-lg-6 col-sm-12'  id='login' style={{margin: "auto"}} > 
                <h1 className= "text-center">Login here</h1>
                <Form className="form" method='POST'>
                  <Col className='mt-3'>
                    <FormGroup>
                      <Input invalid={email.message!=null} onChange={onEmailChange} className="input" type="email" name="email" placeholder="Enter your Email"/>
                      <FormFeedback invalid={email.message!=null}>{email.message}</FormFeedback>
                    </FormGroup>
                  </Col>

                  <Col className='mt-3'>
                    <FormGroup>
                      <Input invalid={password.message!=null} onChange={onPasswordChange} className="input" type="password"name="password"  placeholder="Enter your Password"
                      />
                    <FormFeedback invalid={password.message!=null}>{password.message}</FormFeedback>
                    </FormGroup>
                  </Col>

                  <Row style={{margin: "auto", width: "fit-content"}}>
                    <Button onClick={handleLogin}
                      className='buttons mt-3'
                      color="primary"
                      style={{width: "150px", padding: "10px"}}
                      >Login</Button>
                  </Row>
      
                </Form>
                <div style={{display: "flex", justifyContent: "space-evenly", maxWidth: "300px", margin: "auto"}}>
                  <Link to="/" style={{textDecoration: "underline"}}>Forget password?</Link>
                  <Link to="/create-group" style={{textDecoration: "underline"}}>Signup</Link>
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

export default Login