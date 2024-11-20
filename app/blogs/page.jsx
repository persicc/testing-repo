"use client";

import React, { useEffect, useState } from "react";

function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const response = await fetch("api/blog");
      const blogs = await response.json();
      setBlogs(blogs);
    };

    getBlogs();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h1>{blog.img}</h1>
          <p>{blog.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogsPage;
