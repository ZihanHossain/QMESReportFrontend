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
        "http://10.12.60.80:3000/uploadQASummary",
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
      alert("Error uploading the file.");
    }
  };

  const handleUploadToDatabaseQASummary = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.get(
        "http://10.12.60.80:3000/export_qa_summary",
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
      alert("Error uploading the file.");
    }
  };

  const handleUploadSMV = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://10.12.60.80:3000/uploadSMV",
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
      alert("Error uploading the file.");
    }
  };

  const handleUploadToDatabaseSMV = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.get(
        "http://10.12.60.80:3000/export_smv",
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
      alert("Error uploading the file.");
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
    </div>
  );
};

export default KnittingDataUpload;
