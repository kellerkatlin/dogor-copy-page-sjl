"use client";
import { Document } from "@prisma/client";
import React, { useEffect, useState } from "react";

export default function DocumentFound({ params }: { params: { id: string } }) {
    const [document, setDocument] = useState<Document | null>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDocument = async () => {
            // Intenta obtener el documento desde localStorage
            const storedDocument = localStorage.getItem(
                `document-${params.id}`
            );
            if (storedDocument) {
                setDocument(JSON.parse(storedDocument));
                setLoading(false); // Carga desde localStorage
                return; // Salir si se encontró en localStorage
            }

            // Si no está en localStorage, llama a la API
            try {
                const response = await fetch(`/api/documents/${params.id}`);
                if (!response.ok) {
                    throw new Error("Error al cargar el documento");
                }
                const data = await response.json();
                setDocument(data.document);
                localStorage.setItem(
                    `document-${params.id}`,
                    JSON.stringify(data.document) // Guarda en localStorage
                );
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false); // Asegúrate de que loading se establezca en false al final
            }
        };

        fetchDocument();
    }, [params.id]);

    if (loading) {
        return;
    }

    if (!document) {
        return;
    }

    function formatDate(dateInput: string | Date) {
        const date = new Date(dateInput);

        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    function formatDateToSpanish(dateInput: string | Date) {
        const date = new Date(dateInput);
        const months = [
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre",
        ];

        const day = String(date.getDate()).padStart(2, "0"); // Asegura que tenga 2 dígitos
        const month = String(months[date.getMonth()]); // Obtiene el mes en texto
        const year = date.getFullYear(); // Obtiene el año

        return `${day} de ${month} del ${year}`;
    }

    return (
        <div className="container">
            <div id="title">
                <h3 className="text-center mt-4">
                    MUNICIPALIDAD DE SAN JUAN DE LURIGANCHO
                </h3>

                <h5 className="text-center">GERENCIA DE DESARROLLO URBANO</h5>
                <h5 className="text-center">
                    SUBGERENCIA DE PLANEAMIENTO URBANO Y CATASTRO
                </h5>
                <h3 className="text-center font-bold mb-4">
                    PARA FINES DE OTORGAMIENTO DE SERVICIOS BÁSICOS
                </h3>
                <h3 className="text-center mt-0 mb-[5px]">
                    N° {document?.numeroConstancia}
                </h3>
                <h5 className="text-right">
                    REF.: {document?.expediente}{" "}
                    {formatDate(document?.fechaInicio!)}
                </h5>
            </div>

            <p className="mb-2">
                La Subgerencia de Planeamiento Urbano y Catastro de la
                Municipalidad de San Juan de Lurigancho, al amparo de la Ley Nº
                28687, Decreto Supremo Nº 017-2006-Vivienda y la Ordenanza N°
                439-MDSJL publicada el 26.07.23, da constancia a:
            </p>

            <p className="mb-1 mt-0">
                <strong>
                    {document?.sexo} {document?.apellido.toUpperCase()},{" "}
                    {document?.nombre.toUpperCase()} identificado con D.N.I. N°{" "}
                    {document?.dni},{" "}
                </strong>
                se encuentra en calidad de posesionario(a) del predio ubicado en{" "}
                <strong>{document?.direccion}</strong>, Distrito de San Juan de
                Lurigancho, Provincia y Departamento de Lima, según el Plano
                Visado para fines de Servicios Básicos N°
                108-2010-SGHU-GDU/MDSJL, cuyas medidas y linderos referenciales
                son los siguientes:
            </p>

            <div className="pl-[35px] block pb-0 mb-1 mt-2">
                <p className="p-0 m-0">
                    Por el frente{" "}
                    <span className="ml-8">
                        : {document?.medidaFrente.toFixed(2)} ml.
                    </span>
                </p>
                <p className="p-0 m-0">
                    Por la derecha{" "}
                    <span className="ml-4">
                        : {document?.medidaDerecha.toFixed(2)} ml.
                    </span>
                </p>
                <p className="p-0 m-0">
                    Por la izquierda{" "}
                    <span className="ml-2">
                        : {document?.medidaIzquierda.toFixed(2)} ml.
                    </span>
                </p>
                <p className="p-0 m-0">
                    Por el fondo{" "}
                    <span className="ml-9">
                        : {document?.medidaFondo.toFixed(2)} ml.
                    </span>
                </p>
                <p className="p-0 m-0">
                    Área total{" "}
                    <span className="ml-14">
                        : {document?.areaTotal.toFixed(2)} m2.
                    </span>
                </p>
            </div>

            <p className="pt-0 mt-2 mb-1">
                Se expide la presente Constancia de Posesión exclusivamente para
                Fines de Otorgamiento de Servicios Básicos, según Informe
                Técnico N° 56-2024-PPBH-SGPUC-GDU/MDSJL, en concordancia con el
                Art. 24 de la Ley N° 28687 &quot;Ley de desarrollo y
                complementaria de formalización de la propiedad informal, acceso
                al suelo y dotación de servicios básicos&quot;.
            </p>

            <p className="mt-2 pt-0 mb-3">
                <strong>
                    ESTE DOCUMENTO NO AUTORIZA NI REGULARIZA OBRAS DE
                    HABILITACIÓN URBANA, LOTIZACIÓN, SUBDIVISIÓN, CONSTRUCCIÓN.
                    NO CONSTITUYE RECONOCIMIENTO ALGUNO DE PROPIEDAD QUE AFECTE
                    AL TITULAR DEL PREDIO. LA PRESENTE CONSTANCIA DE POSESIÓN ES
                    EXCLUSIVA PARA LA OBTENCIÓN DE LOS SERVICIOS BÁSICOS Y
                    TENDRÁ SOLAMENTE VIGENCIA HASTA LA EFECTIVA INSTALACIÓN DE
                    LOS SERVICIOS BÁSICOS EN EL INMUEBLE.
                </strong>
            </p>

            <p className="mb-1 mt-2">
                <strong>
                    NOTA: LA PRESENTE CONSTANCIA DE POSESIÓN QUEDARÁ SIN EFECTO
                    DE EXISTIR CONFLICTOS JUDICIALES Y/O EXTRAJUDICIALES
                    RESPECTO A LA POSESIÓN DEL LOTE.
                </strong>
            </p>

            <p className="mt-2 mb-2">
                San Juan de Lurigancho,{" "}
                {formatDateToSpanish(document?.fechaFin!)}
            </p>

            <p className="mt-0 mb-1">
                Este formato no presenta ningun valor legal o judicial.
            </p>
        </div>
    );
}
