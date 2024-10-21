import React, { useState } from "react";
import axios from "axios";

const KnittingDataUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadQASummary = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_SERVER_PORT}/uploadQASummary`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data);
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Error uploading the file:", error);
    }
  };

  const handleUploadToDatabaseQASummary = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.get(
        `http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_SERVER_PORT}/export_qa_summary`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data);
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Error uploading the file:", error);
    }
  };

  const handleUploadSMV = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_SERVER_PORT}/uploadSMV`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data);
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Error uploading the file:", error);
    }
  };

  const handleUploadToDatabaseSMV = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.get(
        `http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_SERVER_PORT}/export_smv`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data);
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Error uploading the file:", error);
    }
  };

  const handleUploadAttedance = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_SERVER_PORT}/uploadAttendanceKnitting`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data);
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Error uploading the file:", error);
    }
  };

  const handleUploadPlannedEfficiency = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_SERVER_PORT}/uploadPlannedEfficiency`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data);
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Error uploading the file:", error);
    }
  };

  const handleUploadToDatabasePlannedEfficiency = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.get(
        `http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_SERVER_PORT}/export_planned_efficiency`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data);
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Error uploading the file:", error);
    }
  };

  const handleUploadToDatabaseAttendance = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.get(
        `http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_SERVER_PORT}/export_attendance_knitting`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data);
    } catch (error) {
      console.error("Error uploading the file:", error);
      alert("Error uploading the file:", error);
    }
  };

  return (
    <div>
      <div>
        <h2>Upload Qa Summary Excel File</h2>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
        <button onClick={handleUploadQASummary}>Upload</button>
        <button onClick={handleUploadToDatabaseQASummary}>
          Upload to Database (Qa Summary)
        </button>
      </div>
      <div>
        <h2>Upload SMV Excel File</h2>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
        <button onClick={handleUploadSMV}>Upload</button>
        <button onClick={handleUploadToDatabaseSMV}>
          Upload to Database (SMV)
        </button>
      </div>
      <div>
        <h2>Upload Attendance Excel File</h2>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
        <button onClick={handleUploadAttedance}>Upload</button>
        <button onClick={handleUploadToDatabaseAttendance}>
          Upload to Database (Attendance)
        </button>
      </div>
      <div>
        <h2>Upload Target Efficiency Excel File</h2>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
        <button onClick={handleUploadPlannedEfficiency}>Upload</button>
        <button onClick={handleUploadToDatabasePlannedEfficiency}>
          Upload to Database (Target Efficiency)
        </button>
      </div>
    </div>
  );
};

export default KnittingDataUpload;
