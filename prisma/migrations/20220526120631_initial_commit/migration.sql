-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "limit" DOUBLE PRECISION NOT NULL,
    "expirationDay" INTEGER NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchases" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "startDate" TEXT NOT NULL,
    "installmentValue" DOUBLE PRECISION NOT NULL,
    "installmentAmount" INTEGER NOT NULL,
    "cardId" INTEGER NOT NULL,

    CONSTRAINT "Purchases_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Purchases" ADD CONSTRAINT "Purchases_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
