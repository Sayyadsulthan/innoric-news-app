import { Link } from "react-router-dom";
import styled from "../styles/category.module.css";

export default function ({
  home,
  sports,
  politics,
  health,
  technology,
  favourite,
}) {
  return (
    <>
      <div className={styled.CategoryWrapper}>
        <div className={styled.CategoryContainer}>
          <div style={home&&{ background: "aliceblue" }}>
            <Link
              className={styled.Link}
              to="/"
              onClick={(event) => home && event.preventDefault()}
            >
              Home
            </Link>
          </div>
          <div style={sports&&{ background: "aliceblue" }}>
            <Link
              className={styled.Link}
              to="/sports"
              onClick={(event) => sports && event.preventDefault()}
            >
              Sports
            </Link>
          </div>
          <div style={technology&&{ background: "aliceblue" }}>
            <Link
              className={styled.Link}
              to="/technology"
              onClick={(event) => technology && event.preventDefault()}
            >
              Technology
            </Link>
          </div>
          <div style={health&&{ background: "aliceblue" }}>
            <Link
              className={styled.Link}
              to="/health"
              onClick={(event) => health && event.preventDefault()}
            >
              Health
            </Link>
          </div>
          <div style={politics&&{ background: "aliceblue" }}>
            <Link
              className={styled.Link}
              to="/politics"
              onClick={(event) => politics && event.preventDefault()}
            >
              Politics
            </Link>
          </div>
          <div style={favourite&&{ background: "aliceblue" }}>
            <Link
              className={styled.Link}
              to="/favourite"
              onClick={(event) => favourite && event.preventDefault()}
            >
              Favourite
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
