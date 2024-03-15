import { useEffect, useState } from "react";
import { Container, VideoListWrapper } from "./styles";

import AddVideo from "../AddVideo";
import Video from "../Video";
import { useAxios } from "../../hooks/useAxios";

import api from "../../services/api";

const VideoList = () => {
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   api.get("/videos").then(({ data }) => {
  //     setVideos(data.videos);
  //     console.log(videos);
  //   });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const { data } = useAxios("/videos");

  return (
    <Container>
      <VideoListWrapper>
        {data?.videos?.map((video) => (
          <Video
            key={video._id}
            id={video._id}
            title={video.title}
            link={video.link}
            liked={video.liked}
          />
        ))}
        <AddVideo />
      </VideoListWrapper>
    </Container>
  );
};
export default VideoList;
