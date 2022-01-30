import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter the title of the post"],
    maxlength: [20, "The title not more than 20 caracters"],
  },
  author: String,
  body: String,
  date: Date,
  comments: [{ author: String, body: String, date: Date }],
  liked: { votes: Number, favs: Number },
});

export default mongoose.models.postSchema || mongoose.model("Post", postSchema);
