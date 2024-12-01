"use client";

import React, { useState } from "react";
function DeletePage() {
  const [slug, setSlug] = useState("");

  const deleteCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/categories", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug }),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={deleteCategory}>
        <input
          type="text"
          placeholder="Enter slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <button>Delete</button>
      </form>
    </div>
  );
}

export default DeletePage;
