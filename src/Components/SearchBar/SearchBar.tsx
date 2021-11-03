import * as React from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { MagnifyingGlass } from "phosphor-react";
import UseRoutes from "../../Hooks/RoutesHook";
import styles from "./searchBar.module.css";

const SearchBar: React.FunctionComponent = () => {
  const { searchGifs } = UseRoutes();

  const [item, setSearchItem] = React.useState<string>("");

  const handleChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          onClick={() => {console.log(item); searchGifs(item)}}
        >
          <MagnifyingGlass size={20} />
        </Button>
      </InputGroup>
    </Container>
  );
};

export { SearchBar };
