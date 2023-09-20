import { useEffect, useState } from "react";
import { getUserInterestNews } from "../api";
import Card from "../components/Card";
import Category from "../components/Category";

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const data = await getUserInterestNews();
      if (data && data.data) {
        setNews(data.data.articles);
      }
      setLoading(false);
    };
    getNews();
  }, []);

  return (
    <>
      <div className="homeWrapper">
        <Category home={true} />
        {loading ? (
          <h1>Please Wait.....</h1>
        ) : news.length < 1 ? (
          <h1>Please Refresh Once!</h1>
        ) : (
          news.map((article, i) => <Card article={article} key={i} />)
        )}
      </div>
    </>
  );
}
