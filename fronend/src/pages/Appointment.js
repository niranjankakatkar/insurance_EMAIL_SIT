import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Appointment() {
    const [appointment,setAppointmentList]=useState([]);
    useEffect(()=>{
        const getAppointmentList=async()=>{
            const res=await fetch('http://localhost:8081/getallappointment');
            const getData=await res.json();
            setAppointmentList(getData);
        }
        getAppointmentList();
    })

  return (
    <div>
         <div class="main-wrapper">
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
         
        <div class="page-wrapper">
            <div class="content">
			
				
				<div class="page-header">
					<div class="row">
						<div class="col-sm-12">
							<ul class="breadcrumb">
								<li class="breadcrumb-item"><a href="appointments.html">Appointment </a></li>
								<li class="breadcrumb-item"><i class="feather-chevron-right"></i></li>
								<li class="breadcrumb-item active">Appointment List</li>
							</ul>
						</div>
					</div>
				</div>
				
				
				<div class="row">
					<div class="col-sm-12">
					
						<div class="card card-table show-entire">
							<div class="card-body">
							
								
								<div class="page-table-header mb-2">
									<div class="row align-items-center">
										<div class="col">
											<div class="doctor-table-blk">
												<h3>Appointment</h3>
												<div class="doctor-search-blk">
													<div class="top-nav-search table-search-blk">
														<form>
															<input type="text" class="form-control" placeholder="Search here"/>
															<a class="btn"><img src="assets/img/icons/search-normal.svg" alt=""/></a>
														</form>
													</div>
													<div class="add-group">
														<a href="add-appointment.html" class="btn btn-primary add-pluss ms-2"><img src="assets/img/icons/plus.svg" alt=""/></a>
														<a href="javascript:;" class="btn btn-primary doctor-refresh ms-2"><img src="assets/img/icons/re-fresh.svg" alt=""/></a>
													</div>
												</div>
											</div>
										</div>
										<div class="col-auto text-end float-end ms-auto download-grp">
											<a href="javascript:;" class=" me-2"><img src="assets/img/icons/pdf-icon-01.svg" alt=""/></a>
											<a href="javascript:;" class=" me-2"><img src="assets/img/icons/pdf-icon-02.svg" alt=""/></a>
											<a href="javascript:;" class=" me-2"><img src="assets/img/icons/pdf-icon-03.svg" alt=""/></a>
											<a href="javascript:;" ><img src="assets/img/icons/pdf-icon-04.svg" alt=""/></a>
											
										</div>
									</div>
								</div>
								
								
								<div class="table-responsive">
									<table class="table border-0 custom-table comman-table datatable mb-0">
										<thead>
											<tr>
												<th>
													<div class="form-check check-tables">
														<input class="form-check-input" type="checkbox" value="something"/>
													</div>
												</th>
												<th>Name</th>
                                                <th>Appointment No</th>
												<th>Treatment</th>
												<th>Mobile</th>
												<th >Date</th>
												<th >Time</th>
												<th ></th>
											</tr>
										</thead>
										<tbody>
                                            {
                                                appointment.map((getcate)=>(

                                                
											<tr key={getcate.id}>
												<td>
													<div class="form-check check-tables">
														<input class="form-check-input" type="checkbox" value="something"/>
													</div>
												</td>
												<td class="profile-image"><img width="28" height="28" src="assets/img/profiles/avatar-01.jpg" class="rounded-circle m-r-5" alt=""/> {getcate.name}</td>
												<td>{getcate.appointment_no}</td>
                                                <td>{getcate.treatment}</td>
												<td>{getcate.mobileno}</td>
												<td>{getcate.date_}</td>
												<td>{getcate.time_}</td>
												<td class="text-end">
													<div class="dropdown dropdown-action">
														<a href="#" class="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
														<div class="dropdown-menu dropdown-menu-end">
															<a class="dropdown-item" href="edit-appointment.html"><i class="fa-solid fa-pen-to-square m-r-5"></i> Edit</a>
															<a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_patient"><i class="fa fa-trash-alt m-r-5"></i> Delete</a>
														</div>
													</div>
												</td>
											</tr>
                                            ))
                                            }
										</tbody>
									</table>
								</div>
							</div>
						</div>							
					</div>					
				</div>
            </div>
            <div class="notification-box">
                <div class="msg-sidebar notifications msg-noti">
                    <div class="topnav-dropdown-header">
                        <span>Messages</span>
                    </div>
                    <div class="drop-scroll msg-list-scroll" id="msg_list">
                        <ul class="list-box">
                            <li>
                                <a href="chat.html">
                                    <div class="list-item">
                                        <div class="list-left">
                                            <span class="avatar">R</span>
                                        </div>
                                        <div class="list-body">
                                            <span class="message-author">Richard Miles </span>
                                            <span class="message-time">12:28 AM</span>
                                            <div class="clearfix"></div>
                                            <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="chat.html">
                                    <div class="list-item new-message">
                                        <div class="list-left">
                                            <span class="avatar">J</span>
                                        </div>
                                        <div class="list-body">
                                            <span class="message-author">John Doe</span>
                                            <span class="message-time">1 Aug</span>
                                            <div class="clearfix"></div>
                                            <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="chat.html">
                                    <div class="list-item">
                                        <div class="list-left">
                                            <span class="avatar">T</span>
                                        </div>
                                        <div class="list-body">
                                            <span class="message-author"> Tarah Shropshire </span>
                                            <span class="message-time">12:28 AM</span>
                                            <div class="clearfix"></div>
                                            <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="chat.html">
                                    <div class="list-item">
                                        <div class="list-left">
                                            <span class="avatar">M</span>
                                        </div>
                                        <div class="list-body">
                                            <span class="message-author">Mike Litorus</span>
                                            <span class="message-time">12:28 AM</span>
                                            <div class="clearfix"></div>
                                            <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="chat.html">
                                    <div class="list-item">
                                        <div class="list-left">
                                            <span class="avatar">C</span>
                                        </div>
                                        <div class="list-body">
                                            <span class="message-author"> Catherine Manseau </span>
                                            <span class="message-time">12:28 AM</span>
                                            <div class="clearfix"></div>
                                            <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="chat.html">
                                    <div class="list-item">
                                        <div class="list-left">
                                            <span class="avatar">D</span>
                                        </div>
                                        <div class="list-body">
                                            <span class="message-author"> Domenic Houston </span>
                                            <span class="message-time">12:28 AM</span>
                                            <div class="clearfix"></div>
                                            <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="chat.html">
                                    <div class="list-item">
                                        <div class="list-left">
                                            <span class="avatar">B</span>
                                        </div>
                                        <div class="list-body">
                                            <span class="message-author"> Buster Wigton </span>
                                            <span class="message-time">12:28 AM</span>
                                            <div class="clearfix"></div>
                                            <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="chat.html">
                                    <div class="list-item">
                                        <div class="list-left">
                                            <span class="avatar">R</span>
                                        </div>
                                        <div class="list-body">
                                            <span class="message-author"> Rolland Webber </span>
                                            <span class="message-time">12:28 AM</span>
                                            <div class="clearfix"></div>
                                            <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="chat.html">
                                    <div class="list-item">
                                        <div class="list-left">
                                            <span class="avatar">C</span>
                                        </div>
                                        <div class="list-body">
                                            <span class="message-author"> Claire Mapes </span>
                                            <span class="message-time">12:28 AM</span>
                                            <div class="clearfix"></div>
                                            <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="chat.html">
                                    <div class="list-item">
                                        <div class="list-left">
                                            <span class="avatar">M</span>
                                        </div>
                                        <div class="list-body">
                                            <span class="message-author">Melita Faucher</span>
                                            <span class="message-time">12:28 AM</span>
                                            <div class="clearfix"></div>
                                            <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="chat.html">
                                    <div class="list-item">
                                        <div class="list-left">
                                            <span class="avatar">J</span>
                                        </div>
                                        <div class="list-body">
                                            <span class="message-author">Jeffery Lalor</span>
                                            <span class="message-time">12:28 AM</span>
                                            <div class="clearfix"></div>
                                            <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="chat.html">
                                    <div class="list-item">
                                        <div class="list-left">
                                            <span class="avatar">L</span>
                                        </div>
                                        <div class="list-body">
                                            <span class="message-author">Loren Gatlin</span>
                                            <span class="message-time">12:28 AM</span>
                                            <div class="clearfix"></div>
                                            <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="chat.html">
                                    <div class="list-item">
                                        <div class="list-left">
                                            <span class="avatar">T</span>
                                        </div>
                                        <div class="list-body">
                                            <span class="message-author">Tarah Shropshire</span>
                                            <span class="message-time">12:28 AM</span>
                                            <div class="clearfix"></div>
                                            <span class="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="topnav-dropdown-footer">
                        <a href="chat.html">See all messages</a>
                    </div>
                </div>
            </div>
        </div>
		<div id="delete_patient" class="modal fade delete-modal" role="dialog">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-body text-center">
						<img src="assets/img/sent.png" alt="" width="50" height="46"/>
						<h3>Are you sure want to delete this ?</h3>
						<div class="m-t-20"> <a href="#" class="btn btn-white" data-bs-dismiss="modal">Close</a>
							<button type="submit" class="btn btn-danger">Delete</button>
						</div>
					</div>
				</div>
			</div>
			
		</div>
    </div>
    </div>
  )
}

export default Appointment