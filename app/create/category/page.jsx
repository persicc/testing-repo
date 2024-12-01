"use client";

import { useRouter } from "next/router";
import { useState } from "react";

function CreateCategory() {
  const [title, setTitle] = useState("");

  const createCategory = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
        }),
      });

      alert("Category created successfully");
      setTitle("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={createCategory}>
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
