"use client";

import React, { useEffect, useState } from "react";
import Comment from "../comment/Comment";

const getComments = async () => {
  const data = await fetch("api/comments");
  return data.json();
};

function Comments() {
  const [comments, setComments] = useState([]);

  const addComment = async (e) => {
    e.preventDefault();
    await fetch("api/comments", {
      method: "POST",
      body: JSON.stringify({ text: e.target[0].value }),
    });
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getComments();
      setComments(data);
    };
    getData();
  }, []);

  return (
    <div>
      <form>
        <input type="text" />
        <button onClick={addComment}>Add Comment</button>
      </form>

      <h1>Comments</h1>
      {comments.map((comment) => (
        <div key={comment.id}>
          <Comment text={comment.text} />
        </div>
      ))}
    </div>
  );
}

export default Comments;
