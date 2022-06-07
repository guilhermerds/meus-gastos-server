/*
  Warnings:

  - The primary key for the `Card` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cardNumber` on the `Card` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Purchases" DROP CONSTRAINT "Purchases_cardId_fkey";

-- AlterTable
ALTER TABLE "Card" DROP CONSTRAINT "Card_pkey",
DROP COLUMN "cardNumber",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Card_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Card_id_seq";

-- AlterTable
ALTER TABLE "Purchases" ALTER COLUMN "cardId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Purchases" ADD CONSTRAINT "Purchases_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
