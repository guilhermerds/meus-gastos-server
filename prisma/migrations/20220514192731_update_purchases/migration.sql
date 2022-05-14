/*
  Warnings:

  - You are about to drop the column `limit` on the `Purchases` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Purchases` DROP COLUMN `limit`,
    MODIFY `startDate` VARCHAR(191) NOT NULL;
