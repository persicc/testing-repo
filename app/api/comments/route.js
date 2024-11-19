import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";

const comments = async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { postId } = req.query;

  if (!postId) {
    return res.status(400).json({ error: "Post ID is required" });
  }

  // Fetch comments from database or API
  const comments = await fetchComments(postId);

  return res.json(comments);
};

const fetchComments = async (postId) => {
  // Simulate fetching comments from database or API
  return [
    { id: 1, text: "Comment 1", postId },
    { id: 2, text: "Comment 2", postId },
    { id: 3, text: "Comment 3", postId },
  ];
};

export default comments;
