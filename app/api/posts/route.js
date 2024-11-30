import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const { usename, password } = req.body;
  try {
    const response = await prisma.post.create({
      data: {
        usename,
        password,
      },
    });
    return new NextResponse(JSON.stringify(response), {
      status: 200,
      message: "Post created successfully",
    });
  } catch (error) {
    console.log(error);
  }
};

export const GET = async (req, res) => {
  try {
    const response = await prisma.post.findMany({});
    return new NextResponse(JSON.stringify(response), {});
  } catch (error) {
    console.log(error);
  }
};
