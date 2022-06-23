import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { getProfils, reset } from "../../features/profils/profilSlice";
import Spinner from "../../components/Spinner/Spinner";
function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { profils, isLoading, isError, message } = useSelector(
    (state) => state.profils
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getProfils());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Link to={"/completeProfil"}>
        <button className="btn">Completer mon profil</button>
      </Link>
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
