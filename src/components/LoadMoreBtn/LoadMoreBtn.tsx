import React, { FC } from "react";
import css from "./LoadMoreBtn.module.css";

interface Props {
  handleLoadMore: () => void;
}

const LoadMoreBtn: FC<Props> = ({ handleLoadMore }) => {
  return (
    <button className={css.load_more} onClick={handleLoadMore}>
      Load More
    </button>
  );
};

export default LoadMoreBtn;
