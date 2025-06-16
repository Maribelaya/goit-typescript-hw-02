import { useState, useEffect, FC } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ImageModal from "./ImageModal/ImageModal";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import Loader from "./Loader/Loader";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";
import { fetchArticles } from "../api";

interface Article {
  id: string;
  urls: {
    small: string;
  };
  description?: string;
  alt_description?: string;
}

interface FetchResponse {
  results: Article[];
  total: number;
  total_pages: number;
}

const App: FC = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const searchArticles = (newQuery: string) => {
    if (newQuery === query) {
      setPage(1);
      setArticles([]);
    } else {
      setQuery(newQuery);
      setPage(1);
      setArticles([]);
    }
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedData = await fetchArticles(query, page);
        setArticles((prev) => [...prev, ...fetchedData.results]);
      } catch {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={searchArticles} />
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      {articles.length > 0 && (
        <ImageGallery items={articles} openModal={openModal} />
      )}
      {articles.length > 0 && !loading && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
