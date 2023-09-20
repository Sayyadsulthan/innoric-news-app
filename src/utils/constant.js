const apiURI = "https://sayyad-news-api.onrender.com/api/user";
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
