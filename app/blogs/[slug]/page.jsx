"use client";

import { useRouter } from "next/router";
import React, { useEffect } from "react";

function SingleBlogPage() {
  const [blog, setBlog] = useState(null);
  const router = useRouter();
  const { postId } = router.pathname.split("/")[2];

  useEffect(() => {
    const getBlog = async () => {
      const response = await fetch(`{env.API_URL}/api/blog/${postId}`);
      const blog = await response.json();
      setBlog(blog);
    };

    getBlog();
  }, [postId]);

  return (
    <div>
      <h1>{blog?.title}</h1>
      <p>{blog?.body}</p>
      <Image src={blog?.image} />
    </div>
  );
}

export default SingleBlogPage;
