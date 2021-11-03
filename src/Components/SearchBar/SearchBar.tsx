import React, { FunctionComponent, useState, ChangeEvent } from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { MagnifyingGlass } from "phosphor-react";
import { GifList } from "../GifList/GifList";
import UseRoutes from "../../Hooks/RoutesHook";
import styles from "./searchBar.module.css";

const SearchBar: FunctionComponent = () => {
  const { searchGifs } = UseRoutes();

  const [item, setSearchItem] = useState<string>("");

  const handleChnage = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  return (
    <Container className={styles.search}>
      <InputGroup className='mb-3'>
        <FormControl
          name='giphyName'
          type='text'
          placeholder='Giphy Name'
          aria-label='Giphy name'
          onChange={handleChnage}
        />

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

      <GifList />
    </Container>
  );
};

export { SearchBar };
