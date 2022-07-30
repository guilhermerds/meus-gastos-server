/*
  Warnings:

  - You are about to drop the column `installmentAmount` on the `Purchases` table. All the data in the column will be lost.
  - You are about to drop the column `installmentValue` on the `Purchases` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Purchases` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Purchases" DROP COLUMN "installmentAmount",
DROP COLUMN "installmentValue",
DROP COLUMN "startDate";
