import React from 'react';
import DemoLoginForm from '../Container/LoginForm/DemoLoginForm';
import '../components/LoginDemo.css';
const LoginDemo = () => {
  return (
    <div style={{ backgroundColor: '#EBEEEF' , height:'-webkit-fill-available' }}>

      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6 mainDiv" style={{padding:0,marginTop:20}} >
            <div className='upper_class'>
              <div className='imageClass'>
                <h3 className='image_Text'>Log In</h3>
              </div>
            </div>
            <DemoLoginForm /> </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
      {/* <div class="row justify-content-md-center">
    <div class="col col-lg-2">
    </div>
    <div class="col-md-auto"  >
    <div className='upper_class'>
            <div className='imageClass'>
              <h3 className='image_Text'>Log In</h3>
            </div>
          </div>
          <DemoLoginForm /> </div>
    <div class="col col-lg-2">
    </div>
  </div> */}
      {/* <div className="row">
        <div className="col-sm">
        </div>
        <div className="col-md col-6 DemoCss">
          <div className='upper_class'>
            <div className='imageClass'>
              <h3 className='image_Text'>Log In</h3>
            </div>
          </div>
          <DemoLoginForm />
        </div>
        <div className="col-sm">
        </div>
      </div> */}
    </div>
  );
};

export default LoginDemo;