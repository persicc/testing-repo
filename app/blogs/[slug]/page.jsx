import { useRouter } from "next/router";
import React, { useEffect } from "react";

function SingleBlogPage() {
  const router = useRouter();
  const [blog, setBlog] = useState(null);

  const { blogId } = router.pathname;

  useEffect(() => {
    if (!blogId) return;
    const getData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${blogId}`
        );
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [blogId]);

  return (
    <div>
      <h1>{blog?.title}</h1>
      <p>{blog?.body}</p>
      <Image src={blog?.image} />
    </div>
  );
}

export default SingleBlogPage;
