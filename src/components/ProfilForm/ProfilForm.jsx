import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { createProfil } from "../../features/profils/profilSlice";
function ProfilForm() {
  const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    image: "",
    nom: "",
    description: "",
    prenom: "",
    phone: "",
    adresse: "",
    pseudo: "",
    villeId: 1,
    userId: user.user_info.id,
  });
  const dispatch = useDispatch();
  const {
    image,
    nom,
    description,
    prenom,
    phone,
    adresse,
    pseudo,
    villeId,
    userId,
  } = formData;
  const onSubmit = (e) => {
    e.preventDefault();

    const profilData = {
      image,
      nom,
      description,
      prenom,
      phone,
      adresse,
      pseudo,
      villeId,
      userId,
    };
    console.log(profilData);

    dispatch(createProfil(profilData));
  };
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

  return (
    <section className="form">
      <form method="POST" onSubmit={onSubmit} encType="multipart/form-data">
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
          <button className="btn btn-block">Soumettre</button>
        </div>
      </form>
    </section>
  );
}

export default ProfilForm;
