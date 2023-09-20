import { Link } from "react-router-dom";
import styled from "../styles/card.module.css";
import { useAuth } from "../hooks";
import { useEffect, useState } from "react";
import { addToFavourite } from "../api";

export default function Card({ article }) {
  // console.log(article)
  const {
    source,
    title,
    description,
    url,
    urlToImage,
    content,
    author,
    publishedAt,
    id,
  } = article;
  const auth = useAuth();
  const date = publishedAt ? new Date(publishedAt) : null;
  const [isFavourite, setIsFavourite] = useState(false);
  const [newsId, setNewsId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    auth.user.favourite.map((fav) => {
      const res = compareObject(fav, article);
      if (res) {
        setNewsId(fav._id);
        setIsFavourite(true);
      }
    });
    // console.log(auth.user.favourite.indexOf(article));
  }, []);

  const handleAddFavourite = async () => {
    setIsLoading(true);
    const news = article;
    // const response = await addToFavourite(news);
    // console.log(response);
    await auth.updateFavourite(news, false);

    setIsFavourite(true);
    setIsLoading(false);
  };

  const handleRemoveFromFav = async () => {
    setIsLoading(true);
    console.log(newsId);
    await auth.updateFavourite(false, newsId);
    setIsFavourite(false);
    setIsLoading(false);
  };
  if (isLoading) {
    return <h1>Please Wait...</h1>;
  }

  return (
    <div className={styled.cardWrapper}>
      <Link to={url} className={styled.cardLink}>
        <div className={styled.left}>
          <img className={styled.cardImg} src={urlToImage} alt="urlToImage" />
        </div>
        <div className={styled.right}>
          <div className="Top">
            <span className={styled.title}>title: {title}</span>
          </div>
          <div className={styled.Bottom}>
            <ul className={styled.cardUl}>
              {description ? (
                <li>
                  {/* <strong>Description : </strong> */}
                  <p>{description}</p>
                </li>
              ) : content ? (
                <li>
                  <strong>Content : </strong>
                  <p>{content}</p>
                </li>
              ) : (
                ""
              )}

              {source && (
                <li className={styled.SrcDate}>
                  <strong>Source : {source.name}</strong>
                  {publishedAt && (
                    <strong>{`${date.getDate() + 1}-${
                      date.getMonth() + 1
                    }-${date.getFullYear()}`}</strong>
                  )}
                </li>
              )}
            </ul>
          </div>
        </div>
      </Link>
      <div className={styled.favContainer}>
        {/* <button
          onClick={isFavourite ? handleRemoveFromFav : handleAddFavourite}
        >
          {isFavourite ? "un-favourite" : "favourite"}{" "}
        </button> */}
        <img
          onClick={isFavourite ? handleRemoveFromFav : handleAddFavourite}
          src={
            isFavourite
              ? "https://cdn-icons-png.flaticon.com/128/306/306795.png"
              : "https://cdn-icons-png.flaticon.com/128/125/125327.png"
          }
        />
      </div>
    </div>
  );
}

const compareObject = (obj1, obj2) => {
  const data1 = {
    author: obj1.data.author,
    content: obj1.data.content,
    description: obj1.data.description,
    publishedAt: obj1.data.publishedAt,
    title: obj1.data.title,
    url: obj1.data.url,
    urlToImage: obj1.data.urlToImage,
  };
  const data2 = {
    author: obj2.author || undefined,
    content: obj2.content || undefined,
    description: obj2.description || undefined,
    publishedAt: obj2.publishedAt || undefined,
    title: obj2.title || undefined,
    url: obj2.url || undefined,
    urlToImage: obj2.urlToImage || undefined,
  };

  return JSON.stringify(data1) == JSON.stringify(data2);
};
