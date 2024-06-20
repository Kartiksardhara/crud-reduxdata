import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./userReducer";
function Update() {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const existingUser = user.filter((data) => data.id == id);
  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpadate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Upadate User</h3>
        <form onSubmit={handleUpadate}>
          <div>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              value={uname}
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="enter email"
              value={uemail}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </div>
          <br />
          <button className="btn btn-info">Upadate</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
