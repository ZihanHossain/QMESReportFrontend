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
        "http://10.12.3.182:3007/uploadQASummary",
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
        "http://10.12.3.182:3007/export_qa_summary",
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
        "http://10.12.3.182:3007/uploadSMV",
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
        "http://10.12.3.182:3007/export_smv",
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
        "http://10.12.3.182:3007/uploadAttendanceKnitting",
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
        "http://10.12.3.182:3007/export_attendance_knitting",
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
    </div>
  );
};

export default KnittingDataUpload;
