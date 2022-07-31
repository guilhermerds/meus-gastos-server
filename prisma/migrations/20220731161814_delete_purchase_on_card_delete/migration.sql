-- DropForeignKey
ALTER TABLE "Purchases" DROP CONSTRAINT "Purchases_cardId_fkey";

-- AddForeignKey
ALTER TABLE "Purchases" ADD CONSTRAINT "Purchases_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;
