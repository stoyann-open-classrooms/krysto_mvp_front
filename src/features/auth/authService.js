import axios from "axios";

const REGISTER_URL = "http://localhost:8000/krysto/api/users/addUser";
const LOGIN_URL = "http://localhost:8000/krysto/api/auth/login";

//register user
const register = async (userData) => {
  const response = await axios.post(REGISTER_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
//login user
const login = async (userData) => {
  const response = await axios.post(LOGIN_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// logOut

const logOut = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logOut,
  login,
};

export default authService;
