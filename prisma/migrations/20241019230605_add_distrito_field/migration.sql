/*
  Warnings:

  - The primary key for the `Document` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Document" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "numeroConstancia" TEXT NOT NULL,
    "expediente" TEXT,
    "dni" TEXT NOT NULL,
    "nombreCompleto" TEXT NOT NULL,
    "agrupacion" TEXT NOT NULL,
    "manzana" TEXT NOT NULL,
    "comuna" TEXT NOT NULL,
    "distrito" TEXT NOT NULL,
    "departamento" TEXT NOT NULL,
    "fecha" DATETIME NOT NULL,
    "planoVigente" TEXT NOT NULL,
    "medidaFrente" REAL NOT NULL,
    "medidaDerecha" REAL NOT NULL,
    "medidaIzquierda" REAL NOT NULL,
    "medidaFondo" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Document_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Document" ("agrupacion", "comuna", "createdAt", "departamento", "distrito", "dni", "expediente", "fecha", "id", "manzana", "medidaDerecha", "medidaFondo", "medidaFrente", "medidaIzquierda", "nombreCompleto", "numeroConstancia", "planoVigente", "updatedAt", "userId") SELECT "agrupacion", "comuna", "createdAt", "departamento", "distrito", "dni", "expediente", "fecha", "id", "manzana", "medidaDerecha", "medidaFondo", "medidaFrente", "medidaIzquierda", "nombreCompleto", "numeroConstancia", "planoVigente", "updatedAt", "userId" FROM "Document";
DROP TABLE "Document";
ALTER TABLE "new_Document" RENAME TO "Document";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
