import { FunctionComponent } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { CodeSimple, Share } from "phosphor-react";
import styles from "./GifButtons.module.css";

interface Props {
  handleShow: (gifEmbed_URL: string) => void;
  shareGif(gifURL: string): void;
  gifURL: string;
}

const GifButtons: FunctionComponent<Props> = (props) => {
  return (
    <Row>
      <Col style={{ textAlign: "center" }}>
        <Button
          id='embed-button'
          aria-label='embed-button-share'
          variant='outline-light'
          className={styles.shareButton}
          onClick={() => props.handleShow(props.gifURL)}
        >
          <CodeSimple size={20} /> Embed
        </Button>
      </Col>
      <Col style={{ textAlign: "center" }}>
        <Button
          id='share-button'
          aria-label='share-button-share'
          variant='outline-light'
          className={styles.shareButton}
          onClick={() => props.shareGif(props.gifURL)}
        >
          <Share size={20} /> Share
        </Button>
      </Col>
    </Row>
  );
};

export { GifButtons };
