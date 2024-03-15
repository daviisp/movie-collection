const express = require("express");
const router = express.Router();

const VideoController = require("./controllers/VideoController");
const VideoMiddleware = require("./middlewares/VideoMiddleware");

router.get("/videos", VideoController.index);

router.post("/videos", VideoController.store);

router.put("/videos/:id", VideoMiddleware.validateId, VideoController.update);

router.patch(
  "/videos/:id",
  VideoMiddleware.validateId,
  VideoController.updateLike
);

router.delete(
  "/videos/:id",
  VideoMiddleware.validateId,
  VideoController.delete
);

module.exports = router;
