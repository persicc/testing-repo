"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch("{env.API_URL}/api/blog");
      const blogs = await response.json();
      setBlogs(blogs);
    };

    getBlogs();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <Link href={`/blogs/${blog._id}`} key={blog._id}>
          <h1>{blog.img}</h1>
          <p>{blog.desc}</p>
        </Link>
      ))}
    </div>
  );
}

export default BlogsPage;
