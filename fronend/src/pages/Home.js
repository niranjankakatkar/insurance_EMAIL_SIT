import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>  
      
        <div className="main-wrapper">
  <div className="header">
              <div className="header-left">
                  <Link to="index.html" className="logo">
                      <img src="assets/img/logo.png" width="35" height="35" alt=""/> <span>Clinic</span>
                  </Link>
              </div>
              <Link id="toggle_btn" to="#"><img src="assets/img/icons/bar-icon.svg"  alt=""/></Link>
              <Link id="mobile_btn" className="mobile_btn float-start" to="#sidebar"><img src="assets/img/icons/bar-icon.svg"  alt=""/></Link>
              <div className="top-nav-search mob-view">
                  <form>
                      <input type="text" className="form-control" placeholder="Search here"/>
                      <Link className="btn" ><img src="assets/img/icons/search-normal.svg" alt=""/></Link>
                  </form>
              </div>
              <ul className="nav user-menu float-end">
                  <li className="nav-item dropdown d-none d-md-block">
                      <Link to="#" className="dropdown-toggle nav-Link" data-bs-toggle="dropdown"><img src="assets/img/icons/note-icon-02.svg" alt=""/><span className="pulse"></span> </Link>
                      <div className="dropdown-menu notifications">
                          <div className="topnav-dropdown-header">
                              <span>Notifications</span>
                          </div>
                          <div className="drop-scroll">
                             
                          </div>
                          <div className="topnav-dropdown-footer">
                              <Link to="activities.html">View all Notifications</Link>
                          </div>
                      </div>
                  </li>
                  <li className="nav-item dropdown d-none d-md-block">
                      <Link to="#" id="open_msg_box" className="hasnotifications nav-Link"><img src="assets/img/icons/note-icon-01.svg" alt=""/><span className="pulse"></span> </Link>
                  </li>
                  <li className="nav-item dropdown has-arrow user-profile-list">
                      <Link to="#" className="dropdown-toggle nav-Link user-Link" data-bs-toggle="dropdown">
                          <div className="user-names">
                              <h5>SIT ADMIN </h5>
                              <span>Admin</span>
                          </div>
                          <span className="user-img">
                              <img  src="assets/img/user-06.jpg"  alt="Admin"/>
                          </span>
                      </Link>
                      <div className="dropdown-menu">
                          <Link className="dropdown-item" to="profile.html">My Profile</Link>
                          <Link className="dropdown-item" to="edit-profile.html">Edit Profile</Link>
                          <Link className="dropdown-item" to="settings.html">Settings</Link>
                          <Link className="dropdown-item" to="login.html">Logout</Link>
                      </div>
                  </li>
                  <li className="nav-item ">
                      <Link to="settings.html"  className="hasnotifications nav-Link"><img src="assets/img/icons/setting-icon-01.svg" alt=""/> </Link>
                  </li>
              </ul>
              <div className="dropdown mobile-user-menu float-end">
                  <Link to="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis-vertical"></i></Link>
                  <div className="dropdown-menu dropdown-menu-end">
                      <Link className="dropdown-item" to="profile.html">My Profile</Link>
                      <Link className="dropdown-item" to="edit-profile.html">Edit Profile</Link>
                      <Link className="dropdown-item" to="settings.html">Settings</Link>
                      <Link className="dropdown-item" to="login.html">Logout</Link>
                  </div>
              </div>
          </div>
          <div className="sidebar" id="sidebar">
              <div className="sidebar-inner slimscroll">
                  <div id="sidebar-menu" className="sidebar-menu">
                      <ul>
                          <li className="menu-title">Main</li>
                          <li className="submenu">
                            <Link to="/Dashboard"><span className="menu-side"><img src="assets/img/icons/menu-icon-01.svg" alt=""/></span> <span> Dashboard </span> </Link>
                           </li>
                         
                          <li className="submenu">
                              <Link to="/Appointment"><span className="menu-side"><img src="assets/img/icons/menu-icon-04.svg" alt=""/></span> <span> Appointments </span></Link>
                             
                          </li>
                          <li className="submenu">
                              <Link to="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-05.svg" alt=""/></span> <span> Doctor Schedule </span> </Link>
                             
                          </li>
                          
                      </ul>
                      <div className="logout-btn">
                          <Link to="/"><span className="menu-side"><img src="assets/img/icons/logout.svg" alt=""/></span> <span>Logout</span></Link>
                      </div>
                  </div>
              </div>
          </div>
         
   <div className="page-wrapper">
        <div className="content">
        
           
            <div className="page-header">
                <div className="row">
                    <div className="col-sm-12">
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="index.html">Dashboard </Link></li>
                            <li className="breadcrumb-item"><i className="feather-chevron-right"></i></li>
                            <li className="breadcrumb-item active">Admin Dashboard</li>
                        </ul>
                    </div>
                </div>
            </div>
           
            
            <div className="good-morning-blk">
                <div className="row">
                    <div className="col-md-6">
                        <div className="morning-user">
                            <h2>Good Morning, <span>Admin</span></h2>
                            <p>Have a nice day at work</p>
                        </div>
                    </div>
                    <div className="col-md-6 position-blk">
                        <div className="morning-img">
                            <img src="assets/img/morning-img-01.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                    <div className="dash-widget">
                        <div className="dash-boxs comman-flex-center">
                            <img src="assets/img/icons/calendar.svg" alt=""/>
                        </div>
                        <div className="dash-content dash-count">
                            <h4>Appointments</h4>
                            <h2><span className="counter-up" >0</span></h2>
                            <p><span className="passive-view"><i className="feather-arrow-up-right me-1"></i>40%</span> vs last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                    <div className="dash-widget">
                        <div className="dash-boxs comman-flex-center">
                            <img src="assets/img/icons/profile-add.svg" alt=""/>
                        </div>
                        <div className="dash-content dash-count">
                            <h4>New Patients</h4>
                            <h2><span className="counter-up" >0</span></h2>
                            <p><span className="passive-view"><i className="feather-arrow-up-right me-1"></i>20%</span> vs last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                    <div className="dash-widget">
                        <div className="dash-boxs comman-flex-center">
                            <img src="assets/img/icons/scissor.svg" alt=""/>
                        </div>
                        <div className="dash-content dash-count">
                            <h4>Operations</h4>
                            <h2><span className="counter-up" >0</span></h2>
                            <p><span className="negative-view"><i className="feather-arrow-down-right me-1"></i>15%</span> vs last month</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-lg-6 col-xl-3">
                    <div className="dash-widget">
                        <div className="dash-boxs comman-flex-center">
                            <img src="assets/img/icons/empty-wallet.svg" alt=""/>
                        </div>
                        <div className="dash-content dash-count">
                            <h4>Earnings</h4>
                            <h2>Rs.<span className="counter-up" > 0.00</span></h2>
                            <p><span className="passive-view"><i className="feather-arrow-up-right me-1"></i>30%</span> vs last month</p>
                        </div>
                    </div>
                </div>
            </div>
             <div className="row">
                <div className="col-12 col-xl-12">
                    <div className="card">
                        <div className="card-header pb-0">
                            <h4 className="card-title d-inline-block">Recent Patients </h4> <Link to="patients.html" className="float-end patient-views">Show all</Link>
                        </div>
                        <div className="card-block table-dash">
                            <div className="table-responsive">
                                <table className="table mb-0 border-0 datatable custom-table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="form-check check-tables">
                                                    <input className="form-check-input" type="checkbox" value="something"/>
                                                </div>
                                            </th>
                                            <th>No</th>
                                            <th>Patient name</th>
                                            <th>Age</th>
                                            <th>Date of Birth</th>
                                            <th>Diagnosis</th>
                                            <th>Triage</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="form-check check-tables">
                                                    <input className="form-check-input" type="checkbox" value="something"/>
                                                </div>
                                            </td>
                                            <td>R00001</td>
                                            <td className="table-image">
                                                <img width="28" height="28" className="rounded-circle" src="assets/img/profiles/avatar-02.jpg" alt=""/> 
                                                <h2>Andrea Lalema</h2>
                                            </td>
                                            <td>21</td>
                                            <td>07 January 2002</td>
                                            <td>Heart attack</td>
                                            <td><button className="custom-badge status-green ">Non Urgent</button></td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></Link>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <Link className="dropdown-item" to="edit-patient.html"><i className="fa-solid fa-pen-to-square m-r-5"></i> Edit</Link>
                                                        <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i className="fa fa-trash-alt m-r-5"></i> Delete</Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check check-tables">
                                                    <input className="form-check-input" type="checkbox" value="something"/>
                                                </div>
                                            </td>
                                            <td>R00002</td>
                                            <td className="table-image">
                                                <img width="28" height="28" className="rounded-circle" src="assets/img/profiles/avatar-03.jpg" alt=""/> 
                                                <h2>Mark Hay Smith</h2>
                                            </td>
                                            <td>23</td>
                                            <td>06 January 2002</td>
                                            <td>Jaundice</td>
                                            <td><button className="custom-badge status-pink">Emergency</button></td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></Link>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <Link className="dropdown-item" to="edit-patient.html"><i className="fa-solid fa-pen-to-square m-r-5"></i> Edit</Link>
                                                        <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i className="fa fa-trash-alt m-r-5"></i> Delete</Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check check-tables">
                                                    <input className="form-check-input" type="checkbox" value="something"/>
                                                </div>
                                            </td>
                                            <td>R00003</td>
                                            <td className="table-image">
                                                <img width="28" height="28" className="rounded-circle" src="assets/img/profiles/avatar-04.jpg" alt=""/> 
                                                <h2>Cristina Groves</h2>
                                            </td>
                                            <td>25</td>
                                            <td>10 January 2002</td>
                                            <td>Malaria</td>
                                            <td><button className="custom-badge status-gray">Out Patient</button></td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></Link>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <Link className="dropdown-item" to="edit-patient.html"><i className="fa-solid fa-pen-to-square m-r-5"></i> Edit</Link>
                                                        <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i className="fa fa-trash-alt m-r-5"></i> Delete</Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="form-check check-tables">
                                                    <input className="form-check-input" type="checkbox" value="something"/>
                                                </div>
                                            </td>
                                            <td>R00004</td>
                                            <td className="table-image">
                                                <img width="28" height="28" className="rounded-circle" src="assets/img/profiles/avatar-05.jpg" alt=""/> 
                                                <h2>Galaviz Lalema</h2>
                                            </td>
                                            <td>21</td>
                                            <td>09 January 2002</td>
                                            <td>Typhoid</td>
                                            <td><button className="custom-badge status-orange">Non Urgent</button></td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <Link to="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></Link>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <Link className="dropdown-item" to="edit-patient.html"><i className="fa-solid fa-pen-to-square m-r-5"></i> Edit</Link>
                                                        <Link className="dropdown-item" to="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i className="fa fa-trash-alt m-r-5"></i> Delete</Link>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="notification-box">
            <div className="msg-sidebar notifications msg-noti">
                <div className="topnav-dropdown-header">
                    <span>Messages</span>
                </div>
                <div className="drop-scroll msg-list-scroll" id="msg_list">
                    <ul className="list-box">
                        <li>
                            <Link to="chat.html">
                                <div className="list-item">
                                    <div className="list-left">
                                        <span className="avatar">R</span>
                                    </div>
                                    <div className="list-body">
                                        <span className="message-author">Richard Miles </span>
                                        <span className="message-time">12:28 AM</span>
                                        <div className="clearfix"></div>
                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="chat.html">
                                <div className="list-item new-message">
                                    <div className="list-left">
                                        <span className="avatar">J</span>
                                    </div>
                                    <div className="list-body">
                                        <span className="message-author">John Doe</span>
                                        <span className="message-time">1 Aug</span>
                                        <div className="clearfix"></div>
                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="chat.html">
                                <div className="list-item">
                                    <div className="list-left">
                                        <span className="avatar">T</span>
                                    </div>
                                    <div className="list-body">
                                        <span className="message-author"> Tarah Shropshire </span>
                                        <span className="message-time">12:28 AM</span>
                                        <div className="clearfix"></div>
                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="chat.html">
                                <div className="list-item">
                                    <div className="list-left">
                                        <span className="avatar">M</span>
                                    </div>
                                    <div className="list-body">
                                        <span className="message-author">Mike Litorus</span>
                                        <span className="message-time">12:28 AM</span>
                                        <div className="clearfix"></div>
                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                      
                    </ul>
                </div>
                <div className="topnav-dropdown-footer">
                    <Link to="chat.html">See all messages</Link>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="sidebar-overlay" data-reff=""></div></div>
  )
}

export default Home