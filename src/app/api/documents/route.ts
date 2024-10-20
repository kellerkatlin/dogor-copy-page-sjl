import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";
import { Document } from "@prisma/client";

export async function GET() {
    const documents = await prisma.document.findMany();
    return NextResponse.json({ documents });
}

export async function POST(req: Request) {
    try {
        const data: Document = await req.json();

        const Document = await prisma.document.create({
            data: {
                numeroConstancia: data.numeroConstancia,
                expediente: data.expediente || null, // Si es opcional
                dni: data.dni,
                nombre: data.nombre,
                apellido: data.apellido,
                sexo: data.sexo,
                direccion: data.direccion,
                fechaInicio: new Date(data.fechaInicio), // Verifica que no sea Invalid Date
                fechaFin: new Date(data.fechaFin), // Verifica que no sea Invalid Date
                medidaFrente: +data.medidaFrente, // Asegura que sean números válidos
                medidaDerecha: +data.medidaDerecha,
                medidaIzquierda: +data.medidaIzquierda,
                medidaFondo: +data.medidaFondo,
                areaTotal: +data.areaTotal,
                userId: 1,
            },
        });
        return NextResponse.json({
            message: "Document created",
            Document,
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: "Failed to create Document" },
            { status: 500 }
        );
    }
}
