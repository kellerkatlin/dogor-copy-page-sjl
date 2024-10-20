/*
  Warnings:

  - You are about to drop the column `agrupacion` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `comuna` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `departamento` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `distrito` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `manzana` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `nombreCompleto` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `planoVigente` on the `Document` table. All the data in the column will be lost.
  - Added the required column `apellido` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `areaTotal` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `direccion` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaFin` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaInicio` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexo` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Document" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "numeroConstancia" TEXT NOT NULL,
    "expediente" TEXT,
    "dni" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "fechaInicio" DATETIME NOT NULL,
    "fechaFin" DATETIME NOT NULL,
    "medidaFrente" REAL NOT NULL,
    "medidaDerecha" REAL NOT NULL,
    "medidaIzquierda" REAL NOT NULL,
    "medidaFondo" REAL NOT NULL,
    "areaTotal" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Document_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Document" ("createdAt", "dni", "expediente", "id", "medidaDerecha", "medidaFondo", "medidaFrente", "medidaIzquierda", "numeroConstancia", "updatedAt", "userId") SELECT "createdAt", "dni", "expediente", "id", "medidaDerecha", "medidaFondo", "medidaFrente", "medidaIzquierda", "numeroConstancia", "updatedAt", "userId" FROM "Document";
DROP TABLE "Document";
ALTER TABLE "new_Document" RENAME TO "Document";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
