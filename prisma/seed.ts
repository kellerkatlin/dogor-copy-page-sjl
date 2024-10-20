import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
async function main() {
    const password = "admin123";

    const existingUser = await prisma.user.findFirst({
        where: {
            email: "admin@admin.com",
        },
    });

    if (!existingUser) {
        const admin = await prisma.user.create({
            data: {
                email: "admin@admin.com",
                username: "admin",
                password: await bcrypt.hash(password, 10),
            },
        });
        console.log("Admin created:", admin);
    } else {
        console.log("Admin already exists");
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
