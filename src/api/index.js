import { getFormBody, getLocalStorageItem } from "../utils";
import { LOCALSTORGE_TOKEN_KEY, rootAPI } from "../utils/constant";
import axios from "axios";

const customFetch = async (uri, { body, ...customConfig }) => {
  const token = getLocalStorageItem(LOCALSTORGE_TOKEN_KEY);

  const headers = {
    "content-type": "application/x-www-form-urlencoded",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  //   const config = {
  //     ...customConfig,
  //     headers: {
  //       ...headers,
  //       ...customConfig.headers,
  //     },
  //   };

  //   if (body) {
  //     config.body = getFormBody(body);
  //   }

  try {
    // console.log(customConfig.method);
    // console.log(uri);
    const data = { ...body };
    console.log(data);
    const response = await axios({
      url: uri,
      method: customConfig.method,
      data: { ...body },
      headers,
    });
    console.log(await response.data);
    if (response) {
      return {
        success: true,
        data: response.data.data,
      };
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    console.log("error in customFetch : ", err);
    return {
      success: false,
      // message: err.message,
      message: err.response.data.message,
      status: err.response.status,
    };
  }
};

export const signUp = (name, email, password, confirm_password) => {
  return customFetch(rootAPI.signUp(), {
    method: "post",
    body: { name, email, password, confirm_password },
  });
};

export const login = (email, password) => {
  console.log("login custom: ", email, password);
  return customFetch(rootAPI.login(), {
    method: "post",
    body: { email, password },
  });
};

export const getUserInterestNews = () => {
  return customFetch(rootAPI.getUserInterestNews(), { method: "get" });
};
export const updateUserInterest = (interest) => {
  return customFetch(rootAPI.updateUserInterest(), {
    method: "patch",
    body: { interest },
  });
};

export const getNewsCategory = (query) => {
  return customFetch(rootAPI.getNews(query), { method: "get" });
};
export const getFavouriteNews = () => {
  return customFetch(rootAPI.getFavNews(), { method: "get" });
};
export const addToFavourite = (news) => {
  return customFetch(rootAPI.addFavNews(), { method: "post", body: { news } });
};

export const removeFromFavourite = (newsId) => {
  return customFetch(rootAPI.removeFavNews(newsId), { method: "delete" });
};
