import { useState } from "react";
import styled from "../styles/navbar.module.css";
import { useAuth } from "../hooks";
import { Link } from "react-router-dom";
import Interest from "./Interest";
import { toast } from "react-toastify";

export default function Navbar() {
  const auth = useAuth();

  const [isSettingVisible, setIsSettingVisible] = useState(false);

  const handleLogout = async () => {
    auth.logout();
    toast.success("Successfully Logged out");
  };
  return (
    <>
      <div className={styled.navWrapper}>
        <div className={styled.navHeading}>
          <img
            src="data:image/png;base64,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"
            alt="logo"
          />
        </div>
        <div className={styled.navUser}>
          {auth.user ? (
            <>
              <div className={styled.Setting}>
                <img
                  onClick={() => setIsSettingVisible(!isSettingVisible)}
                  src="https://cdn-icons-png.flaticon.com/128/10024/10024002.png"
                  alt="setting"
                />{" "}
                {isSettingVisible && <Interest />}
              </div>
              <div className={styled.logoutContainer}>
                <button className={styled.NavBtn} onClick={handleLogout}>
                  <Link className={styled.NavLink} to="/logout">
                    Logout
                  </Link>
                </button>
              </div>
            </>
          ) : (
            <div className={styled.logContainer}>
              <button className={styled.NavBtn}>
                <Link className={styled.NavLink} to="/login">
                  Login
                </Link>
              </button>
              <button className={styled.NavBtn}>
                <Link className={styled.NavLink} to="/signup">
                  SignUp
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
