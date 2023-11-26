import { useState } from "react";
import { Link } from "react-router-dom";

const Council = () => {
  const [council, setCouncil] = useState([]);
  const [newcouncil, setNewCouncil] = useState("");
  const [addstudent, setAddStudent] = useState("");
  const [addlecturer, setAddLecturer] = useState("");

  return (
    <div className="wrapper-council">
      <div className="council-container">
        <h1>Council</h1>
        <div className="btn-create">
          <Link to="/">
            <button type="submit">Create New Council</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Council;
