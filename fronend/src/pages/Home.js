import React from 'react'

function Home() {
  return (
    <div>  <div className="main-wrapper">
    <div className="header">
        <div className="header-left">
            <a href="index.html" className="logo">
                <img src="assets/img/logo.png" width="35" height="35" alt=""/> <span>Pre Clinic</span>
            </a>
        </div>
        <a id="toggle_btn" href="javascript:void(0);"><img src="assets/img/icons/bar-icon.svg"  alt=""/></a>
        <a id="mobile_btn" className="mobile_btn float-start" href="#sidebar"><img src="assets/img/icons/bar-icon.svg"  alt=""/></a>
        <div className="top-nav-search mob-view">
            <form>
                <input type="text" className="form-control" placeholder="Search here"/>
                <a className="btn" ><img src="assets/img/icons/search-normal.svg" alt=""/></a>
            </form>
        </div>
        <ul className="nav user-menu float-end">
            <li className="nav-item dropdown d-none d-md-block">
                <a href="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown"><img src="assets/img/icons/note-icon-02.svg" alt=""/><span className="pulse"></span> </a>
                <div className="dropdown-menu notifications">
                    <div className="topnav-dropdown-header">
                        <span>Notifications</span>
                    </div>
                    <div className="drop-scroll">
                        <ul className="notification-list">
                            <li className="notification-message">
                                <a href="activities.html">
                                    <div className="media">
                                        <span className="avatar">
                                            <img alt="John Doe" src="assets/img/user.jpg" className="img-fluid"/>
                                        </span>
                                        <div className="media-body">
                                            <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
                                            <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="notification-message">
                                <a href="activities.html">
                                    <div className="media">
                                        <span className="avatar">V</span>
                                        <div className="media-body">
                                            <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
                                            <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="notification-message">
                                <a href="activities.html">
                                    <div className="media">
                                        <span className="avatar">L</span>
                                        <div className="media-body">
                                            <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                                            <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="notification-message">
                                <a href="activities.html">
                                    <div className="media">
                                        <span className="avatar">G</span>
                                        <div className="media-body">
                                            <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
                                            <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="notification-message">
                                <a href="activities.html">
                                    <div className="media">
                                        <span className="avatar">V</span>
                                        <div className="media-body">
                                            <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
                                            <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="topnav-dropdown-footer">
                        <a href="activities.html">View all Notifications</a>
                    </div>
                </div>
            </li>
            <li className="nav-item dropdown d-none d-md-block">
                <a href="javascript:void(0);" id="open_msg_box" className="hasnotifications nav-link"><img src="assets/img/icons/note-icon-01.svg" alt=""/><span className="pulse"></span> </a>
            </li>
            <li className="nav-item dropdown has-arrow user-profile-list">
                <a href="#" className="dropdown-toggle nav-link user-link" data-bs-toggle="dropdown">
                    <div className="user-names">
                        <h5>Liam Michael </h5>
                        <span>Admin</span>
                    </div>
                    <span className="user-img">
                        <img  src="assets/img/user-06.jpg"  alt="Admin"/>
                    </span>
                </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="profile.html">My Profile</a>
                    <a className="dropdown-item" href="edit-profile.html">Edit Profile</a>
                    <a className="dropdown-item" href="settings.html">Settings</a>
                    <a className="dropdown-item" href="login.html">Logout</a>
                </div>
            </li>
            <li className="nav-item ">
                <a href="settings.html"  className="hasnotifications nav-link"><img src="assets/img/icons/setting-icon-01.svg" alt=""/> </a>
            </li>
        </ul>
        <div className="dropdown mobile-user-menu float-end">
            <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis-vertical"></i></a>
            <div className="dropdown-menu dropdown-menu-end">
                <a className="dropdown-item" href="profile.html">My Profile</a>
                <a className="dropdown-item" href="edit-profile.html">Edit Profile</a>
                <a className="dropdown-item" href="settings.html">Settings</a>
                <a className="dropdown-item" href="login.html">Logout</a>
            </div>
        </div>
    </div>
    <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
                <ul>
                    <li className="menu-title">Main</li>
                    <li className="submenu">
                        <a href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-01.svg" alt=""/></span> <span> Dashboard </span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a className="active" href="index.html">Admin Dashboard</a></li>
                            <li><a href="doctor-dashboard.html">Doctor Dashboard</a></li>
                            <li><a href="patient-dashboard.html">Patient Dashboard</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-02.svg" alt=""/></span> <span> Doctors </span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="doctors.html">Doctor List</a></li>
                            <li><a href="add-doctor.html">Add Doctor</a></li>
                            <li><a href="edit-doctor.html">Edit Doctor</a></li>
                            <li><a href="doctor-profile.html">Doctor Profile</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-03.svg" alt=""/></span> <span>Patients </span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="patients.html">Patients List</a></li>
                            <li><a href="add-patient.html">Add Patients</a></li>
                            <li><a href="edit-patient.html">Edit Patients</a></li>
                            <li><a href="patient-profile.html">Patients Profile</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-08.svg" alt=""/></span> <span> Staff </span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="staff-list.html">Staff List</a></li>
                            <li><a href="add-staff.html">Add Staff</a></li>
                            <li><a href="staff-profile.html">Staff Profile</a></li>
                            <li><a href="staff-leave.html">Leaves</a></li>
                            <li><a href="staff-holiday.html">Holidays</a></li>
                            <li><a href="staff-attendance.html">Attendance</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-04.svg" alt=""/></span> <span> Appointments </span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="appointments.html">Appointment List</a></li>
                            <li><a href="add-appointment.html">Book Appointment</a></li>
                            <li><a href="edit-appointment.html">Edit Appointment</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-05.svg" alt=""/></span> <span> Doctor Schedule </span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="schedule.html">Schedule List</a></li>
                            <li><a href="add-schedule.html">Add Schedule</a></li>
                            <li><a href="edit-schedule.html">Edit Schedule</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-06.svg" alt=""/></span> <span> Departments </span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="departments.html">Department List</a></li>
                            <li><a href="add-department.html">Add Department</a></li>
                            <li><a href="edit-department.html">Edit Department</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-07.svg" alt=""/></span> <span> Accounts </span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="invoices.html">Invoices</a></li>
                            <li><a href="payments.html">Payments</a></li>
                            <li><a href="expenses.html">Expenses</a></li>
                            <li><a href="taxes.html">Taxes</a></li>
                            <li><a href="provident-fund.html">Provident Fund</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-09.svg" alt=""/></span> <span> Payroll </span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="salary.html"> Employee Salary </a></li>
                            <li><a href="salary-view.html"> Payslip </a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="chat.html"><span className="menu-side"><img src="assets/img/icons/menu-icon-10.svg" alt=""/></span> <span>Chat</span></a>
                    </li>
                    <li className="submenu">
                        <a href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-11.svg" alt=""/></span> <span> Calls</span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="voice-call.html">Voice Call</a></li>
                            <li><a href="video-call.html">Video Call</a></li>
                            <li><a href="incoming-call.html">Incoming Call</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-12.svg" alt=""/></span> <span> Email</span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="compose.html">Compose Mail</a></li>
                            <li><a href="inbox.html">Inbox</a></li>
                            <li><a href="mail-view.html">Mail View</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-13.svg" alt=""/></span> <span> Blog</span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-details.html">Blog View</a></li>
                            <li><a href="add-blog.html">Add Blog</a></li>
                            <li><a href="edit-blog.html">Edit Blog</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="assets.html"><i className="fa fa-cube"></i> <span>Assets</span></a>
                    </li>
                    <li>
                        <a href="activities.html"><span className="menu-side"><img src="assets/img/icons/menu-icon-14.svg" alt=""/></span> <span>Activities</span></a>
                    </li>
                    <li className="submenu">
                        <a href="#"><i className="fa fa-flag"></i> <span> Reports </span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="expense-reports.html"> Expense Report </a></li>
                            <li><a href="invoice-reports.html"> Invoice Report </a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-15.svg" alt=""/></span> <span> Invoice </span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="invoices-list.html"> Invoices List </a></li>
                            <li><a href="invoices-grid.html"> Invoices Grid</a></li>
                            <li><a href="add-invoice.html"> Add Invoices</a></li>
                            <li><a href="edit-invoices.html"> Edit Invoices</a></li>
                            <li><a href="view-invoice.html"> Invoices Details</a></li>
                            <li><a href="invoices-settings.html"> Invoices Settings</a></li>
                        </ul>
                    </li>
                    
                    <li>
                        <a href="settings.html"><span className="menu-side"><img src="assets/img/icons/menu-icon-16.svg" alt=""/></span> <span>Settings</span></a>
                    </li>
                    <li className="menu-title">UI Interface</li>
                    <li className="submenu">
                        <a href="#"><i className="fa fa-laptop"></i> <span> Base UI</span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="alerts.html">Alerts</a></li>                                    
                            <li><a href="accordions.html">Accordions</a></li>
                            <li><a href="avatar.html">Avatar</a></li> 
                            <li><a href="badges.html">Badges</a></li>
                            <li><a href="buttons.html">Buttons</a></li>   
                            <li><a href="buttongroup.html">Button Group</a></li>                                  
                            <li><a href="breadcrumbs.html">Breadcrumb</a></li>
                            <li><a href="cards.html">Cards</a></li>
                            <li><a href="carousel.html">Carousel</a></li>                                   
                            <li><a href="dropdowns.html">Dropdowns</a></li>
                            <li><a href="grid.html">Grid</a></li>
                            <li><a href="images.html">Images</a></li>
                            <li><a href="lightbox.html">Lightbox</a></li>
                            <li><a href="media.html">Media</a></li>                              
                            <li><a href="modal.html">Modals</a></li>
                            <li><a href="offcanvas.html">Offcanvas</a></li>
                            <li><a href="pagination.html">Pagination</a></li>
                            <li><a href="popover.html">Popover</a></li>                                    
                            <li><a href="progress.html">Progress Bars</a></li>
                            <li><a href="placeholders.html">Placeholders</a></li>
                            <li><a href="rangeslider.html">Range Slider</a></li>                                    
                            <li><a href="spinners.html">Spinner</a></li>
                            <li><a href="sweetalerts.html">Sweet Alerts</a></li>
                            <li><a href="tab.html">Tabs</a></li>
                            <li><a href="toastr.html">Toasts</a></li>
                            <li><a href="tooltip.html">Tooltip</a></li>
                            <li><a href="typography.html">Typography</a></li>
                            <li><a href="video.html">Video</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><i className="fa fa-box"></i> <span> Elements</span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="ribbon.html">Ribbon</a></li>
                            <li><a href="clipboard.html">Clipboard</a></li>
                            <li><a href="drag-drop.html">Drag & Drop</a></li>
                            <li><a href="rating.html">Rating</a></li>
                            <li><a href="text-editor.html">Text Editor</a></li>
                            <li><a href="counter.html">Counter</a></li>
                            <li><a href="scrollbar.html">Scrollbar</a></li>
                            <li><a href="notification.html">Notification</a></li>
                            <li><a href="stickynote.html">Sticky Note</a></li>
                            <li><a href="timeline.html">Timeline</a></li>
                            <li><a href="horizontal-timeline.html">Horizontal Timeline</a></li>
                            <li><a href="form-wizard.html">Form Wizard</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><i className="fa fa-chart-simple"></i> <span>Charts</span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="chart-apex.html">Apex Charts</a></li>
                            <li><a href="chart-js.html">Chart Js</a></li>
                            <li><a href="chart-morris.html">Morris Charts</a></li>
                            <li><a href="chart-flot.html">Flot Charts</a></li>
                            <li><a href="chart-peity.html">Peity Charts</a></li>
                            <li><a href="chart-c3.html">C3 Charts</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><i className="fa fa-award"></i> <span>Icons</span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="icon-fontawesome.html">Fontawesome Icons</a></li>
                            <li><a href="icon-feather.html">Feather Icons</a></li>
                            <li><a href="icon-ionic.html">Ionic Icons</a></li>
                            <li><a href="icon-material.html">Material Icons</a></li>
                            <li><a href="icon-pe7.html">Pe7 Icons</a></li>
                            <li><a href="icon-simpleline.html">Simpleline Icons</a></li>
                            <li><a href="icon-themify.html">Themify Icons</a></li>
                            <li><a href="icon-weather.html">Weather Icons</a></li>
                            <li><a href="icon-typicon.html">Typicon Icons</a></li>
                            <li><a href="icon-flag.html">Flag Icons</a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><i className="fa fa-edit"></i> <span> Forms</span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="form-basic-inputs.html">Basic Inputs</a></li>
                            <li><a href="form-input-groups.html">Input Groups</a></li>
                            <li><a href="form-horizontal.html">Horizontal Form</a></li>
                            <li><a href="form-vertical.html">Vertical Form</a></li>
                            <li><a href="form-mask.html">Form Mask </a></li>
                            <li><a href="form-validation.html">Form Validation </a></li>
                            <li><a href="form-select2.html">Form Select2 </a></li>
                            <li><a href="form-fileupload.html">File Upload </a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="#"><i className="fa fa-table"></i> <span> Tables</span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="tables-basic.html">Basic Tables</a></li>
                            <li><a href="tables-datatables.html">Data Table</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="calendar.html"><i className="fa fa-calendar"></i> <span>Calendar</span></a>
                    </li>
                    <li className="menu-title">Extras</li>
                    <li className="submenu">
                        <a href="#"><i className="fa fa-columns"></i> <span>Pages</span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li><a href="login.html"> Login </a></li>
                            <li><a href="register.html"> Register </a></li>
                            <li><a href="forgot-password.html"> Forgot Password </a></li>
                            <li><a href="change-password2.html"> Change Password </a></li>
                            <li><a href="lock-screen.html"> Lock Screen </a></li>
                            <li><a href="profile.html"> Profile </a></li>
                            <li><a href="gallery.html"> Gallery </a></li>
                            <li><a href="error-404.html">404 Error </a></li>
                            <li><a href="error-500.html">500 Error </a></li>
                            <li><a href="blank-page.html"> Blank Page </a></li>
                        </ul>
                    </li>
                    <li className="submenu">
                        <a href="javascript:void(0);"><i className="fa fa-share-alt"></i> <span>Multi Level</span> <span className="menu-arrow"></span></a>
                        <ul style={{display: 'none'}}>
                            <li className="submenu">
                                <a href="javascript:void(0);"><span>Level 1</span> <span className="menu-arrow"></span></a>
                                <ul style={{display: 'none'}}>
                                    <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                                    <li className="submenu">
                                        <a href="javascript:void(0);"> <span> Level 2</span> <span className="menu-arrow"></span></a>
                                        <ul style={{display: 'none'}}>
                                            <li><a href="javascript:void(0);">Level 3</a></li>
                                            <li><a href="javascript:void(0);">Level 3</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0);"><span>Level 2</span></a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0);"><span>Level 1</span></a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="logout-btn">
                    <a href="login.html"><span className="menu-side"><img src="assets/img/icons/logout.svg" alt=""/></span> <span>Logout</span></a>
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
                            <li className="breadcrumb-item"><a href="index.html">Dashboard </a></li>
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
                            <h2>Good Morning, <span>Daniel Bruk</span></h2>
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
                            <h2><span className="counter-up" >250</span></h2>
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
                            <h2><span className="counter-up" >140</span></h2>
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
                            <h2><span className="counter-up" >56</span></h2>
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
                            <h2>$<span className="counter-up" > 20,250</span></h2>
                            <p><span className="passive-view"><i className="feather-arrow-up-right me-1"></i>30%</span> vs last month</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12 col-lg-6 col-xl-9">
                    <div className="card">
                        <div className="card-body">
                            <div className="chart-title patient-visit">
                                <h4>Patient Visit by Gender</h4>
                                <div >
                                    <ul className="nav chat-user-total">
                                        <li><i className="fa fa-circle current-users" aria-hidden="true"></i>Male 75%</li>
                                        <li><i className="fa fa-circle old-users" aria-hidden="true"></i> Female 25%</li>
                                    </ul>
                                </div>
                                <div className="input-block mb-0">
                                    <select className="form-control select">
                                        <option>2022</option>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                    </select>
                                </div>
                            </div>	
                            <div id="patient-chart"></div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-3 d-flex">
                    <div className="card">
                        <div className="card-body">
                            <div className="chart-title">
                                <h4>Patient by Department</h4>
                            </div>	
                            <div id="donut-chart-dash" className="chart-user-icon">
                                <img src="assets/img/icons/user-icon.svg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-12  col-xl-4">
                    <div className="card top-departments">
                        <div className="card-header">
                            <h4 className="card-title mb-0">Top Departments</h4>
                        </div>
                        <div className="card-body">
                            <div className="activity-top">
                                <div className="activity-boxs comman-flex-center">
                                    <img src="assets/img/icons/dep-icon-01.svg" alt=""/>
                                </div>
                                <div className="departments-list">
                                    <h4>General Physician</h4>
                                    <p>35%</p>
                                </div>
                            </div>
                            <div className="activity-top">
                                <div className="activity-boxs comman-flex-center">
                                    <img src="assets/img/icons/dep-icon-02.svg" alt=""/>
                                </div>
                                <div className="departments-list">
                                    <h4>Dentist</h4>
                                    <p>24%</p>
                                </div>
                            </div>
                            <div className="activity-top">
                                <div className="activity-boxs comman-flex-center">
                                    <img src="assets/img/icons/dep-icon-03.svg" alt=""/>
                                </div>
                                <div className="departments-list">
                                    <h4>ENT</h4>
                                    <p>10%</p>
                                </div>
                            </div>
                            <div className="activity-top">
                                <div className="activity-boxs comman-flex-center">
                                    <img src="assets/img/icons/dep-icon-04.svg" alt=""/>
                                </div>
                                <div className="departments-list">
                                    <h4>Cardiologist</h4>
                                    <p>15%</p>
                                </div>
                            </div>
                            <div className="activity-top mb-0">
                                <div className="activity-boxs comman-flex-center">
                                    <img src="assets/img/icons/dep-icon-05.svg" alt=""/>
                                </div>
                                <div className="departments-list">
                                    <h4>Opthomology</h4>
                                    <p>20%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12  col-xl-8">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title d-inline-block">Upcoming Appointments</h4> <a href="appointments.html" className="patient-views float-end">Show all</a>
                        </div>
                        <div className="card-body p-0 table-dash">
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
                                            <th>Doctor</th>
                                            <th>Time</th>
                                            <th>Disease</th>
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
                                            <td>Andrea Lalema</td>
                                            <td className="table-image appoint-doctor">
                                                <img width="28" height="28" className="rounded-circle" src="assets/img/profiles/avatar-02.jpg" alt=""/> 
                                                <h2>Dr.Jenny Smith</h2>
                                            </td>
                                            <td className="appoint-time"><span>12.05.2022 at </span>7.00 PM</td>
                                            <td><button className="custom-badge status-green ">Fracture</button></td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="edit-appointment.html"><i className="fa-solid fa-pen-to-square m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i className="fa fa-trash-alt m-r-5"></i> Delete</a>
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
                                            <td>Cristina Groves</td>
                                            <td className="table-image appoint-doctor">
                                                <img width="28" height="28" className="rounded-circle" src="assets/img/profiles/avatar-03.jpg" alt=""/> 
                                                <h2>Dr.Angelica Ramos</h2>
                                            </td>
                                            <td className="appoint-time"><span>13.05.2022 at </span>7.00 PM</td>
                                            <td><button className="custom-badge status-green">Fever</button></td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="edit-appointment.html"><i className="fa-solid fa-pen-to-square m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i className="fa fa-trash-alt m-r-5"></i> Delete</a>
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
                                            <td>Bernardo </td>
                                            <td className="table-image appoint-doctor">
                                                <img width="28" height="28" className="rounded-circle" src="assets/img/profiles/avatar-04.jpg" alt=""/> 
                                                <h2>Dr.Martin Doe</h2>
                                            </td>
                                            <td className="appoint-time"><span>14.05.2022 at </span>7.00 PM</td>
                                            <td><button className="custom-badge status-green">Fracture</button></td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="edit-appointment.html"><i className="fa-solid fa-pen-to-square m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i className="fa fa-trash-alt m-r-5"></i> Delete</a>
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
                                            <td>Galaviz Lalema</td>
                                            <td className="table-image appoint-doctor">
                                                <img width="28" height="28" className="rounded-circle" src="assets/img/profiles/avatar-05.jpg" alt=""/> 
                                                <h2>Dr.William Jerk</h2>
                                            </td>
                                            <td className="appoint-time"><span>15.05.2022 at </span>7.00 PM</td>
                                            <td><button className="custom-badge status-green">Fracture</button></td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="edit-appointment.html"><i className="fa-solid fa-pen-to-square m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i className="fa fa-trash-alt m-r-5"></i> Delete</a>
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
                                            <td>R00005</td>
                                            <td>Cristina Groves</td>
                                            <td className="table-image appoint-doctor">
                                                <img width="28" height="28" className="rounded-circle" src="assets/img/profiles/avatar-03.jpg" alt=""/> 
                                                <h2>Dr.Angelica Ramos</h2>
                                            </td>
                                            <td className="appoint-time"><span>16.05.2022 at </span>7.00 PM</td>
                                            <td><button className="custom-badge status-green">Fever</button></td>
                                            <td className="text-end">
                                                <div className="dropdown dropdown-action">
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="edit-appointment.html"><i className="fa-solid fa-pen-to-square m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i className="fa fa-trash-alt m-r-5"></i> Delete</a>
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
            <div className="row">
                <div className="col-12 col-xl-12">
                    <div className="card">
                        <div className="card-header pb-0">
                            <h4 className="card-title d-inline-block">Recent Patients </h4> <a href="patients.html" className="float-end patient-views">Show all</a>
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
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="edit-patient.html"><i className="fa-solid fa-pen-to-square m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i className="fa fa-trash-alt m-r-5"></i> Delete</a>
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
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="edit-patient.html"><i className="fa-solid fa-pen-to-square m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i className="fa fa-trash-alt m-r-5"></i> Delete</a>
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
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="edit-patient.html"><i className="fa-solid fa-pen-to-square m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i className="fa fa-trash-alt m-r-5"></i> Delete</a>
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
                                                    <a href="#" className="action-icon dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-ellipsis-v"></i></a>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <a className="dropdown-item" href="edit-patient.html"><i className="fa-solid fa-pen-to-square m-r-5"></i> Edit</a>
                                                        <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delete_appointment"><i className="fa fa-trash-alt m-r-5"></i> Delete</a>
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
                            <a href="chat.html">
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
                            </a>
                        </li>
                        <li>
                            <a href="chat.html">
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
                            </a>
                        </li>
                        <li>
                            <a href="chat.html">
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
                            </a>
                        </li>
                        <li>
                            <a href="chat.html">
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
                            </a>
                        </li>
                        <li>
                            <a href="chat.html">
                                <div className="list-item">
                                    <div className="list-left">
                                        <span className="avatar">C</span>
                                    </div>
                                    <div className="list-body">
                                        <span className="message-author"> Catherine Manseau </span>
                                        <span className="message-time">12:28 AM</span>
                                        <div className="clearfix"></div>
                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="chat.html">
                                <div className="list-item">
                                    <div className="list-left">
                                        <span className="avatar">D</span>
                                    </div>
                                    <div className="list-body">
                                        <span className="message-author"> Domenic Houston </span>
                                        <span className="message-time">12:28 AM</span>
                                        <div className="clearfix"></div>
                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="chat.html">
                                <div className="list-item">
                                    <div className="list-left">
                                        <span className="avatar">B</span>
                                    </div>
                                    <div className="list-body">
                                        <span className="message-author"> Buster Wigton </span>
                                        <span className="message-time">12:28 AM</span>
                                        <div className="clearfix"></div>
                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="chat.html">
                                <div className="list-item">
                                    <div className="list-left">
                                        <span className="avatar">R</span>
                                    </div>
                                    <div className="list-body">
                                        <span className="message-author"> Rolland Webber </span>
                                        <span className="message-time">12:28 AM</span>
                                        <div className="clearfix"></div>
                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="chat.html">
                                <div className="list-item">
                                    <div className="list-left">
                                        <span className="avatar">C</span>
                                    </div>
                                    <div className="list-body">
                                        <span className="message-author"> Claire Mapes </span>
                                        <span className="message-time">12:28 AM</span>
                                        <div className="clearfix"></div>
                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="chat.html">
                                <div className="list-item">
                                    <div className="list-left">
                                        <span className="avatar">M</span>
                                    </div>
                                    <div className="list-body">
                                        <span className="message-author">Melita Faucher</span>
                                        <span className="message-time">12:28 AM</span>
                                        <div className="clearfix"></div>
                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="chat.html">
                                <div className="list-item">
                                    <div className="list-left">
                                        <span className="avatar">J</span>
                                    </div>
                                    <div className="list-body">
                                        <span className="message-author">Jeffery Lalor</span>
                                        <span className="message-time">12:28 AM</span>
                                        <div className="clearfix"></div>
                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="chat.html">
                                <div className="list-item">
                                    <div className="list-left">
                                        <span className="avatar">L</span>
                                    </div>
                                    <div className="list-body">
                                        <span className="message-author">Loren Gatlin</span>
                                        <span className="message-time">12:28 AM</span>
                                        <div className="clearfix"></div>
                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="chat.html">
                                <div className="list-item">
                                    <div className="list-left">
                                        <span className="avatar">T</span>
                                    </div>
                                    <div className="list-body">
                                        <span className="message-author">Tarah Shropshire</span>
                                        <span className="message-time">12:28 AM</span>
                                        <div className="clearfix"></div>
                                        <span className="message-content">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="topnav-dropdown-footer">
                    <a href="chat.html">See all messages</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="sidebar-overlay" data-reff=""></div></div>
  )
}

export default Home