import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers";
import { getLocalStorageItem, setLocalStorageItem } from "../utils";
import { LOCALSTORGE_TOKEN_KEY } from "../utils/constant";

import { login as userLogin, signUp as register } from "../api/index";
import jwtDecode from "jwt-decode";

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const token = getLocalStorageItem(LOCALSTORGE_TOKEN_KEY);
      if (token) {
        const data = await jwtDecode(token);
        console.log("user decode : ", data);
        if (data) {
          await setUser(data);
        }
      }
      setLoading(false);
    };

    getUser();
  }, []);

  const login = async (email, password) => {
    setLoading(true);
    const data = await userLogin(email, password);
    if (data.success) {
      //   console.log("user login hook :", data);
      setLocalStorageItem(LOCALSTORGE_TOKEN_KEY, data.data.token);
      const user = await jwtDecode(data.data.token);
      setUser(user);
      //   console.log("user login hook decode :", user);
    }
    setLoading(false);
  };

  const signUp = async (name, email, password, confirm_password) => {
    setLoading(true);
    const data = await register(name, email, password, confirm_password);
    console.log("user login hook :", data);
    setLoading(false);
  };

  return {
    user,
    login,
    signUp,
    loading,
  };
};
