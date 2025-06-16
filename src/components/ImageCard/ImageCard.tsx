import { FC, MouseEventHandler } from "react";
import css from "./ImageCard.module.css";

interface Props {
  article: string;
  description: string;
  onClick: MouseEventHandler<HTMLImageElement>;
}

const ImageCard: FC<Props> = ({ article, description, onClick }) => {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={article}
        alt={description}
        onClick={onClick}
      />
    </div>
  );
};

export default ImageCard;
