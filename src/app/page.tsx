"use client";
import { useEffect, useState } from "react";
import DocumentsList from "./components/DocumentsList";
import { Document } from "@prisma/client";

export default function DocumentsPage() {
    const [documents, setDocuments] = useState<Document[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const storedDocuments = localStorage.getItem("documents");

        if (storedDocuments) {
            setDocuments(JSON.parse(storedDocuments));
        }

        fetch("/api/documents")
            .then((res) => res.json())
            .then((data) => {
                setDocuments(data.documents);
                localStorage.setItem(
                    "documents",
                    JSON.stringify(data.documents)
                );
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Cargando documentos...</div>;
    }
    return (
        <div>
            <DocumentsList
                loading={loading}
                documents={documents}
                setDocuments={setDocuments}
            />
        </div>
    );
}
