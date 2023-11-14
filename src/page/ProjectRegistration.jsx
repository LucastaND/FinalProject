import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import Editor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import "./projectregis.css";

const ProjectRegistration = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      projectname: "",
      stuid: "",
      lecturer: "",
      note: "",
    },
    validationSchema: Yup.object({
      projectname: Yup.string().required("Required"),
      stuid: Yup.string()
        .required("Required")
        .matches(/^[a-zA-Z\\d*]{8,20}$/, "Please enter a valid student ID"),
      lecturer: Yup.string().required("Required"),
      note: Yup.string(),
    }),
  });
  return (
    <section className="section-registopic">
      <div className="wrapper-registopic">
        <div className="registopic-form">
          <h1 className="regis-title"> Final Project Registration</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="input-box">
              <label htmlFor="name">Project Name: </label>
              <input
                value={formik.values.projectname}
                onChange={formik.handleChange}
                type="text"
                name="projectname"
                id="projectname"
              />
              {formik.errors.projectname && (
                <p className="errorMsg">{formik.errors.projectname} </p>
              )}
            </div>
            <div className="btn-formadd">
              <button
                className="btn-addmb"
                variant="primary"
                onClick={handleShow}
              >
                Add Member
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Student ID</Form.Label>
                      <Form.Control type="text" autoFocus />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <button variant="secondary" onClick={handleClose}>
                    Close
                  </button>
                  <button variant="primary" onClick={handleClose}>
                    Save Changes
                  </button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className="input-box">
              <label htmlFor="stuid">Student ID: </label>
              <input
                value={formik.values.stuid}
                onChange={formik.handleChange}
                type="text"
                name="stuid"
                id="stuid"
              />
              {formik.errors.stuid && (
                <p className="errorMsg">{formik.errors.stuid}</p>
              )}
            </div>
            <div className="input-box">
              <label htmlFor="lecturer">Lecturer: </label>
              <input
                value={formik.values.lecturer}
                onChange={formik.handleChange}
                type="text"
                name="lecturer"
                id="lecturer"
              />
              {formik.errors.lecturer && (
                <p className="errorMsg">{formik.errors.lecturer}</p>
              )}
            </div>
            <div className="input-box">
              <label htmlFor="note">Note:</label>
              <CKEditor
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
              />
            </div>
            <div className="btn-submit">
              <button className="btn-regis" type="submit">
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
