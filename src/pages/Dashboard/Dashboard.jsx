import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate, dispatch]);

  return (
    <>
      <Link to={"/addTroc"}>
        <button className="btn">Ajouter un troc</button>
      </Link>
      <section className="heading">
        <h1>Welcome </h1>
        <p>Dashboard</p>
      </section>
    </>
  );
}

export default Dashboard;
