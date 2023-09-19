import { useEffect, useState } from "react";
import Category from "../components/Category";
import { getNewsCategory } from "../api";
import Card from "../components/Card";

export default function Politics() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const data = await getNewsCategory("politics");
      if (data && data.data) {
        setNews(data.data.articles);
        // console.log("Home page", data.data.articles);
      }
      setLoading(false);
    };
    getNews();
  }, []);
  return (
    <>
      <h1>Politics Page</h1>
      <Category politics={true} />
      {loading ? (
        <h1>Please Wait.....</h1>
      ) : news.length < 1 ? (
        <h1>Please Refresh Once!</h1>
      ) : (
        news.map((article) => <Card article={article} />)
      )}
    </>
  );
}
