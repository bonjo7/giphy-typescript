import React, { FunctionComponent, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import UseRoutes from "../../Hooks/RoutesHook";
import { useSharedStore } from "../../Store/SahredStore";
import styles from "./GifList.module.css";

const GifList: FunctionComponent = () => {
  const { gifs } = useSharedStore();

  const { getGifsData } = UseRoutes();

  useEffect(() => {
    getGifsData();
  }, []);

  return (
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
