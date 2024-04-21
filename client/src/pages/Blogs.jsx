import Card from "@/components/card";
import Navbar from "@/components/navbar";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getBlogs() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${import.meta.env.VITE_PUBLIC_BACKEND_URL}/blog/getBlogs`
        );

        setBlogs(data);

        console.log(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getBlogs();
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader2 size={40} className="animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <TriangleAlert size={100} className="text-rose-900" />
          <h1 className="text-xl">No blog found🥲🥲</h1>
        </div>
        <Link to={"/"}>
          <Button>Go to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl mx-auto mt-20">
        <h1 className="text-center text-3xl 2xl:text-4xl font-bold my-10 md:my-16">
          Explore all our blogs
        </h1>
        {blogs.length != 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {blogs.map((i) => (
              <Card
                key={i._id}
                title={i.title}
                slug={i.slug}
                image={i.img}
                id={i._id}
              />
            ))}
          </div>
        ) : (
          <div>No blogs available</div>
        )}
      </div>
    </>
  );
}

export default BlogPage;
