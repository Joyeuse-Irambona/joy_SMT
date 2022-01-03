import React,{useState} from 'react'
import MyNavBar from './nav'
import MyFooter from './footer'
import { Col, Form,FormGroup, Input,Button,FormFeedback, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
function GroupLogin(){

  const [groupname, setName] = useState({})
  const [password,setPassword]=useState({})

  const onNameChange = (e) => {
    var name = e.target.value
    if (name !== "") {
        setName({ value: name })
    } else {
        setName({ value: name, message: "Write your group name" })
    }
}

  const onPasswordChange=(e)=>{
    var pass=e.target.value
    if(pass!==""){
      setPassword({value:pass})
    }else{
      setPassword({value:pass,message:"Write group password"})
    }
  }

  const handleLogin=(e)=>{
   e.preventDefault()

   if (groupname.value === null || groupname.value === "") {
    setName({ message: "Write your first namet" })
} else {
     alert("Implement the login logic by connecting to API and everything")
   }
  }
    return(
      <div className='root'>
        <MyNavBar/>
        <div className='container mt-3'>

          <div className='row'>
    
            <div className='col-lg-6 col-sm-12'  id='login' style={{margin: "auto"}}> 
              <h1 className= "text-center">Group Login</h1>
              <Form className="form" method='POST'>
                <Col className='mt-3'>
                  <FormGroup>                      
                      <Input invalid={groupname.message != null} onChange={onNameChange} className="input" type="text" name="text" placeholder="Enter your group name" />
                      <FormFeedback invalid={groupname.message != null}>{groupname.message}</FormFeedback>
                  </FormGroup>
                </Col>

                <Col className='mt-3'>
                  <FormGroup>
                    <Input invalid={password.message!=null} onChange={onPasswordChange} className="input" type="password"name="password"  placeholder="Enter group Password"
                    />
                  <FormFeedback invalid={password.message!=null}>{password.message}</FormFeedback>
                  </FormGroup>
                </Col>

                <Row style={{margin: "auto", width: "fit-content"}}>
                  <Button onClick={handleLogin} className='buttons mt-3' color="primary" style={{width: "150px", padding: "10px"}}>Login</Button>
                </Row>

              </Form>

              <div style={{display: "flex", justifyContent: "space-evenly", maxWidth: "300px", margin: "auto"}}>
                <Link style={{textDecoration: "underline"}} to="">Forget password?</Link>
                <Link style={{textDecoration: "underline"}} to="/create-group">Create group?</Link>
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

export default GroupLogin