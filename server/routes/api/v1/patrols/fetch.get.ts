import prisma from "~~/prisma";

export default eventHandler(async (event) => {
    const patrols = await prisma.patrol.findMany();
    return patrols
});