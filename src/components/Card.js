import { Link } from "react-router-dom";
import styled from "../styles/card.module.css";

export default function Card({ article }) {
  const {
    source,
    title,
    description,
    url,
    urlToImage,
    content,
    author,
    publishedAt,
  } = article;

  let date =null;
  if(publishedAt){
    date = new Date(publishedAt)
  }
  console.log(date)
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
          <div className="Bottom">
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
                <li>
                  <strong>Source : {source.name}</strong>
                  {
                    publishedAt &&
                  <strong>{`${date.getDate()+1}-${date.getMonth()+1}-${date.getFullYear()}`}</strong>
                  }
                </li>
              )}
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
}

//
/*
<div className={styled.cardWrapper}>
      <Link to={url} className={styled.cardLink}>
        <div className="Center">
          <img className={styled.cardImg} src={urlToImage} alt="urlToImage" />
        </div>
        <div>
          <div className="Top">
            <span>title: {title}</span>
          </div>
          <div className="Bottom">
            <ul className={styled.cardUl}>
              <li>
                <strong>Description : </strong>
                <p>{description}</p>
              </li>
              {content && (
                <li>
                  <strong>Content : </strong>
                  <p>{content}</p>
                </li>
              )}
              {author && (
                <li>
                  <strong>Author : {author}</strong>
                </li>
              )}
              {source && (
                <li>
                  <strong>Source : {source.name}</strong>
                </li>
              )}
            </ul>
          </div>
        </div>
      </Link>
    </div>

    */
