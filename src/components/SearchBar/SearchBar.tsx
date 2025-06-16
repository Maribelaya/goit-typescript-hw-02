import { FC, FormEvent } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: FC<Props> = ({ onSearch }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.elements.namedItem("query") as HTMLInputElement;

    if (input.value.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    onSearch(input.value.trim());
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
