import { useEffect, useState } from "react";
import Category from "../components/Category";
import { getNewsCategory } from "../api";
import Card from "../components/Card";

export default function Sports() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const data = await getNewsCategory("sports");
      if (data && data.data) {
        setNews(data.data.articles);
      }
      setLoading(false);
    };
    getNews();
  }, []);
  return (
    <>
      <h1>Sports Page</h1>
      <Category sports={true} />
      {loading ? (
        <h1>Please Wait.....</h1>
      ) : news.length < 1 ? (
        <h1>Please Refresh Once!</h1>
      ) : (
        news.map((article, i) => <Card article={article} key={i} />)
      )}
    </>
  );
}
