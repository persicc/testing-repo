"use client";

import React, { useEffect, useState } from "react";
import Comment from "../comment/Comment";

const getComments = async ({ postId }) => {
  const data = await fetch("api/comments", { headers: { postId } });
  return data.json();
};

function Comments({ postId }) {
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
      const data = await getComments({ postId });
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
        <div key={comment.postId}>
          <Comment text={comment.text} />
        </div>
      ))}
    </div>
  );
}

export default Comments;
