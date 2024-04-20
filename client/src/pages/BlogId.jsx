import React, { useEffect, useState } from "react";

import axios from "axios";
import { Loader2, TriangleAlert } from "lucide-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/dist";

import { Button } from "@/components/ui/button";

function BlogIdPage() {
  const param = useParams();

  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

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

  // console.log(param);

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

  return <div>Blog Id Page</div>;
}

export default BlogIdPage;
