-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "productTitle" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productCost" INTEGER NOT NULL,
    "onOffer" BOOLEAN NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
