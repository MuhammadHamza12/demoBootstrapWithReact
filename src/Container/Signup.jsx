import React, { Component, lazy, Suspense } from "react";
import { Alert, Button, Form, Col, Container, Row } from "react-bootstrap";
import background from '../images/sing2.png';
import axios from 'axios';
import config from '../config/config';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginAcions from '../Actions/LoginActions/index';
import '../Container/signup.css';
import '../Container/signup';
// const background = lazy(()=> import('../images/sing2.png'));
const styles = {
  header: {
    backgroundImage: `url(${
      background
      })`,
    height: "90vh",
    opacity: 0.7,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
};
const FormStyle = {
  //   boxShadow: "5px 5px 5px gray",
  padding: "50px",
};
const pStyle = {
  fontSize: "15px",
  textAlign: "center"
};
const FormLabel = {
  color: '#fff',
  fontSize: 20
}
const FormInput = {
  width: '100%',
}
const BackgroundColor = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
}

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      isLoading: false,
      errors: {},
    }
    if (this.props.auth) {
      this.props.history.push('/dashboard');
    }

  }
  onHandleText = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  onHandleSubmit = (e) => {
    e.preventDefault();
    const { email, name, password } = this.state;
    this.setState({
      isLoading: true,
    });
    this.props.actionLogin.Login({ email, name, password }, '/signup/api')
      .then((success) => {
        debugger;
        console.log(success);
        debugger;
        this.setState({
          isLoading: false,
        })
        this.props.history.push('/dashboard');
      }).catch((Err) => {
        debugger;
        console.log(Err);
        debugger;
        this.setState({
          isLoading: false,
          errors: { errormsg: Err.response.data.errors.form, errorFlag: true }
        })
      });
  }
  displayMsg = (color, msg, flag) => {
    if (flag) {
      return (
        <Alert variant={color}>
          {msg}
        </Alert>
      );
    }
  }
  componentWillUnmount() {
    this.setState({
      isLoading: false,
      errors: {}
    })
  }
  render() {

    const { errors } = this.state;
    return (
      // <div class="container-fluid">
      //   <div class="row min-vh-100">
      //     <aside class="col-12 col-md-2 p-0 bg-dark">
      //       <nav class="navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start py-2">
      //         <div class="collapse navbar-collapse">
      //           <ul class="flex-md-column flex-row navbar-nav w-100 justify-content-between">
      //             <li class="nav-item">
      //               <a class="nav-link pl-0 text-nowrap" href="#"><i class="fa fa-bullseye fa-fw"></i> <span class="font-weight-bold">Brand</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-heart-o fa-fw"></i> <span class="d-none d-md-inline">Link</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-book fa-fw"></i> <span class="d-none d-md-inline">Link</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-book fa-fw"></i> <span class="d-none d-md-inline">Link</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-book fa-fw"></i> <span class="d-none d-md-inline">Link</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-book fa-fw"></i> <span class="d-none d-md-inline">Link</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-book fa-fw"></i> <span class="d-none d-md-inline">Link</span></a>
      //             </li>

      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-heart codeply fa-fw"></i> <span class="d-none d-md-inline">Codeply</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-heart-o fa-fw"></i> <span class="d-none d-md-inline">Link</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-book fa-fw"></i> <span class="d-none d-md-inline">Link</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-heart codeply fa-fw"></i> <span class="d-none d-md-inline">Codeply</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-heart codeply fa-fw"></i> <span class="d-none d-md-inline">Codeply</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-heart codeply fa-fw"></i> <span class="d-none d-md-inline">Codeply</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-heart codeply fa-fw"></i> <span class="d-none d-md-inline">Codeply</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-heart codeply fa-fw"></i> <span class="d-none d-md-inline">Codeply</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-heart codeply fa-fw"></i> <span class="d-none d-md-inline">Codeply</span></a>
      //             </li>

      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-star codeply fa-fw"></i> <span class="d-none d-md-inline">Link</span></a>
      //             </li>
      //             <li class="nav-item">
      //               <a class="nav-link pl-0" href="#"><i class="fa fa-star fa-fw"></i> <span class="d-none d-md-inline">Link</span></a>
      //             </li>
      //           </ul>
      //         </div>
      //       </nav>
      //     </aside>
      //     <main class="col bg-faded py-3">
      //       <h2>Example</h2>
      //       <p>
      //         This is a Bootstrap 4 example layout that includes a Sidebar menu. On larger screen widths, the Sidebar is on the
      //         left side and consumes the entire page height. It's vertically positioned down the screen. On smaller screen widths (like mobile phones and tablets), the Sidebar
      //         moves to the top of the page, and becomes horizontally positioned across the page like a Navbar. Only icons are shown
      //         on mobile to limit use of screen real estate.
      //         </p>
      //       <p>
      //         This Sidebar works using only Bootstrap CSS classes and doesn't require JavaScript. It utilizes the responsive Navbar classes
      //         to auto-magically switch the Sidebar orientation.
      //         </p>
      //     </main>
      //   </div>
      // </div>

<div class="wrapper">

{/* <!-- Sidebar --> */}
<nav id="sidebar">
<div class="sidebar-header">
            <h3>Bootstrap Sidebar</h3>
        </div>

        <ul class="list-unstyled components">
            <p>Dummy Heading</p>
            <li class="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="#">Home 1</a>
                    </li>
                    <li>
                        <a href="#">Home 2</a>
                    </li>
                    <li>
                        <a href="#">Home 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                <ul class="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="#">Page 1</a>
                    </li>
                    <li>
                        <a href="#">Page 2</a>
                    </li>
                    <li>
                        <a href="#">Page 3</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
</nav>

{/* <!-- Page Content --> */}
<div id="content">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">

            <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-left"></i>
                {/* <span>Toggle Sidebar</span> */}
            </button>

        </div>
    </nav>
    {/* <!-- We'll fill this with dummy content --> */}
</div>

</div>   
      );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actionLogin: bindActionCreators(LoginAcions, dispatch),
  }
}
function mapStateToProps(state) {
  return {
    auth: state.setUserReducer.auth,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
