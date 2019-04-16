import React , { Component , Suspense , lazy } from 'react';

// import '../css/app.css';
import '../components/LoginDemo.css';
const DemoLoginForm = lazy(() => import('../Container/LoginForm/DemoLoginForm'));
const LoginDemo = () => {
  return (
    <div className='mainBackColor' style={{  height:'-webkit-fill-available' }}>

      <div className="container">
        <div className="row">
          <div className="col-sm-3"></div>
          <div  className="col-sm-6 mainDiv" style={{padding:0,marginTop:20,textAlign:'center'}} >
            <div className='upper_class'>
              <div className='imageClass'>
                <h3 className='image_Text'>Log In</h3>
              </div>
            </div>
            <Suspense fallback={<div class="spinner-border text-primary text-center"></div>} ><DemoLoginForm /></Suspense> 
              </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
        </div>
  );
};

export default LoginDemo;