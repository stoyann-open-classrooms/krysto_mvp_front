import axios from "axios";

const GET_TROCS_URL = "http://localhost:8000/krysto/api/trocs/allTrocs";

// get user Profil
const getTrocs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(GET_TROCS_URL, config);

  return response.data;
};

const trocService = {
  getTrocs,
};

export default trocService;
