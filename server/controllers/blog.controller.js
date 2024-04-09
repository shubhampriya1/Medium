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
    const data2 = req.body;

    if (
      !data2.username ||
      !data2.img ||
      !data2.title ||
      !data2.slug ||
      !data2.content
    ) {
      return res.status(400).send("Please fill your all details");
    }

    await BlogU.findByIdAndUpdate(data2.id, {
      author: data2.username,
      img: data2.img,
      title: data2.title,
      slug: data2.slug,
      content: data2.content,
    });
    return res.status(200).send("sucessfully updated your Blog");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}
