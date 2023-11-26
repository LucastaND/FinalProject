import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles for Quill

import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import "./projectregis.css";

const ProjectRegistration = () => {
  const [pjname, setPjname] = useState("");
  const [stid, setStId] = useState("");
  const [lecturer, setLecturer] = useState("");
  const [note, setNote] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Lưu thông tin file đã tải lên (ví dụ: đường dẫn file)
      setUploadedFile(response.data.filePath);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleNoteChange = (value) => {
    setNote(value);
  };

  const handleSubmit = () => {
    // Gửi dữ liệu đăng ký lên máy chủ (đối với projectName, studentId, lecturer, note, uploadedFile)
    // Bạn có thể sử dụng axios.post hoặc fetch API để thực hiện điều này
  };

  return (
    <section className="section-registopic">
      <div className="wrapper-registopic">
        <div className="registopic-form">
          <h1 className="regis-title"> Final Project Registration</h1>
          <form>
            <div className="input-box">
              <label htmlFor="name">Project Name: </label>
              <input
                type="text"
                name="pjname"
                id="pjname"
                value={pjname}
                onChange={(e) => setPjname(e.target.pjname)}
              />
            </div>

            <div className="input-box">
              <label htmlFor="stuid">Student ID: </label>
              <input
                type="text"
                name="stid"
                id="stid"
                value={stid}
                onChange={(e) => setStId(e.target.stid)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="lecturer">Lecturer: </label>
              <input
                type="text"
                name="lecturer"
                id="lecturer"
                value={lecturer}
                onChange={(e) => setLecturer.target.lecturer}
              />
            </div>
            <div className="input-box">
              <label htmlFor="note">Note:</label>
              <ReactQuill value={note} onChange={handleNoteChange} />
              {/* <CKEditor
                className="ckedit"
                editor={Editor}
                data=""
                onReady={(editor) => {
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              /> */}
            </div>
            <div
              {...getRootProps()}
              style={{
                border: "1px dashed #ccc",
                padding: "20px",
                marginTop: "20px",
              }}
            >
              <input {...getInputProps()} />
              <p>Drag & drop a file here, or click to select a file</p>
            </div>
            {uploadedFile && <p>File uploaded: {uploadedFile}</p>}
            <div className="btn-submit">
              <button
                className="btn-regis"
                type="submit"
                onClick={handleSubmit}
              >
                Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProjectRegistration;
