import Card from "@/components/card";
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
        <Loader2 size={40} className="animate-spin" />
      </div>
    );
  }

  return (
    <div>
      {blogs.length != 0 ? (
        <div className="flex items-center flex-col md:flex-row gap-10 mt-10 md:mt-20 md:mx-10">
          {blogs.map((i) => (
            // <div>{i.title}</div>

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
  );
}

export default BlogPage;
