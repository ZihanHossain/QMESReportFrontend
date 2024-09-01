import React, { useState } from "react";
import axios from "axios";

const LinkingDataUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadWhmLinking = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://10.12.3.182:3007/uploadWhmLinking",
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

  const handleUploadLinkingSMV = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://10.12.3.182:3007/uploadLinkingSMV",
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

  const handleUploadToDatabaseWhmLinking = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.get(
        "http://10.12.3.182:3007/export_whm_linking",
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

  const handleUploadToDatabaseLinkingSMV = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.get(
        "http://10.12.3.182:3007/export_linking_smv",
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
        <h2>Upload Work Hour in Minitues Excel File</h2>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
        <button onClick={handleUploadWhmLinking}>Upload</button>
        <button onClick={handleUploadToDatabaseWhmLinking}>
          Upload to Database
        </button>
      </div>
      <div>
        <h2>Upload Linking SMV Excel File</h2>
        <input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
        <button onClick={handleUploadLinkingSMV}>Upload</button>
        <button onClick={handleUploadToDatabaseLinkingSMV}>
          Upload to Database
        </button>
      </div>
    </div>
  );
};

export default LinkingDataUpload;
