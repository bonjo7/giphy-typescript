import * as React from "react";
import { Container, InputGroup, FormControl, Button } from "react-bootstrap";
import { MagnifyingGlass } from "phosphor-react";
import styles from "./searchBar.module.css"

const SearchBar: React.FunctionComponent = () => (
  <Container className={styles.search}>
    <InputGroup className='mb-3'>
      <FormControl
        name='giphyName'
        type='text'
        placeholder='Giphy Name'
        aria-label='Giphy name'
      />

      <Button
        aria-label='close-search-button'
        id='searchButton'
        variant='primary'
        onClick={() => console.log("clicked")}
      >
        <MagnifyingGlass size={20} />
      </Button>
    </InputGroup>
  </Container>
);

export { SearchBar };
