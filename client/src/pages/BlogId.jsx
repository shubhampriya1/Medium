import React, { useEffect, useState } from "react";

import axios from "axios";
import { Edit, Loader2, Trash, TriangleAlert } from "lucide-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";
import { getUserData } from "@/lib/user";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

function BlogIdPage() {
  const param = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function onSubmit() {
    const backendURL = import.meta.env.VITE_PUBLIC_BACKEND_URL;
    try {
      await axios.delete(`${backendURL}/blog/deleteBlog/${param.id}`);
      toast.success("Successfully deleted your Blog");
    } catch (error) {
      toast.error("error in deleting your blog");
    }
  }
  async function addComment() {
    const backendURL = import.meta.env.VITE_PUBLIC_BACKEND_URL;
    try {
      const { data } = await axios.post(`${backendURL}/comment/addComment`, {
        authorId: userid,
        rating: "5",
        blogId: param.id,
        text: " ",
      });

      console.log(data);
      toast.success("successfully added Your comment here");
    } catch (error) {
      toast.error("error,Your comment is not added");
      console.log(error);
    }
  }

  useEffect(() => {
    async function getBlog() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/blog/getBlog/${param.id}`
        );
        setBlog(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getBlog();
  }, []);

  const { userid } = getUserData();

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader2 size={40} className="animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-screen flex items-center justify-center flex-col gap-20">
        <div className="flex flex-col items-center justify-center">
          <TriangleAlert size={100} className="text-rose-900" />
          <h1 className="text-xl">No blog found🥲🥲</h1>
        </div>
        <Link to={"/blogs"}>
          <Button>Go to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {blog ? (
        <div className="my-20 max-w-screen-md mx-auto px-6">
          <div className="flex items-center justify-between my-10">
            <h1 className="text-3xl">{blog.title}</h1>

            {blog.author._id === userid ? (
              <div className="flex gap-2">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant={"ghost"} size={"icon"}>
                      <Trash />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your blog and remove your data from our servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={onSubmit}>
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                <Button variant={"ghost"} size={"icon"}>
                  <Edit />
                </Button>
              </div>
            ) : null}
          </div>
          <img
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
            }}
            src={blog.img}
            alt="header img"
            className="w-full object-fill rounded-md"
          />
          <h3 className="border-l-4 border-l-primary p-4 font-serif m-10">
            {blog.slug}
          </h3>
          <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          <Separator className="my-20" />
          <div>
            <h1 className="text-2xl mb-5">
              Comments{" ("}
              {blog.comments.length}
              {")"}
            </h1>
            <div>
              {blog.comments.length === 0 ? (
                <>No comments yet. Be the first one to add</>
              ) : (
                blog.comments.map((i) => (
                  <>
                    {/* <p>{i.ratings}</p> */}
                    {/* <p>{i.text}</p> */}
                    <div>{i.text}</div>
                  </>
                ))
              )}
            </div>

            {userid ? (
              <div className="mt-10 flex flex-col items-center justify-center gap-2">
                <Textarea className="w-full h-36" />
                <Button onClick={addComment}>Add Comment</Button>
              </div>
            ) : (
              <div className="flex items-center justify-center mt-10">
                <Link to={"/register"}>
                  <Button>Register Here</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default BlogIdPage;
