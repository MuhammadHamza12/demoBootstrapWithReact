import React, { Component } from 'react'
import '../LoginForm/Login.css';
import Validator from '../../validator/registrationValidator';
export default class DemoLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag:false,
      email:'',
      password:'',
      errors:{},
    }
  }
  onHandleTextChange =(e)=>{
    console.log(e.target.value);
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  isValid = () => {
    const { errors, isValid } = Validator(this.state, 'loginPageValidation');
    if (!isValid) {
      this.setState({
        errors,
      });
    }
    return isValid;
  }

   isEmpty = (obj) => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    if (this.isValid()) {
      console.log(this.state.email, this.state.password);
      this.setState({
        errors: {},
        email: '',
        password: '',
      })
    }
  }

  render() {
    const { errors } = this.state;
    console.log(errors);
    return (
      <React.Fragment>
        <div style={{padding:40,borderRadius:8}} >

        <form onSubmit={this.onHandleSubmit} noValidate>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
            <div style={{width:120}} >
            <label className='checkCss' for="exampleInputEmail1">Email address</label>
            </div>
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
           <div style={{width:'70%'}} >
            <input 
            onChange={this.onHandleTextChange} 
            name='email' 
            style={{borderTop:0,borderLeft:0,borderRight:0,boxShadow:'none'}} 
            value={this.state.email}
            required  
            type="email" 
            className={`form-control ${(errors.email) ? 'is-invalid' : '' || (errors.isEmail) ? 'is-invalid' : '' || (!errors.email && !errors.isEmail && this.state.email.length > 0) ? 'is-valid' : '' }   `} 
            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
           
           </div>
           
            </div>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',marginTop:30}}>
            <div style={{width:120,textAlign:'-webkit-center'}} >
            <label for="exampleInputPassword1">Password</label>
            </div>
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
           <div style={{width:'70%'}} >
            <input 
            value={this.state.password}
            onChange={this.onHandleTextChange} name='password' style={{borderTop:0,borderLeft:0,borderRight:0,boxShadow:'none'}} required type="password" 
            class={`form-control ${errors.password ? 'is-invalid' : '' || (!errors.password && this.state.password.length > 0) ? 'is-valid' : ''}`} id="exampleInputPassword1" placeholder="Password" />
            <div className='row' style={{paddingTop:10}}  >
              <div className='col-sm-6' >
                Remember me
               
                <input style={{margin:5}} type="checkbox" aria-label="Checkbox for following text input" />
               
                
              </div>
              <div className='col-sm-6' style={{cursor:'pointer'}} >
                Forget password ? 
              </div>
            </div>
            <div style={{paddingTop:20,textAlign:'left'}} >

          <button style={{borderRadius:30}} type="submit" class="btn btn-success btn-lg">
          
          Login
          </button>
            </div>
           </div>
            </div>
        </form>
        </div>
      </React.Fragment>
    )
  }
}
