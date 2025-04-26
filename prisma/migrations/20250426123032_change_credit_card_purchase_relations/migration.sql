/*
  Warnings:

  - You are about to drop the column `invoiceId` on the `CreditCardPurchase` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "CreditCardPurchase" DROP CONSTRAINT "CreditCardPurchase_invoiceId_fkey";

-- AlterTable
ALTER TABLE "CreditCardPurchase" DROP COLUMN "invoiceId",
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Expense" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Income" ALTER COLUMN "description" DROP NOT NULL;
