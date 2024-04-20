import React, { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getUserData } from "@/lib/user";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");

  const [loading, setloading] = useState(false);

  const navigate = useNavigate();

  const { userid } = getUserData();

  async function onSubmit() {
    try {
      console.log(userid);
      setloading(true);
      const response = await axios.post(
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

  return (
    <div className="max-w-screen-xl md:mx-10 sm:mx-10 space-y-5 mx-3">
      <h1 className="text-2xl text-center my-6">Add your blog</h1>
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
            This is description content of your blog
          </p>
        </div>
      </div>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col items-start gap-1 space-y-1.5">
          <Label htmlFor="content">Blog Content</Label>
          <Textarea
            id="content"
            placeholder="Enter your content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <p className="text-sm text-muted-foreground">
            This is main content of your blog
          </p>
        </div>
      </div>
      <Button
        className="w-full md:w-auto mx-auto"
        onClick={onSubmit}
        disabled={loading}
      >
        Add Blog
      </Button>
    </div>
  );
};

export default AddBlog;
