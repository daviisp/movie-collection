import { useContext } from "react";
import { VideoContext } from "../../contexts/VideoContext";
import { AddVideoButton, AddIcon } from "./styles";

const AddVideo = () => {
  const { handleAdd } = useContext(VideoContext);
  return (
    <li>
      <AddVideoButton onClick={handleAdd}>
        <AddIcon />
      </AddVideoButton>
    </li>
  );
};
export default AddVideo;
