import { FunctionComponent } from "react";
import { Modal, InputGroup, FormControl, Form } from "react-bootstrap";

interface Props {
  handleClose(): void;
  show: boolean;
  share: boolean;
  gifURL: string;
}

const GifModal: FunctionComponent<Props> = ({
  handleClose,
  show,
  share,
  gifURL,
}) => {
  return (
    <>
      <Modal
        id='share-modal'
        show={show}
        onHide={handleClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton id='close-button'>
          <Modal.Title style={{ color: "#1d44b8" }}>
            {share ? "Share GIF" : "Embed GIF"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {share ? (
            ""
          ) : (
            <>
              <p>
                Want to embed this GIF on your website or blog? Just drop in the
                embed code below and you're done!
              </p>

              <Form.Switch
                id='responsive-switch'
                label='Responsive'
                style={{ marginBottom: "20px" }}
              />
            </>
          )}

          <InputGroup className='mb-3'>
            <FormControl
              id='IframeLink'
              aria-label='Iframe-link'
              aria-describedby='Iframe-link'
              value={gifURL}
            />
          </InputGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GifModal;
