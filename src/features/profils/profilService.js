import axios from "axios";

const CREATEPROFIL_URL = "http://localhost:8000/krysto/api/profils/addProfil";
const GETPROFILURL = "http://localhost:8000/krysto/api/profils/4";

//createProfil

const createProfil = async (profilData, token) => {
  const config = {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(CREATEPROFIL_URL, profilData, config);

  return response.data;
};
// get user Profil
const getProfils = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(GETPROFILURL, config);

  return response.data;
};

const profilService = {
  createProfil,
  getProfils,
};

export default profilService;
