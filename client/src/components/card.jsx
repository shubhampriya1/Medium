import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function Card({ image, title, slug, id }) {
  const navigate = useNavigate();
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img className="rounded-t-lg" src={image} alt="banner-image" />

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {slug}
        </p>

        <Button onClick={() => navigate(`/blog/${id}`)}>Read more</Button>
      </div>
    </div>
  );
}

export default Card;
