/*
  Warnings:

  - Added the required column `productThumbnail` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "productThumbnail" TEXT NOT NULL;
