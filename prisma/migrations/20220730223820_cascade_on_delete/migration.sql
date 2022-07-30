-- DropForeignKey
ALTER TABLE "Installment" DROP CONSTRAINT "Installment_purchaseId_fkey";

-- AddForeignKey
ALTER TABLE "Installment" ADD CONSTRAINT "Installment_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchases"("id") ON DELETE CASCADE ON UPDATE CASCADE;
