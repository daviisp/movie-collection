import { useState } from "react";
import { createContext } from "react";
import FormModal from "../components/FormModal";

import { useAxios } from "../hooks/useAxios";

import api from "../services/api";

export const VideoContext = createContext();

export function VideoContextProvider({ children }) {
  const { data, mutate } = useAxios("/videos");

  const [openFormModal, setOpenFormModal] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [id, setId] = useState(false);

  function handleEdit(videoId, videoTitle, videoLink) {
    setId(videoId);
    setTitle(videoTitle);
    setLink(videoLink);

    setOpenFormModal(true);
  }

  function handleAdd() {
    setOpenFormModal(true);
  }

  function handleClose() {
    if (title) setTitle("");
    if (link) setLink("");

    setOpenFormModal(false);
  }

  function handleLiked(id) {
    api.patch(`/videos/${id}`);

    const updatedVideos = {
      videos: data.videos?.map((video) => {
        if (video._id === id) {
          return {
            title: video.title,
            link: video.link,
            liked: !video.liked,
          };
        }

        return video;
      }),
    };

    mutate(updatedVideos, false);
  }

  function handleDelete(id) {
    api.delete(`/videos/${id}`);

    const updatedVideos = {
      videos: data.videos?.filter((video) => video._id !== id),
    };

    mutate(updatedVideos, false);
  }

  function handleSubmit(ev) {
    ev.preventDefault();

    const video = {
      title,
      link,
    };

    if (id) {
      api
        .put(`/videos/${id}`, video)
        .then((response) => {
          const updatedVideos = {
            videos: data?.videos.map((video) => {
              if (video._id === id) {
                return {
                  ...video,
                  title,
                  link,
                };
              }

              return video;
            }),
          };

          mutate(updatedVideos, false);
        })
        .catch((err) => {
          console.error(err.message);
        });
    } else {
      api.post("/videos", video);

      const updatedVideos = {
        videos: [...data.videos, video],
      };

      mutate(updatedVideos, false);
    }
    setOpenFormModal(false);
  }
  return (
    <VideoContext.Provider
      value={{
        handleAdd,
        handleClose,
        handleEdit,
        handleLiked,
        handleDelete,
        handleSubmit,
        title,
        setTitle,
        link,
        setLink,
      }}
    >
      {children}
      {openFormModal && <FormModal />}
    </VideoContext.Provider>
  );
}
