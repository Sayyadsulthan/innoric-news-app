import { useEffect, useState } from "react";
import Category from "../components/Category";
import Card from "../components/Card";
import { getNewsCategory } from "../api";

export default function Health() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const data = await getNewsCategory("health");
      if (data && data.data) {
        setNews(data.data.articles);
        console.log("Home page", data.data.articles);
      }
      setLoading(false);
    };
    getNews();
  }, []);
  return (
    <>
      <h1>Health Page</h1>
      <Category health={true} />
      {loading ? (
        <h1>Please Wait.....</h1>
      ) : news.length < 1 ? (
        <h1>Please Refresh Once!</h1>
      ) : (
        news.map((article, i) => <Card article={article} key={i}/>)
      )}
    </>
  );
}
