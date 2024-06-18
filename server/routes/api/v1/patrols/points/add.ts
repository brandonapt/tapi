import prisma from "~~/prisma";

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const { id, amount } = body;

  const patrol = await prisma.patrol.update({
    where: {
      id,
    },
    data: {
      points: {
        increment: amount,
      },
    },
  });

  return patrol;
});
