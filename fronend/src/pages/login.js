import React from 'react'

function login() {
  return (
    <div>	<div className="main-wrapper login-body">
    <div className="container-fluid px-0">
        <div className="row">
        
           
            <div className="col-lg-6 login-wrap">
                <div className="login-sec">
                    <div className="log-img">
                        <img className="img-fluid" src="assets/img/login-02.png" alt="Logo"/>
                    </div>
                </div>
            </div>
           
            <div className="col-lg-6 login-wrap-bg">
                <div className="login-wrapper">
                    <div className="loginbox">								
                        <div className="login-right">
                            <div className="login-right-wrap">
                                <div className="account-logo">
                                    <a href="index.html"><img src="assets/img/login-logo.png" alt=""/></a>
                                </div>
                                <h2>Login</h2>
                                
                                <form action="https://preclinic.dreamstechnologies.com/html/template/index.html">
                                    <div className="input-block">
                                        <label >Email <span className="login-danger">*</span></label>
                                        <input className="form-control" type="text" />
                                    </div>
                                    <div className="input-block">
                                        <label >Password <span className="login-danger">*</span></label>
                                        <input className="form-control pass-input" type="password" />
                                        <span className="profile-views feather-eye-off toggle-password"></span>
                                    </div>
                                    <div className="forgotpass">
                                        <div className="remember-me">
                                            <label className="custom_check mr-2 mb-0 d-inline-flex remember-me"> Remember me
                                            <input type="checkbox" name="radio"/>
                                            <span className="checkmark"></span>
                                            </label>
                                        </div>
                                        <a href="forgot-password.html">Forgot Password?</a>
                                    </div>
                                    <div className="input-block login-btn">
                                        <button className="btn btn-primary btn-block" type="submit">Login</button>
                                    </div>
                                </form>
                               
                                  
                                <div className="next-sign">
                                    <p className="account-subtitle">Need an account?  <a href="register.html">Sign Up</a></p>
                                    
                                  
                                    <div className="social-login">
                                        <a href="javascript:;" ><img src="assets/img/icons/login-icon-01.svg" alt=""/></a>
                                        <a href="javascript:;" ><img src="assets/img/icons/login-icon-02.svg" alt=""/></a>
                                        <a href="javascript:;" ><img src="assets/img/icons/login-icon-03.svg" alt=""/></a>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
           
            
        </div>
    </div>
</div></div>
  )
}

export default login