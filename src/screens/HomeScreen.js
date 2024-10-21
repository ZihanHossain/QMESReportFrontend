import React from "react";
import { Link } from "react-router-dom";
import "../Css/HomeScreen.css";

function HomeScreen() {
  return (
    <div className="card-container">
      <Link to="/reports" className="card">
        <div className="card-content">Reports</div>
      </Link>
      <Link to="/knittingdataupload" className="card">
        <div className="card-content">Knitting Data Upload</div>
      </Link>
      <Link to="/linkingdataupload" className="card">
        <div className="card-content">Linking Data Upload</div>
      </Link>
      <Link to="/edit-report" className="card">
        <div className="card-content">Edit Report</div>
      </Link>
    </div>
  );
}

export default HomeScreen;
