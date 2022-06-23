import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function TrocForm() {
  const [formData, setFormData] = useState({
    image: "",
    titre: "",
    description: "",
    prix: "",
    profilId: "",
    trocCategorieId: "",
  });
  const { image, titre, description, prix, profilId, trocCategorieId } =
    formData;
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">titre du troc</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="text">description</label>
          <textarea></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="text">prix du troc</label>
          <input type="number" />
        </div>
        <div className="form-group">
          <label htmlFor="categorie">categorie</label>
          <select>
            <option value="">Alimentation</option>
            <option value="">informatique</option>
            <option value="">jardin</option>
          </select>
        </div>
      </form>
    </section>
  );
}

export default TrocForm;
