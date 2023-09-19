import { useEffect, useState } from "react";
import Category from "../components/Category";
import Card from "../components/Card";
import { getFavouriteNews } from "../api";
import { useAuth } from "../hooks";

export default function Favourite() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();
  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      //   const data = await getFavouriteNews();
      //   if (data && data.data) {
      //     console.log("Home page", data);
      //     setNews(data.data);
      //   }
      if (auth.user) {
        setNews(auth.user.favourite);
      }

      setLoading(false);
    };
    getNews();
  }, []);

  //   if (loading) {
  //     return <h1>Please Wait.....</h1>;
  //   }

  return (
    <>
      <Category favourite={true} />
      {loading ? (
        <h1>Please Wait.....</h1>
      ) : news.length < 1 ? (
        <h1>Nothing in fav Section</h1>
      ) : (
        news.map((article, i) => <Card article={article.data} key={i}/>)
      )}
    </>
  );
}
