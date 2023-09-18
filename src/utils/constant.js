const apiURI = "http://127.0.0.1:8000/api/user";
export const LOCALSTORGE_TOKEN_KEY = "newsHub";

export const rootAPI = {
  login: () => `${apiURI}/login`,
  signUp: () => `${apiURI}/signup`,
  getUserInterestNews: () => `${apiURI}/news/user-interest`,
  updateUserInterest: () => `${apiURI}/news/user-interest`,
  getNews: (query) => `${apiURI}/news/category?q=${query}`,
  addFavNews: () => `${apiURI}/news/add-fav-news`,
  removeFavNews: (newsId) => `${apiURI}/news/remove-fav-news?newsId=${newsId}`,
};
