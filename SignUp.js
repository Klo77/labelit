import React from 'react'
import { Col, Container, Row ,Form,Button} from 'react-bootstrap'
import './SignUp.css'
import logo from '../../assets/images/logo.png'

const SignUp = () => {
  return (
    /* start the <> (this <> necessary to let react work) */
    <>
    {/*first div to let the image on the middle*/}
        <div>
          
        <img src={logo} className='logo'/>
        <h3 className='text-center my-3'>Sign Up</h3>
      </div>

    {/*Container from Bootstrab library that put margin 15px for all direction */}   

    <Container> 
      {/*start the form (form contain rows and columns*/}    
      <Form className='signUp-form'>
         {/*start First Row that has two column (first name - last name) */} 
        <Row>
          <Col>
            <Form.Label for="F-n" className='my-2'>First name*</Form.Label>
            <Form.Control type="text"  className='input-form' class="form-control"  placeholder="First name" id="F-n" required='required'/>
          </Col>
    
          <Col>
            <Form.Label for="L-n" className='my-2'>Last name*</Form.Label>
            <Form.Control type="text" className='input-form' class="form-control" placeholder="Last name" id='L-n'/>
          </Col>
        {/*End First Row that has two column (first name - last name) */} 
        </Row>

        {/*start second Row that has one column (Username) */} 
    
        <Row>
          <Col>
            <Form.Label for="U-n" className='my-2'>Username*</Form.Label>
            <Form.Control type="text" className='input-form' class="form-control" placeholder="Username" id="U-n" required='required'/>
          </Col>
        {/*End second Row that has one column (Username) */} 
        </Row>

        <Row>
          <Col>
            <Form.Label for="email" className='my-2'>Email*</Form.Label>
            <Form.Control type="email" className='input-form' class="form-control" placeholder="Email" id="email" required='required'/>
          </Col>
        </Row> 

        <Row>
          <Col>
            <Form.Label for="pass" className='my-2'>Password*</Form.Label>
            <Form.Control type="password" className='input-form' class="form-control " placeholder="Password" id="pass" required='required'/>
          </Col>
        </Row> 

        <Row>
          <Col>
            <Form.Label for="C-pass" className='my-2'>Confirm Password*</Form.Label>
            <Form.Control type="password" className='input-form'  class="form-control" placeholder="Confirm Password" id="C-pass" required='required'/>
          </Col>
        </Row>

        <Form.Group className="my-3" controlId="formBasicCheckbox">
        <Form.Check
            type="checkbox"
            label={
                <span>I agree to Label it’s <span><a href='#' target="_blank" className='text-decoration-none'> Terms of Service </a></span>and have read and acknowledge the<a href='#' target='_blank' className='text-decoration-none'> Privacy Policy.</a></span>
            }
        />
        </Form.Group>
        
        <Button className='btn btn-size ' type="submit">
          Create Account
        </Button>
          <h3 className='alr'>Already have an account?<a href='#' className='text-decoration-none'> Log in</a></h3>
        </Form>
        
            
    </Container>

    </>
    /* End the <> (this <> necessary to let react work) */

  )
}

export default SignUp