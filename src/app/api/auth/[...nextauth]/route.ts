import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: " " },
                password: {
                    label: "Password",
                    type: "password",
                },
            },
            async authorize(credentials) {
                try {
                    if (!credentials?.email || !credentials?.password)
                        throw new Error("Faltan credenciales");

                    const userFound = await prisma.user.findUnique({
                        where: {
                            email: credentials.email,
                        },
                    });

                    if (!userFound) {
                        throw new Error(
                            "No se encontró un usuario con ese correo electrónico"
                        );
                    }

                    const matchPassword = await bcrypt.compare(
                        credentials.password,
                        userFound.password
                    );

                    if (!matchPassword) {
                        throw new Error("Contraseña incorrecta");
                    }

                    return {
                        id: userFound.id.toString(),
                        name: userFound.username,
                        email: userFound.email,
                    };
                } catch (error) {
                    console.error(error);
                    throw error;
                }
            },
        }),
    ],
    pages: {
        signIn: "/auth/login",
        signOut: "/auth/login",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
