import React, { FunctionComponent, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Spinner from "../Spinner/Spinner";
import { useSharedStore } from "../../Store/SahredStore";
import styles from "./GifList.module.css";

interface Props {
  getGifsData(): void;
  isLoading: boolean;
}

const GifList: FunctionComponent<Props> = (props) => {

  
  const { gifs } = useSharedStore();

  // const { getGifsData, isLoading } = UseRoutes();

  useEffect(() => {
    props.getGifsData();
  }, []);

  return props.isLoading ? (
    <Spinner />
  ) : (
    <Container id='landing-page' style={{ marginBottom: "50px" }}>
      <Row>
        {gifs?.map((gif, key) => {
          const altTag = `${gif?.id}-gif`;
          return (
            <Col sm={4}>
              <Card key={key} id={altTag} className={styles.card}>
                <Card.Img
                  className={styles.img}
                  alt={altTag}
                  variant='top'
                  src={gif.images.original.url}
                />
                <Card.Body>
                  <Card.Text>{gif.title.split("by")[0]}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export { GifList };
