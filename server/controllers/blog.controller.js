import mongoose from "mongoose";

import BlogU from "../modals/blog.modal.js";
import User from "../modals/user.modal.js";

export async function createBlog(req, res) {
  try {
    const data = req.body;

    if (
      !data.username ||
      !data.img ||
      !data.title ||
      !data.slug ||
      !data.content
    ) {
      return res.status(400).send("Please fill your all details");
    }

    let user;

    try {
      user = User.findById(data.username);
    } catch (error) {
      user = null;
    }

    if (!user) {
      return res.status(403).send("You are not authorised");
    }

    const newblog = new BlogU({
      author: data.username,
      img: data.img,
      title: data.title,
      slug: data.slug,
      content: data.content,
    });

    await newblog.save();
    return res.status(200).send("succesfully created your blog");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}

export async function deleteBlog(req, res) {
  try {
    const data = req.param;
    if (!data.id) {
      return res.status(400).send("Please fill your all details");
    }

    await BlogU.findByIdAndDelete(data.id);

    return res.status(200).send("Your blog deleted succesfully");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}

export async function readBlog(req, res) {
  try {
    const data = req.params;

    if (!data.id) {
      return res.status(400).send("Please fill your all details");
    }

    const blogbyId = await BlogU.findById(data.id).populate("author");
    return res.status(200).json(blogbyId);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}

export async function readALLBlog(_, res) {
  try {
    const blogs = await BlogU.find().populate("author");
    return res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}

export async function editBlog(req, res) {
  try {
    const data = req.body;

    if (!data.id) {
      return res.status(400).send("Please fill your all details");
    }

    if (!mongoose.Types.ObjectId.isValid(data.id)) {
      return res.status(400).send("Please fill your all details");
    }

    if (
      !data.username ||
      !data.img ||
      !data.title ||
      !data.slug ||
      !data.content
    ) {
      return res.status(400).send("Please fill your all details");
    }

    const user = await User.findById(data.username);

    if (!user) {
      return res.status(403).send("You are not authorised");
    }

    const blog = await BlogU.findById(data.id);

    if (!blog) {
      return res.status(404).send("Blog not found");
    }

    blog.img = data.img;
    blog.title = data.title;
    blog.slug = data.slug;
    blog.content = data.content;

    await blog.save();
    return res.status(200).send("sucessfully updated your Blog");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}
