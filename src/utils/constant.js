const apiURI = "http://127.0.0.1:8000/api/user";
export const LOCALSTORGE_TOKEN_KEY = "newsHub";

export const rootAPI = {
  login: () => `${apiURI}/login`,
  signUp: () => `${apiURI}/signup`,
  getUserInterestNews: () => `${apiURI}/news/user-interest`,
  updateUserInterest: () => `${apiURI}/update-interest`,
  getNews: (query) => `${apiURI}/news/category?q=${query}`,
  getFavNews: () => `${apiURI}/get-fav-news`,
  addFavNews: () => `${apiURI}/add-fav-news`,
  removeFavNews: (newsId) => `${apiURI}/remove-fav-news?newsId=${newsId}`,
};
