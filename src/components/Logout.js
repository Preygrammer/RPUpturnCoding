import React from "react";
import { logoutUser } from "../actions/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div className="logout">
      <h1>Are You Sure You Want To Logout?</h1>
      <button
        variant="contained"
        size="large"
        color="inherit"
        href="#"
        onClick={handleClick}
      >
        Yes
      </button>{" "}
      <button
        variant="contained"
        size="large"
        color="inherit"
        href={"/podcasts"}
      >
        No
      </button>
    </div>
  );
};

export default Logout;
