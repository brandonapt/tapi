import prisma from "~~/prisma";

export default eventHandler(async (event) => {
    const body = await readBody(event);
    const { name } = body;

    const patrol = await prisma.patrol.create({
        data: {
            name,
            points: 0
        },
    });

    return patrol
});