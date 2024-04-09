import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  readALLBlog,
  readBlog,
} from "../controllers/blog.controller.js";

const blogRouter = Router();
blogRouter.route("/getBlogs").get(readALLBlog);
blogRouter.route("/getBlog/:id").get(readBlog);
blogRouter.route("/deleteBlog/:id").delete(deleteBlog);
blogRouter.route("/createBlog").post(createBlog);

export default blogRouter;
