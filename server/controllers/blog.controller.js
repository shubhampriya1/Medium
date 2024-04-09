import BlogU from "../modals/blog.modal.js";

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

    const blogbyId = await BlogU.findById(data.id);
    return res.status(200).json(blogbyId);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}

export async function readALLBlog(req, res) {
  try {
    const blogs = await BlogU.find();
    return res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
}
