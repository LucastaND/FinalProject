import { useState } from "react";
import "../page/profile.css";

const Profile = () => {
  //   const [user, setUser] = useState(null);
  //   const { name, email, stid, classroom, imgUrl } = user;
  return (
    <section className="wrapper-prf">
      <div className="prf-container">
        <div className="prf-img">
          {/* <img src={imgUrl} alt="Profile" /> */}
        </div>
        <div className="prf-name">{/* <h2>{name}</h2> */}</div>
        <div className="prf-email">{/* <p>{email}</p> */}</div>
        <div className="prf-stid">{/* <p>{stid}</p> */}</div>
        <div className="prf-classroom">{/* <p>{classroom}</p> */}</div>
      </div>
    </section>
  );
};

export default Profile;
