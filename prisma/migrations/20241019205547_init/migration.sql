/*
  Warnings:

  - You are about to drop the column `content` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Document` table. All the data in the column will be lost.
  - Added the required column `agrupacion` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comuna` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `departamento` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `distrito` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dni` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `manzana` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medidaDerecha` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medidaFondo` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medidaFrente` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medidaIzquierda` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombreCompleto` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroConstancia` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `planoVigente` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Document" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
INSERT INTO "new_Document" ("createdAt", "id", "updatedAt", "userId") SELECT "createdAt", "id", "updatedAt", "userId" FROM "Document";
DROP TABLE "Document";
ALTER TABLE "new_Document" RENAME TO "Document";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
