"use client";

import { useState } from "react";

function CreateCategory() {
  const [slug, setSlug] = useState("");
  const [title, setTitle] = useState("");

  const createCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/categories", {
        method: "POST",
        contentType: "application/json",
        body: JSON.stringify({
          slug,
          title,
        }),
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={createCategory}>
        <input
          type="text"
          placeholder="Category Slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CreateCategory;
