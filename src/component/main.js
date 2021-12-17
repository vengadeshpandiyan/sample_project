import React from "react";
import { JSON_DATA } from "./data";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import graph from '../images/graph.png'
import picture from '../images/picture.png'
import timerblue from '../images/timer_blue.png'
import videocamera from '../images/video_camera.png'

function Main() {
    return (
        <>
            <div class="col-lg-10 p-4">
                <div
                    class="button_div d-flex justify-content-between pb-4"
                    style={{ borderBottom: "1px solid lightgrey" }}
                >
                    <div>
                        <button class="btn border">
                            Design Task
                            <span style={{ marginLeft: "10px" }}>
                                <KeyboardArrowDownIcon />
                            </span>
                        </button>
                    </div>
                    <div>
                        <button class="btn border" style={{ color: "darkblue" }}>
                            <span style={{ fontSize: "14px", marginRight: "10px" }}>
                                <i class="fas fa-plus"></i>
                            </span>
                            ADD PROJECT
                        </button>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-8 p-3">
                            <div class="d-flex justify-content-between p-2">
                                <h4 style={{ fontSize: "20px" }}>Timesheet</h4>
                                <div class="d-flex align-items-center">
                                    <button class="btn mr-2" style={{ backgroundColor: "beige", fontSize: "14px" }}>
                                        View full sheet
                                    </button>
                                    <div class="percentage">
                                        <MoreHorizIcon />
                                    </div>
                                </div>
                            </div>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Project</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Start Time</th>
                                        <th scope="col">Stop Time</th>
                                        <th scope="col">Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {JSON_DATA &&
                                        JSON_DATA.map((e) => {
                                            return (
                                                <tr>
                                                    <td style={{ display: "flex" }}>
                                                        <span
                                                            style={{
                                                                backgroundColor: "lightgrey",
                                                                padding: "5px 13px",
                                                                borderRadius: "4px",
                                                                color: "white",
                                                                height: "35px",
                                                            }}
                                                        >
                                                            {e.slNo}
                                                        </span>
                                                        <p style={{ marginLeft: "10px" }}>{e.project}</p>
                                                    </td>
                                                    <td>{e.date}</td>
                                                    <td>{e.startTime}</td>
                                                    <td>{e.stopTime}</td>
                                                    <td>{e.duration}</td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                        <div class="col-lg-4" style={{ borderLeft: "1px solid #dee2e6" }}>
                            <div class="report_div p-3">
                                <h4 style={{ fontSize: "16px", marginBottom: "4rem" }}>
                                    Report
                                </h4>
                                <div
                                    class="weekly d-flex justify-content-between mt-4 p-3"
                                    style={{ backgroundColor: "#382f9c", borderRadius: "9px" }}
                                >
                                    <div class="img_graph">
                                        <img
                                            src={graph}
                                            class="w-100 img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div class="content">
                                        <h5 style={{ fontSize: "14px", color: "white" }}>
                                            WEEKLY ACTIVITY
                                        </h5>
                                        <h4 style={{ fontSize: "14px", color: "white" }}>52%</h4>
                                    </div>
                                    <div
                                        class="percentage"
                                        style={{
                                            color: "white",
                                            backgroundColor: "palegreen",
                                            borderRadius: "6px",
                                            fontSize: "12px",
                                            height: "26px",
                                            padding: "2px",
                                        }}
                                    >
                                        <span>
                                            <ArrowDropUpIcon />
                                            17%
                                        </span>
                                    </div>
                                </div>
                                <div
                                    class="weekly worked d-flex justify-content-between mt-4 p-3"
                                    style={{ backgroundColor: "#ccc", borderRadius: "9px" }}
                                >
                                    <div class="img_timeline">
                                        <img
                                            src={timerblue}
                                            class="w-100 img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div class="content">
                                        <h5 style={{ fontSize: "14px", color: "black" }}>
                                            WORKED THIS WEEK
                                        </h5>
                                        <h4 style={{ fontSize: "14px", color: "black" }}>
                                            11:56:33
                                        </h4>
                                    </div>
                                    <div
                                        class="percentage"
                                        style={{
                                            color: "red",
                                            backgroundColor: "#ff726f",
                                            borderRadius: "6px",
                                            fontSize: "12px",
                                            height: "26px",
                                            padding: "2px",
                                        }}
                                    >
                                        <b>
                                            <span>
                                                <ArrowDropDownIcon />
                                                17%
                                            </span>
                                        </b>
                                    </div>
                                </div>
                                <div
                                    class="border mt-4"
                                    style={{ borderRadius: "6px", cursor: "pointer" }}
                                >
                                    <div
                                        class="d-flex justify-content-center p-2"
                                        style={{ color: "darkblue" }}
                                    >
                                        <i class="far fa-file-pdf"></i>
                                        <h6 className="ml-3 m-0">EXPORT AS PDF</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div class="col-lg-8" style={{ borderTop: "1px solid #dee2e6" }}>
                            <div class="to-do-list p-3">
                                <h4 style={{ fontSize: "20px" }}>To-Do lists</h4>
                                <div class="d-flex  align-items-baseline">
                                    <div style={{ fontSize: "16px", color: "blue", margin: "0px" }}>
                                        <h4 style={{ margin: "0px" }}>20</h4>
                                        <p>MAY</p>
                                    </div>
                                    <div class=" to-do mt-3 p-3 d-flex justify-content-between w-100 ml-5" style={{ borderRadius: "6px", border: "solid 1px lightgrey" }}>
                                        <div>
                                            <h5 style={{ fontSize: "16px", color: "black" }}>Revamp instgram app</h5>
                                            <h4 style={{ fontSize: "13px", color: "grey" }}>Today</h4>
                                        </div>
                                        <div class="percentage">
                                            <MoreHorizIcon />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex  align-items-baseline">
                                    <div style={{ fontSize: "16px", margin: "0px" }}>
                                        <h4 style={{ margin: "0px" }}>20</h4>
                                        <p>MAY</p>
                                    </div>
                                    <div class=" to-do mt-3 p-3 d-flex justify-content-between w-100 ml-5" style={{ borderRadius: "6px", border: "solid 1px lightgrey", backgroundColor: "#f8f8f8" }}>
                                        <div>
                                            <h5 style={{ fontSize: "16px", color: "black" }}>Collect references for new project</h5>
                                            <h4 style={{ fontSize: "13px", color: "grey" }}>Upcoming</h4>
                                        </div>
                                        <div class="percentage">
                                            <MoreHorizIcon />
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex  align-items-baseline">
                                    <div style={{ fontSize: "16px", margin: "0px" }}>
                                        <h4 style={{ margin: "0px" }}>20</h4>
                                        <p>MAY</p>
                                    </div>
                                    <div class=" to-do mt-3 p-3 d-flex justify-content-between w-100 ml-5" style={{ borderRadius: "6px", border: "solid 1px lightgrey", backgroundColor: "#f8f8f8" }}>
                                        <div>
                                            <h5 style={{ fontSize: "16px", color: "black" }}>Prototyping</h5>
                                            <h4 style={{ fontSize: "13px", color: "grey" }}>Upcoming</h4>
                                        </div>
                                        <div class="percentage">
                                            <MoreHorizIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 border ">
                            <div class="screenshot p-3">
                                <h4 className="mb-4" style={{ fontSize: "18px" }}>Screenshots</h4>
                                <div class="d-flex justify-content-between align-items-center mt-3" style={{ borderBottom: "solid 1px #f8f8f8" }}>
                                    <img src={picture} alt=""/>
                                    <p style={{ color: "black", fontSize: "16px" }}>shot_1_attach_1.png</p>
                                    <button class="btn border">View</button>
                                </div>
                                <div class="d-flex justify-content-between align-items-baseline mt-3" style={{ borderBottom: "solid 1px #f8f8f8" }}>
                                    <img src={picture} alt=""/>
                                    <p style={{ color: "black", fontSize: "16px" }}>shot_1_attach_1.png</p>
                                    <button class="btn border">View</button>
                                </div>
                                <div class="d-flex justify-content-between align-items-baseline mt-3" style={{ borderBottom: "solid 1px #f8f8f8" }}>
                                    <img src={videocamera} alt=""/>
                                    <p style={{ color: "black", fontSize: "16px" }}>screen record_12.mov</p>
                                    <button
                                        class="btn border"
                                        style={{ backgroundColor: "#382f9c", color: "#fff" }}
                                    >
                                        Play
                                    </button>
                                </div>
                                <div
                                    class="border mt-4"
                                    style={{ borderRadius: "6px", cursor: "pointer" }}
                                >
                                    <div
                                        class="d-flex justify-content-center p-3"
                                        style={{ color: "darkblue" }}
                                    >
                                        <h6 className="ml-3 m-0">View All</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
