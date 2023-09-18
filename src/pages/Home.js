import { useEffect, useState } from "react";
import { getUserInterest } from "../api";
import Card from "../components/Card";

export default function Home() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const data = await getUserInterest();
      if (data) {
        setNews(data.data.articles);
        console.log("Home page", data.data.articles);
      }
    };
    getNews();
  }, []);
  // const handleGetNews=async()=>{
  //     const data = await getUserInterest();
  //     console.log(data);
  // }
  return (
    <>
      <div className="homeWrapper" style={{background:"#dfeded"}}>
        {news.map((article) => (
          <Card article={article} />
        ))}
        {/* // console.log(artilce) */}
      </div>
    </>
  );
}

/*
description
id 
name
url
*/
