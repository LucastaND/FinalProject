import { useState } from "react";
const CreateCouncil = () => {
  const [council, setCouncil] = useState([]);
  const [newcouncil, setNewCouncil] = useState("");
  const [addstudent, setAddStudent] = useState("");
  const [addlecturer, setAddLecturer] = useState("");

  return (
    <div className="wrapper-createform">
      <section className="createform-container">
        <h2>Create New Council</h2>
        <form>
          <div className="inputbox">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setNewCouncil({ ...council })}
            />
          </div>
        </form>
      </section>
    </div>
  );
};
export default CreateCouncil;
