import { useContext } from "react";
import { Container, ButtonArea, Button } from "./styles";
import { IoTrashBin, IoThumbsUp, IoPencil } from "react-icons/io5";
import { VideoContext } from "../../contexts/VideoContext";

const Video = ({ id, title, link, liked }) => {
  const { handleEdit, handleLiked, handleDelete } = useContext(VideoContext);

  return (
    <li>
      <Container>
        <h2>{title}</h2>
        <a target="blank" href={link}>
          {link}
        </a>
        <ButtonArea>
          <Button liked={liked} onClick={() => handleLiked(id)}>
            <IoThumbsUp />
          </Button>
          <Button onClick={() => handleDelete(id)}>
            <IoTrashBin />
          </Button>
          <Button onClick={() => handleEdit(id, title, link)}>
            <IoPencil />
          </Button>
        </ButtonArea>
      </Container>
    </li>
  );
};
export default Video;
