import { FC } from "react";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageItem {
  id: string | number;
  urls: {
    small: string;
  };
  description?: string;
}

interface Props {
  items: ImageItem[];
  openModal: (url: string) => void;
}

const ImageGallery: FC<Props> = ({ items, openModal }) => {
  return (
    <ul className={css.imageCard}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard
            article={item.urls.small}
            description={item.description || "No description"}
            onClick={() => openModal(item.urls.small)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
