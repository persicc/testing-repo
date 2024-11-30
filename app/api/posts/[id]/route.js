export const GET = async (req, res) => {
  const { id } = req.body;
  try {
    const response = await prisma.post.findUnique({ where: { id: id } });
    return new NextResponse(JSON.stringify(response), {});
  } catch (error) {
    console.log(error);
  }
};

export const DELETE = async (req, res) => {
  const { id } = req.body;
  try {
    const response = await prisma.post.delete({ where: { id: id } });
    return new NextResponse(JSON.stringify(response), {});
  } catch (error) {
    console.log(error);
  }
};
