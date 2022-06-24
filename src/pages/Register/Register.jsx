import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../../features/auth/authSlice";
import Spinner from "../../components/Spinner/Spinner";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
    image: "",
    nom: "",
    description: "",
    prenom: "",
    phone: "",
    adresse: "",
    pseudo: "",
    villeId: 1,
  });
  const {
    email,
    password,
    password2,
    image,
    nom,
    prenom,
    description,
    phone,
    adresse,
    pseudo,
  } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSucces, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSucces || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSucces, message, navigate, dispatch]);

  const handleInput = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleFile = (e) => {
    console.log(e.target.files[0]);
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.files[0],
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("password do not match");
    } else {
      const userData = {
        email,
        password,
        image,
        nom,
        prenom,
        description,
        phone,
        adresse,
        pseudo,
      };

      dispatch(register(userData));
    }
  };
  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Créer un compte pour commencer a troquer</p>
      </section>

      <section className="form" encType="multipart/form-data">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Entrer votre email"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label for="image">photo de profil</label>

            <input
              onChange={handleFile}
              type="file"
              id="image"
              name="image"
              accept="image/png, image/jpeg, image/png"
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">nom</label>
            <input
              type="text"
              name="nom"
              id="nom"
              value={nom}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">prenom</label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              value={prenom}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">pseudo</label>
            <input
              type="text"
              name="pseudo"
              id="pseudo"
              value={pseudo}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              value={description}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">telephone</label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={phone}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">adresse</label>
            <input
              type="text"
              name="adresse"
              id="adresse"
              value={adresse}
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="categorie">ville</label>
            <select>
              <option value="">Noumea</option>
              <option value="">Bourail</option>
              <option value="">La Foa</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Entrer votre mot de passe"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirmer votre mot de passe"
              onChange={handleInput}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Envoyer
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Register;
