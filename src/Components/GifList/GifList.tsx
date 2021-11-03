import * as React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSharedStore } from "../../Store/SahredStore";

const GifList: React.FunctionComponent = () => {
  const { gifs } = useSharedStore();

  return (
    <Container id='landing-page' style={{ marginBottom: "50px" }}>
      <Row>
        {gifs?.map((gif, key) => {
            console.log(gif?.images?.original.url)
          const altTag = `${gif?.id}-gif`;
          return (
            <Col sm={4}>
              <Card key={key} id={altTag}>
                <Card.Img
                  alt={altTag}
                  variant='top'
                  src={gif.images.original.url}
                />
                <Card.Body>
                  <Card.Text>
                  {gif.title.split("by")[0]}
                  </Card.Text>
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
