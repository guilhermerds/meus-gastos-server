/*
  Warnings:

  - Added the required column `month` to the `Installment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Installment" ADD COLUMN     "month" TIMESTAMP(3) NOT NULL;
