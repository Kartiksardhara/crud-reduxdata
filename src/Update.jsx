import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./userReducer";

function Update() {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const numericId = Number(id); // Convert id to number
  const existingUser = user.find((data) => data.id === numericId);

  // Initialize state variables conditionally
  const [uname, setName] = useState(existingUser ? existingUser.name : "");
  const [uemail, setEmail] = useState(existingUser ? existingUser.email : "");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: numericId,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        {existingUser ? (
          <form onSubmit={handleUpdate}>
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
            <button className="btn btn-info">Update</button>
          </form>
        ) : (
          <p>User not found</p>
        )}
      </div>
    </div>
  );
}

export default Update;
