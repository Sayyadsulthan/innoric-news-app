import { useEffect, useState } from "react";
import { getUserInterestNews } from "../api";
import Card from "../components/Card";
import Category from "../components/Category";

export default function Home() {
  const [news, setNews] = useState([
    {
      author: "The Athletic Staff",
      content:
        "By Matt Barrows, David Lombardi and Jourdan Rodrigue\r\nThe San Francisco 49ers picked up their second win of the season with a 30-23 victory against the Los Angeles Rams on Sunday at So-Fi Stadium. He… [+4106 chars]",
      description:
        "San Francisco QB Brock Purdy moved to 7-0 as a starter in the regular season.",
      publishedAt: "2023-09-18T05:53:05Z",
      source: { id: null, name: "The Athletic" },
      title:
        "Christian McCaffrey, Deebo Samuel propel 49ers to win vs. Rams: Brock Purdy keeps on winning - The Athletic",
      url: "https://theathletic.com/4872074/2023/09/17/49ers-rams-result-takeaways/",
      urlToImage:
        "https://cdn.theathletic.com/app/uploads/2023/09/17194741/GettyImages-1687224153-scaled.jpg",
    },
    {
      author: null,
      content:
        "Ethiopia’s Gudaf Tsegay and Sweden's Mondo Duplantis both broke world records on a sensational afternoon of action at the Wanda Diamond League Final in Eugene on Sunday (17).\r\nFirst, Tsegay set the s… [+14862 chars]",
      description:
        "Ethiopia’s Gudaf Tsegay and Sweden's Mondo Duplantis both broke world records on a sensational afternoon of action at the Wanda Diamond League Final",
      publishedAt: "2023-09-18T05:26:15Z",
      source: { id: null, name: "Worldathletics.org" },
      title:
        "Tsegay and Duplantis amaze with world records in Eugene | REPORTS - World Athletics",
      url: "https://worldathletics.org/competitions/diamond-league/news/diamond-league-final-eugene-2023-day-two-report",
      urlToImage:
        "https://assets.aws.worldathletics.org/large/6507e1ca876b977bbcdd8fd5.jpg",
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const data = await getUserInterestNews();
      if (data && data.data) {
        setNews(data.data.articles);
        console.log("Home res", data);
        console.log("Home page", data.data.articles);
      }
      setLoading(false);
    };
    getNews();
  }, []);
  // const handleGetNews=async()=>{
  //     const data = await getUserInterest();
  //     console.log(data);
  // }
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
