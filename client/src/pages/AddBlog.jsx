import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUserData } from "@/lib/user";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/navbar";

const AddBlog = () => {
  const query = new URLSearchParams(useLocation().search);
  const blogId = query.get("blogId");

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const { userid } = getUserData();

  useEffect(() => {
    if (!userid) {
      navigate("/");
    }
  }, [userid, navigate]);

  useEffect(() => {
    if (blogId) {
      setloading(true);
      axios
        .get(
          `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/blog/getBlog/${blogId}`
        )
        .then((res) => {
          const { title, slug, img, content } = res.data;
          setTitle(title);
          setSlug(slug);
          setImg(img);
          setContent(content);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setloading(false);
        });
    }
  }, [blogId]);

  const disabled =
    title.length < 10 ||
    slug.length < 10 ||
    img.length < 10 ||
    content.length < 30;

  async function onSubmit() {
    try {
      setloading(true);
      await axios.post(
        `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/blog/createBlog`,
        {
          title,
          img,
          slug,
          content: content,
          username: userid,
        }
      );

      toast.success("Added your blog");
      setContent("");
      setImg("");
      setTitle("");
      setSlug("");

      navigate(`/blogs`);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    } finally {
      setloading(false);
    }
  }

  async function updateBlog() {
    try {
      setloading(true);
      await axios.post(
        `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/blog/editblog`,
        {
          title,
          img,
          slug,
          content: content,
          id: blogId,
          username: userid,
        }
      );

      toast.success("Updated your blog");
      setContent("");
      setImg("");
      setTitle("");
      setSlug("");

      navigate(`/blogs`);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    } finally {
      setloading(false);
    }
  }

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl md:mx-10 sm:mx-10 space-y-5 mx-3 my-20">
        <h1 className="text-2xl text-center my-6">Write your blog</h1>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col items-start gap-1 space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="Enter your Title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Title must be more than 10 characters
            </p>
          </div>
        </div>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col items-start gap-1 space-y-1.5">
            <Label htmlFor="img">Image Url</Label>
            <Input
              id="img"
              placeholder="Image url"
              name="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              This is image url of your blog
            </p>
          </div>
        </div>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col items-start gap-1 space-y-1.5">
            <Label htmlFor="slug">Slug</Label>
            <Input
              id="slug"
              placeholder="Put your slug here"
              name="slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
            <p className="text-sm text-muted-foreground">
              Slug must be more than 10 characters
            </p>
          </div>
        </div>
        <div className="grid w-full items-center gap-4 mb-20">
          <div className="flex flex-col items-start gap-1 space-y-1.5">
            <Label htmlFor="content">Blog Content</Label>
            <Textarea
              className="w-full h-96"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <p className="text-xs text-muted-foreground pl-3">
              *Content must be more than 30 characters
            </p>
          </div>
        </div>
        <Button
          className="w-full"
          onClick={() => {
            if (blogId) {
              updateBlog();
            } else {
              onSubmit();
            }
          }}
          disabled={loading || disabled}
        >
          {blogId ? "Update Blog" : "Add Blog"}
        </Button>
      </div>
    </>
  );
};

export default AddBlog;
