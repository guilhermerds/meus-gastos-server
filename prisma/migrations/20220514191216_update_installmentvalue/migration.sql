/*
  Warnings:

  - You are about to alter the column `installmentValue` on the `Purchases` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Purchases` MODIFY `installmentValue` DOUBLE NOT NULL;
