const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    body: String,
    sticker: String,
    imageUrl: String,
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const likeSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const postSchema = new mongoose.Schema(
  {
    body: String,
    username: {
      type: String,
      required: true,
    },
    imageUrl: String,
    sticker: String,
    comments: [commentSchema],
    likes: [likeSchema],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
