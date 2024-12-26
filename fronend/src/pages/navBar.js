import React from 'react'
import { Link } from 'react-router-dom'

function navBar() {
  return (
    <div>
      <div className="header">
             <div className="header-left">
                 <Link href="index.html" className="logo">
                     <img src="assets/img/logo.png" width="35" height="35" alt=""/> <span>Clinic</span>
                 </Link>
             </div>
             <Link id="toggle_btn" href="#"><img src="assets/img/icons/bar-icon.svg"  alt=""/></Link>
             <Link id="mobile_btn" className="mobile_btn float-start" href="#sidebar"><img src="assets/img/icons/bar-icon.svg"  alt=""/></Link>
             <div className="top-nav-search mob-view">
                 <form>
                     <input type="text" className="form-control" placeholder="Search here"/>
                     <Link className="btn" ><img src="assets/img/icons/search-normal.svg" alt=""/></Link>
                 </form>
             </div>
             <ul className="nav user-menu float-end">
                 <li className="nav-item dropdown d-none d-md-block">
                     <Link href="#" className="dropdown-toggle nav-Link" data-bs-toggle="dropdown"><img src="assets/img/icons/note-icon-02.svg" alt=""/><span className="pulse"></span> </Link>
                     <div className="dropdown-menu notifications">
                         <div className="topnav-dropdown-header">
                             <span>Notifications</span>
                         </div>
                         <div className="drop-scroll">
                             <ul className="notification-list">
                                 <li className="notification-message">
                                     <Link href="activities.html">
                                         <div className="media">
                                             <span className="avatar">
                                                 <img alt="John Doe" src="assets/img/user.jpg" className="img-fluid"/>
                                             </span>
                                             <div className="media-body">
                                                 <p className="noti-details"><span className="noti-title">John Doe</span> added new task <span className="noti-title">Patient appointment booking</span></p>
                                                 <p className="noti-time"><span className="notification-time">4 mins ago</span></p>
                                             </div>
                                         </div>
                                     </Link>
                                 </li>
                                 <li className="notification-message">
                                     <Link href="activities.html">
                                         <div className="media">
                                             <span className="avatar">V</span>
                                             <div className="media-body">
                                                 <p className="noti-details"><span className="noti-title">Tarah Shropshire</span> changed the task name <span className="noti-title">Appointment booking with payment gateway</span></p>
                                                 <p className="noti-time"><span className="notification-time">6 mins ago</span></p>
                                             </div>
                                         </div>
                                     </Link>
                                 </li>
                                 <li className="notification-message">
                                     <Link href="activities.html">
                                         <div className="media">
                                             <span className="avatar">L</span>
                                             <div className="media-body">
                                                 <p className="noti-details"><span className="noti-title">Misty Tison</span> added <span className="noti-title">Domenic Houston</span> and <span className="noti-title">Claire Mapes</span> to project <span className="noti-title">Doctor available module</span></p>
                                                 <p className="noti-time"><span className="notification-time">8 mins ago</span></p>
                                             </div>
                                         </div>
                                     </Link>
                                 </li>
                                 <li className="notification-message">
                                     <Link href="activities.html">
                                         <div className="media">
                                             <span className="avatar">G</span>
                                             <div className="media-body">
                                                 <p className="noti-details"><span className="noti-title">Rolland Webber</span> completed task <span className="noti-title">Patient and Doctor video conferencing</span></p>
                                                 <p className="noti-time"><span className="notification-time">12 mins ago</span></p>
                                             </div>
                                         </div>
                                     </Link>
                                 </li>
                                 <li className="notification-message">
                                     <Link href="activities.html">
                                         <div className="media">
                                             <span className="avatar">V</span>
                                             <div className="media-body">
                                                 <p className="noti-details"><span className="noti-title">Bernardo Galaviz</span> added new task <span className="noti-title">Private chat module</span></p>
                                                 <p className="noti-time"><span className="notification-time">2 days ago</span></p>
                                             </div>
                                         </div>
                                     </Link>
                                 </li>
                             </ul>
                         </div>
                         <div className="topnav-dropdown-footer">
                             <Link href="activities.html">View all Notifications</Link>
                         </div>
                     </div>
                 </li>
                 <li className="nav-item dropdown d-none d-md-block">
                     <Link href="#" id="open_msg_box" className="hasnotifications nav-Link"><img src="assets/img/icons/note-icon-01.svg" alt=""/><span className="pulse"></span> </Link>
                 </li>
                 <li className="nav-item dropdown has-arrow user-profile-list">
                     <Link href="#" className="dropdown-toggle nav-Link user-Link" data-bs-toggle="dropdown">
                         <div className="user-names">
                             <h5>Liam Michael </h5>
                             <span>Admin</span>
                         </div>
                         <span className="user-img">
                             <img  src="assets/img/user-06.jpg"  alt="Admin"/>
                         </span>
                     </Link>
                     <div className="dropdown-menu">
                         <Link className="dropdown-item" href="profile.html">My Profile</Link>
                         <Link className="dropdown-item" href="edit-profile.html">Edit Profile</Link>
                         <Link className="dropdown-item" href="settings.html">Settings</Link>
                         <Link className="dropdown-item" href="login.html">Logout</Link>
                     </div>
                 </li>
                 <li className="nav-item ">
                     <Link href="settings.html"  className="hasnotifications nav-Link"><img src="assets/img/icons/setting-icon-01.svg" alt=""/> </Link>
                 </li>
             </ul>
             <div className="dropdown mobile-user-menu float-end">
                 <Link href="#" className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa-solid fa-ellipsis-vertical"></i></Link>
                 <div className="dropdown-menu dropdown-menu-end">
                     <Link className="dropdown-item" href="profile.html">My Profile</Link>
                     <Link className="dropdown-item" href="edit-profile.html">Edit Profile</Link>
                     <Link className="dropdown-item" href="settings.html">Settings</Link>
                     <Link className="dropdown-item" href="login.html">Logout</Link>
                 </div>
             </div>
         </div>
         <div className="sidebar" id="sidebar">
             <div className="sidebar-inner slimscroll">
                 <div id="sidebar-menu" className="sidebar-menu">
                     <ul>
                         <li className="menu-title">Main</li>
                         <li className="submenu">
                             <Link href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-01.svg" alt=""/></span> <span> Dashboard </span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link className="active" href="index.html">Admin Dashboard</Link></li>
                                 <li><Link href="doctor-dashboard.html">Doctor Dashboard</Link></li>
                                 <li><Link href="patient-dashboard.html">Patient Dashboard</Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-02.svg" alt=""/></span> <span> Doctors </span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="doctors.html">Doctor List</Link></li>
                                 <li><Link href="add-doctor.html">Add Doctor</Link></li>
                                 <li><Link href="edit-doctor.html">Edit Doctor</Link></li>
                                 <li><Link href="doctor-profile.html">Doctor Profile</Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-03.svg" alt=""/></span> <span>Patients </span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="patients.html">Patients List</Link></li>
                                 <li><Link href="add-patient.html">Add Patients</Link></li>
                                 <li><Link href="edit-patient.html">Edit Patients</Link></li>
                                 <li><Link href="patient-profile.html">Patients Profile</Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-08.svg" alt=""/></span> <span> Staff </span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="staff-list.html">Staff List</Link></li>
                                 <li><Link href="add-staff.html">Add Staff</Link></li>
                                 <li><Link href="staff-profile.html">Staff Profile</Link></li>
                                 <li><Link href="staff-leave.html">Leaves</Link></li>
                                 <li><Link href="staff-holiday.html">Holidays</Link></li>
                                 <li><Link href="staff-attendance.html">Attendance</Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-04.svg" alt=""/></span> <span> Appointments </span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="appointments.html">Appointment List</Link></li>
                                 <li><Link href="add-appointment.html">Book Appointment</Link></li>
                                 <li><Link href="edit-appointment.html">Edit Appointment</Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-05.svg" alt=""/></span> <span> Doctor Schedule </span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="schedule.html">Schedule List</Link></li>
                                 <li><Link href="add-schedule.html">Add Schedule</Link></li>
                                 <li><Link href="edit-schedule.html">Edit Schedule</Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-06.svg" alt=""/></span> <span> Departments </span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="departments.html">Department List</Link></li>
                                 <li><Link href="add-department.html">Add Department</Link></li>
                                 <li><Link href="edit-department.html">Edit Department</Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-07.svg" alt=""/></span> <span> Accounts </span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="invoices.html">Invoices</Link></li>
                                 <li><Link href="payments.html">Payments</Link></li>
                                 <li><Link href="expenses.html">Expenses</Link></li>
                                 <li><Link href="taxes.html">Taxes</Link></li>
                                 <li><Link href="provident-fund.html">Provident Fund</Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-09.svg" alt=""/></span> <span> Payroll </span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="salary.html"> Employee Salary </Link></li>
                                 <li><Link href="salary-view.html"> Payslip </Link></li>
                             </ul>
                         </li>
                         <li>
                             <Link href="chat.html"><span className="menu-side"><img src="assets/img/icons/menu-icon-10.svg" alt=""/></span> <span>Chat</span></Link>
                         </li>
                         <li className="submenu">
                             <Link href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-11.svg" alt=""/></span> <span> Calls</span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="voice-call.html">Voice Call</Link></li>
                                 <li><Link href="video-call.html">Video Call</Link></li>
                                 <li><Link href="incoming-call.html">Incoming Call</Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-12.svg" alt=""/></span> <span> Email</span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="compose.html">Compose Mail</Link></li>
                                 <li><Link href="inbox.html">Inbox</Link></li>
                                 <li><Link href="mail-view.html">Mail View</Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-13.svg" alt=""/></span> <span> Blog</span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="blog.html">Blog</Link></li>
                                 <li><Link href="blog-details.html">Blog View</Link></li>
                                 <li><Link href="add-blog.html">Add Blog</Link></li>
                                 <li><Link href="edit-blog.html">Edit Blog</Link></li>
                             </ul>
                         </li>
                         <li>
                             <Link href="assets.html"><i className="fa fa-cube"></i> <span>Assets</span></Link>
                         </li>
                         <li>
                             <Link href="activities.html"><span className="menu-side"><img src="assets/img/icons/menu-icon-14.svg" alt=""/></span> <span>Activities</span></Link>
                         </li>
                         <li className="submenu">
                             <Link href="#"><i className="fa fa-flag"></i> <span> Reports </span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="expense-reports.html"> Expense Report </Link></li>
                                 <li><Link href="invoice-reports.html"> Invoice Report </Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><span className="menu-side"><img src="assets/img/icons/menu-icon-15.svg" alt=""/></span> <span> Invoice </span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="invoices-list.html"> Invoices List </Link></li>
                                 <li><Link href="invoices-grid.html"> Invoices Grid</Link></li>
                                 <li><Link href="add-invoice.html"> Add Invoices</Link></li>
                                 <li><Link href="edit-invoices.html"> Edit Invoices</Link></li>
                                 <li><Link href="view-invoice.html"> Invoices Details</Link></li>
                                 <li><Link href="invoices-settings.html"> Invoices Settings</Link></li>
                             </ul>
                         </li>
                         
                         <li>
                             <Link href="settings.html"><span className="menu-side"><img src="assets/img/icons/menu-icon-16.svg" alt=""/></span> <span>Settings</span></Link>
                         </li>
                         <li className="menu-title">UI Interface</li>
                         <li className="submenu">
                             <Link href="#"><i className="fa fa-laptop"></i> <span> Base UI</span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="alerts.html">Alerts</Link></li>                                    
                                 <li><Link href="accordions.html">Accordions</Link></li>
                                 <li><Link href="avatar.html">Avatar</Link></li> 
                                 <li><Link href="badges.html">Badges</Link></li>
                                 <li><Link href="buttons.html">Buttons</Link></li>   
                                 <li><Link href="buttongroup.html">Button Group</Link></li>                                  
                                 <li><Link href="breadcrumbs.html">Breadcrumb</Link></li>
                                 <li><Link href="cards.html">Cards</Link></li>
                                 <li><Link href="carousel.html">Carousel</Link></li>                                   
                                 <li><Link href="dropdowns.html">Dropdowns</Link></li>
                                 <li><Link href="grid.html">Grid</Link></li>
                                 <li><Link href="images.html">Images</Link></li>
                                 <li><Link href="lightbox.html">Lightbox</Link></li>
                                 <li><Link href="media.html">Media</Link></li>                              
                                 <li><Link href="modal.html">Modals</Link></li>
                                 <li><Link href="offcanvas.html">Offcanvas</Link></li>
                                 <li><Link href="pagination.html">Pagination</Link></li>
                                 <li><Link href="popover.html">Popover</Link></li>                                    
                                 <li><Link href="progress.html">Progress Bars</Link></li>
                                 <li><Link href="placeholders.html">Placeholders</Link></li>
                                 <li><Link href="rangeslider.html">Range Slider</Link></li>                                    
                                 <li><Link href="spinners.html">Spinner</Link></li>
                                 <li><Link href="sweetalerts.html">Sweet Alerts</Link></li>
                                 <li><Link href="tab.html">Tabs</Link></li>
                                 <li><Link href="toastr.html">Toasts</Link></li>
                                 <li><Link href="tooltip.html">Tooltip</Link></li>
                                 <li><Link href="typography.html">Typography</Link></li>
                                 <li><Link href="video.html">Video</Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><i className="fa fa-box"></i> <span> Elements</span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="ribbon.html">Ribbon</Link></li>
                                 <li><Link href="clipboard.html">Clipboard</Link></li>
                                 <li><Link href="drag-drop.html">Drag & Drop</Link></li>
                                 <li><Link href="rating.html">Rating</Link></li>
                                 <li><Link href="text-editor.html">Text Editor</Link></li>
                                 <li><Link href="counter.html">Counter</Link></li>
                                 <li><Link href="scrollbar.html">Scrollbar</Link></li>
                                 <li><Link href="notification.html">Notification</Link></li>
                                 <li><Link href="stickynote.html">Sticky Note</Link></li>
                                 <li><Link href="timeline.html">Timeline</Link></li>
                                 <li><Link href="horizontal-timeline.html">Horizontal Timeline</Link></li>
                                 <li><Link href="form-wizard.html">Form Wizard</Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><i className="fa fa-chart-simple"></i> <span>Charts</span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="chart-apex.html">Apex Charts</Link></li>
                                 <li><Link href="chart-js.html">Chart Js</Link></li>
                                 <li><Link href="chart-morris.html">Morris Charts</Link></li>
                                 <li><Link href="chart-flot.html">Flot Charts</Link></li>
                                 <li><Link href="chart-peity.html">Peity Charts</Link></li>
                                 <li><Link href="chart-c3.html">C3 Charts</Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><i className="fa fa-award"></i> <span>Icons</span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="icon-fontawesome.html">Fontawesome Icons</Link></li>
                                 <li><Link href="icon-feather.html">Feather Icons</Link></li>
                                 <li><Link href="icon-ionic.html">Ionic Icons</Link></li>
                                 <li><Link href="icon-material.html">Material Icons</Link></li>
                                 <li><Link href="icon-pe7.html">Pe7 Icons</Link></li>
                                 <li><Link href="icon-simpleline.html">Simpleline Icons</Link></li>
                                 <li><Link href="icon-themify.html">Themify Icons</Link></li>
                                 <li><Link href="icon-weather.html">Weather Icons</Link></li>
                                 <li><Link href="icon-typicon.html">Typicon Icons</Link></li>
                                 <li><Link href="icon-flag.html">Flag Icons</Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><i className="fa fa-edit"></i> <span> Forms</span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="form-basic-inputs.html">Basic Inputs</Link></li>
                                 <li><Link href="form-input-groups.html">Input Groups</Link></li>
                                 <li><Link href="form-horizontal.html">Horizontal Form</Link></li>
                                 <li><Link href="form-vertical.html">Vertical Form</Link></li>
                                 <li><Link href="form-mask.html">Form Mask </Link></li>
                                 <li><Link href="form-validation.html">Form Validation </Link></li>
                                 <li><Link href="form-select2.html">Form Select2 </Link></li>
                                 <li><Link href="form-fileupload.html">File Upload </Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><i className="fa fa-table"></i> <span> Tables</span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="tables-basic.html">Basic Tables</Link></li>
                                 <li><Link href="tables-datatables.html">Data Table</Link></li>
                             </ul>
                         </li>
                         <li>
                             <Link href="calendar.html"><i className="fa fa-calendar"></i> <span>Calendar</span></Link>
                         </li>
                         <li className="menu-title">Extras</li>
                         <li className="submenu">
                             <Link href="#"><i className="fa fa-columns"></i> <span>Pages</span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li><Link href="login.html"> Login </Link></li>
                                 <li><Link href="register.html"> Register </Link></li>
                                 <li><Link href="forgot-password.html"> Forgot Password </Link></li>
                                 <li><Link href="change-password2.html"> Change Password </Link></li>
                                 <li><Link href="lock-screen.html"> Lock Screen </Link></li>
                                 <li><Link href="profile.html"> Profile </Link></li>
                                 <li><Link href="gallery.html"> Gallery </Link></li>
                                 <li><Link href="error-404.html">404 Error </Link></li>
                                 <li><Link href="error-500.html">500 Error </Link></li>
                                 <li><Link href="blank-page.html"> Blank Page </Link></li>
                             </ul>
                         </li>
                         <li className="submenu">
                             <Link href="#"><i className="fa fa-share-alt"></i> <span>Multi Level</span> <span className="menu-arrow"></span></Link>
                             <ul style={{display: 'none'}}>
                                 <li className="submenu">
                                     <Link href="#"><span>Level 1</span> <span className="menu-arrow"></span></Link>
                                     <ul style={{display: 'none'}}>
                                         <li><Link href="#"><span>Level 2</span></Link></li>
                                         <li className="submenu">
                                             <Link href="#"> <span> Level 2</span> <span className="menu-arrow"></span></Link>
                                             <ul style={{display: 'none'}}>
                                                 <li><Link href="#">Level 3</Link></li>
                                                 <li><Link href="#">Level 3</Link></li>
                                             </ul>
                                         </li>
                                         <li><Link href="#"><span>Level 2</span></Link></li>
                                     </ul>
                                 </li>
                                 <li>
                                     <Link href="#"><span>Level 1</span></Link>
                                 </li>
                             </ul>
                         </li>
                     </ul>
                     <div className="logout-btn">
                         <Link href="login.html"><span className="menu-side"><img src="assets/img/icons/logout.svg" alt=""/></span> <span>Logout</span></Link>
                     </div>
                 </div>
             </div>
         </div>
         
    </div>
  )
}

export default navBar