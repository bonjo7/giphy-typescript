import { FunctionComponent, useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import GifModal from "../GifModal/GifModal";
import Spinner from "../Spinner/Spinner";
import { useSharedStore } from "../../Store/SahredStore";
import { GifButtons } from "../GifButtons/GifButtons";
import styles from "./GifList.module.css";

interface Props {
  getGifsData(): void;
  isLoading: boolean;
}

const GifList: FunctionComponent<Props> = (props) => {
  const { gifs } = useSharedStore();
  const [show, setShow] = useState<boolean>(false);
  const [share, setShare] = useState<boolean>(false);
  const [gifURL, setGif] = useState<string>("");
  const handleClose = () => setShow(false);

  const handleShow = (gifEmbed_URL: string): void => {
    setShow(true);
    setShare(false);
    setGif(gifEmbed_URL);
  };

  const shareGif = (gifURL: string): void => {
    setShare(true);
    setShow(true);
    setGif(gifURL);
  };

  useEffect(() => {
    props.getGifsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return props.isLoading ? (
    <Spinner />
  ) : (
<>
    <GifModal handleClose={handleClose} show={show} gifURL={gifURL} share={share} />

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
                  <GifButtons
                    handleShow={() => handleShow(gif.embed_url)}
                    shareGif={() => shareGif(gif.url)}
                    gifURL={gifURL}
                  />
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
    </>
  );
};

export { GifList };
