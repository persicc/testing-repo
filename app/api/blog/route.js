import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const response = await prisma.post.findAll();
    const blogs = await JSON.stringify(response);

    return new NextResponse(blogs, { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500 });
  }
};
