// name
// des
// header img
// sulk
// content
import mongoose from "mongoose";
const blogScehma = mongoose.Schema({
  username: {
    type: String,
    require: true,
   
  },
  img:{
type:String,
require:true,
  },
  title: {
    type: String,
    require: true,
  },

  slug: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
});
const BlogU=mongoose.model("BlogU",blogScehma);
export default BlogU;
