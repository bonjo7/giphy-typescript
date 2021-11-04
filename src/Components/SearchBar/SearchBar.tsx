import { FunctionComponent, useState, ChangeEvent, useRef } from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { MagnifyingGlass, XCircle } from "phosphor-react";
import { GifList } from "../GifList/GifList";
import UseRoutes from "../../Hooks/RoutesHook";
import styles from "./searchBar.module.css";

const SearchBar: FunctionComponent = () => {
  const ref = useRef<HTMLInputElement | null>(null);
  const { searchGifs, getGifsData, isLoading, error } = UseRoutes();

  const [item, setSearchItem] = useState<string>("");

  const handleChnage = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  const clearSearch = () => {
    if (ref.current) {
      ref.current.value = "";
    }
    setSearchItem("");
    getGifsData();
  };

  return (
    <Container className={styles.search}>
      <InputGroup className='mb-3'>
        <FormControl
          name='giphyName'
          type='text'
          placeholder='Giphy Name'
          aria-label='Giphy name'
          className={error ? styles.error : ""}
          ref={ref}
          onChange={handleChnage}
        />
        {item !== "" ? (
          <Button
            aria-label='search-gif-button'
            id='clearSearch'
            className={styles.clearSearch}
            variant='danger'
            onClick={() => clearSearch()}
          >
            <XCircle size={20} />
          </Button>
        ) : (
          ""
        )}

        <Button
          aria-label='close-search-button'
          id='searchButton'
          variant='primary'
          onClick={() => {
            searchGifs(item);
          }}
        >
          <MagnifyingGlass size={20} />
        </Button>
      </InputGroup>

      <GifList isLoading={isLoading} getGifsData={getGifsData} />
    </Container>
  );
};

export { SearchBar };
