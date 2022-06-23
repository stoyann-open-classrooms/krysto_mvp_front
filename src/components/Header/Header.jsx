import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { FaSignOutAlt, FaSignInAlt, FaUser } from "react-icons/fa";
import { logOut, reset } from "../../features/auth/authSlice";
function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogOut = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>Goal SETTER</Link>
      </div>

      <ul>
        {user ? (
          <li>
            <Link to={"/login"}>
              <button className="btn" onClick={onLogOut}>
                <FaSignOutAlt />
              </button>
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to={"/login"}>
                <FaSignInAlt />
                Login
              </Link>
            </li>
            <li>
              <Link to={"/register"}>
                <FaUser />
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
