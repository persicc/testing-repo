import { prisma } from "@/prisma/prisma";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    const response = await prisma.category.findMany();

    return new NextResponse(JSON.stringify(response), {
      status: 200,
      message: "OK",
    });
  } catch (error) {
    console.log(error);

    return new NextResponse(
      error.message,
      { status: 500 },
      { message: "Internal Server Error" }
    );
  }
};
