import { useContext } from "react";
import {
  Overlay,
  Container,
  Header,
  FormContainer,
  FormMain,
  InputGroup,
  Footer,
  CloseIcon,
  CheckIcon,
} from "./styles";
import { VideoContext } from "../../contexts/VideoContext";

const FormModal = () => {
  const { handleClose, title, setTitle, link, setLink, handleSubmit } =
    useContext(VideoContext);

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>Add a video</strong>
          <button type="button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer onSubmit={(ev) => handleSubmit(ev)}>
          <FormMain>
            <InputGroup>
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="link">Link</label>
              <input
                id="link"
                type="text"
                value={link}
                onChange={(ev) => setLink(ev.target.value)}
              />
            </InputGroup>
          </FormMain>
          <Footer>
            <button type="submit">
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  );
};
export default FormModal;
