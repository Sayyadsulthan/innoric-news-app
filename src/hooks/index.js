import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers";
import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem,
} from "../utils";
import { LOCALSTORGE_TOKEN_KEY } from "../utils/constant";

import {
  login as userLogin,
  signUp as register,
  getFavouriteNews,
  addToFavourite,
  removeFromFavourite,
  updateUserInterest,
} from "../api/index";
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
        const favNews = await getFavouriteNews();
        if (favNews && favNews.success) {
          data.favourite = favNews.data;
        }
        // console.log("user decode : ", data);
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
    // console.log("user login hook :", data);
    setLoading(false);
  };

  const logout = () => {
    setLoading(true);
    removeLocalStorageItem(LOCALSTORGE_TOKEN_KEY);
    setUser(null);
    setLoading(false);
  };

  const getUserFavourite = async () => {
    return user && user.favourite ? user.favourite : [];
  };

  const updateFavourite = async (news, newsId) => {
    // setLoading(true);
    if (news) {
      const response = await addToFavourite(news);
      if (response && response.success) {
        const favNews = await getFavouriteNews();
        // console.log("updated fav : ", favNews);
        if (favNews && favNews.success) {
          await setUser({ ...user, favourite: favNews.data });
          setLoading(false);
          return {
            success: true,
            message: "News Added to Favourite",
          };
        }
      }
      // console.log("response false : ", response);
    }
    // console.log("newsId: ", newsId);
    if (newsId) {
      await removeFromFavourite(newsId);
      const favNews = await getFavouriteNews();
      // console.log("updated fav : ", favNews);
      if (favNews && favNews.success) {
        await setUser({ ...user, favourite: favNews.data });
        // setLoading(false);

        return {
          success: true,
          message: "Remove from favourite",
        };
      }
    }

    // setLoading(false);
    return {
      success: false,
      message: "Please Try after 5 minutes",
    };
  };

  const updateInterest = async (interest) => {
    const response = await updateUserInterest(interest);
    console.log("response: ", response);
    if (response.success) {
      return {
        success: true,
        message: response.message,
      };
    }

    return {
      success: false,
      message: response.message,
    };
  };

  return {
    user,
    login,
    signUp,
    loading,
    logout,
    getUserFavourite,
    updateFavourite,
    updateInterest,
  };
};
