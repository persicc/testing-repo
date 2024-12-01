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

export const POST = async (req, res) => {
  const { title, slug } = await req.json();
  try {
    const result = await prisma.category.findUnique({ where: { slug: slug } });

    if (result)
      return new NextResponse.json(
        result,
        { status: 200 },
        { message: "Category already exists", data: result }
      );

    const newCategory = await prisma.category.create({
      data: {
        title: title,
        slug: slug,
      },
    });

    return new NextResponse(
      JSON.stringify({
        message: "Category created successfully",
        data: newCategory,
      })
    );
  } catch (error) {
    console.log(error);
    return new NextResponse.json(error.message, { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    const { slug } = await req.json();

    // Pronađi kategoriju
    const result = await prisma.category.findUnique({
      where: { slug },
    });

    if (!result) {
      return NextResponse.json(
        { message: "Category not found", data: null },
        { status: 404 }
      );
    }

    // Obriši kategoriju
    const deleteCategory = await prisma.category.delete({
      where: { slug },
    });

    return NextResponse.json(
      { message: "Category deleted successfully", data: deleteCategory },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
};
