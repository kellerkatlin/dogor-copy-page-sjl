import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const document = await prisma.document.findUnique({
            where: {
                id: params.id,
            },
        });
        if (!document) {
            return NextResponse.json({
                status: 404,
                statusText: "Document not found",
            });
        }
        return NextResponse.json({ document });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        const document = await prisma.document.delete({
            where: {
                id: params.id,
            },
        });
        return NextResponse.json({ document });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500 });
    }
}
