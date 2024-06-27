-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "productThumbnail" TEXT NOT NULL,
    "productTitle" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productCost" INTEGER NOT NULL,
    "onOffer" BOOLEAN NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_productThumbnail_key" ON "Products"("productThumbnail");
