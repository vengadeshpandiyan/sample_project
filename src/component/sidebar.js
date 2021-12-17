import React from 'react'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import bill from '../images/bill.png'
import download from '../images/download.png'
import folder from '../images/folder.png'
import help from '../images/help.png'
import icon from '../images/icons8-today-96.png'
import logo from '../images/logo.png'
import notification from '../images/notification.png'
import settings from '../images/settings.png'
import speedometer from '../images/speedometer.png'
import timerwhite from '../images/timer_white.png'
import graph from '../images/graph.png'

function Sidebar() {
    return (
        <>
            <div class="col-lg-2" style={{ backgroundColor: "#382f9c", padding: "30px" }}>
                <div class="main_div">
                    <div class="logo">
                        <img src={logo} alt=""/>
                    </div>
                    <div style={{ marginTop: "4rem" }}>
                        <div class="sub_div">
                            <h4 class="left_link left_link1" style={{ cursor: "pointer" }}>
                                <img
                                    src={speedometer}
                                    alt=""
                                    style={{ width: "10%", marginRight: "30px", color: "white" }}
                                />
                                <span style={{ color: "white", fontSize: "15px" }}>
                                    Dashboard
                                </span>
                            </h4>
                            <h4 class="left_link" style={{ cursor: "pointer" }}>
                                <img
                                    alt=""
                                    src={graph}
                                    style={{ width: "10%", marginRight: "30px" }}
                                />
                                <span style={{ color: "lightgrey", fontSize: "15px" }}>
                                    Activity
                                </span>
                            </h4>
                            <h4 class="left_link" style={{ cursor: "pointer" }}>
                                <img
                                    alt=""
                                    src={timerwhite}
                                    style={{ width: "10%", marginRight: "30px" }}
                                />
                                <span style={{ color: "lightgrey", fontSize: "15px" }}>
                                    Timesheet
                                </span>
                            </h4>
                        </div>
                        <div class="sub_div mt-5 mb-5">
                            <h4 class="left_link" style={{ cursor: "pointer" }}>
                                <img
                                    src={icon}
                                    alt=""
                                    style={{ width: "10%", marginRight: "30px" }}
                                />
                                <span style={{ color: "lightgrey", fontSize: "15px" }}>
                                    To-Do
                                </span>
                            </h4>
                            <h4 class="left_link" style={{ cursor: "pointer" }}>
                                <img
                                    src={bill}
                                    alt=""
                                    style={{ width: "10%", marginRight: "30px" }}
                                />
                                <span style={{ color: "lightgrey", fontSize: "15px" }}>
                                    Invoices
                                </span>
                            </h4>
                            <h4 class="left_link" style={{ cursor: "pointer" }}>
                                <img
                                    src={folder}
                                    alt=""
                                    style={{ width: "10%", marginRight: "30px" }}
                                />
                                <span style={{ color: "lightgrey", fontSize: "15px" }}>
                                    Projects
                                </span>
                            </h4>
                        </div>
                        <div class="sub_div">
                            <h4 class="left_link" style={{ cursor: "pointer" }}>
                                <img
                                    src={help}
                                    alt=""
                                    style={{ width: "10%", marginRight: "30px" }}
                                />
                                <span style={{ color: "lightgrey", fontSize: "15px" }}>
                                    Help
                                </span>
                            </h4>
                            <h4 class="left_link" style={{ cursor: "pointer" }}>
                                <img
                                    src={download}
                                    alt=""
                                    style={{ width: "10%", marginRight: "30px" }}
                                />
                                <span style={{ color: "lightgrey", fontSize: "15px" }}>
                                    Download APP
                                </span>
                            </h4>
                        </div>
                    </div>
                    <div class="pb-2" style={{ position: "absolute", bottom: "0px" }}>
                        <img src={notification} alt=""/>
                        <img src={settings} style={{marginLeft:"50px", marginRight:"50px"}} alt=""/>
                        <AccountCircleIcon style={{ color: "white" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
