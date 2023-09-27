import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { FaPaperclip } from "react-icons/fa";

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      console.log("selectedFile", selectedFile);
      setSelectedFile(null);
    }
  };

  return (
    <div className="file-upload-container" style={{ position: "sticky" }}>
      <Dropzone onDrop={handleFileDrop} accept=".pdf,.doc,.docx">
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            {selectedFile ? (
              <p>{selectedFile.name}</p>
            ) : (
              <p>Drag and drop a file here, or click to select a file</p>
            )}
          </div>
        )}
      </Dropzone>
      <button
        className="file-upload-button"
        onClick={handleFileUpload}
        disabled={!selectedFile}
      >
        <FaPaperclip className="file-upload-icon" />
      </button>
    </div>
  );
};

export default FileUploadComponent;
