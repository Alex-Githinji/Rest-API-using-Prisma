import { Router } from "express";
import { PrismaClient } from "@prisma/client";
import { config } from "dotenv";
const prisma = new PrismaClient();
config();

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await prisma.products.findMany();
    res.status(200).json(users);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const product = await prisma.products.findFirst({ where: { id: id } });
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      productThumbnail,
      productTitle,
      productDescription,
      productCost,
      onOffer,
    } = req.body;
    const product = await prisma.products.create({
      data: {
        productThumbnail,
        productTitle,
        productDescription,
        productCost,
        onOffer,
      },
    });
    res.status(201).json(product);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

router.patch("/:id", (req, res) => {
  const {
    productThumbnail,
    productTitle,
    productDescription,
    productCost,
    onOffer,
  } = req.body;
  const id = req.params.id;
  try {
    let updateproduct;
    if (productThumbnail) {
      updateproduct = { productThumbnail: productThumbnail };
    }
    if (productTitle) {
      updateproduct = { ...updateproduct, productTitle: productTitle };
    }
    if (productDescription) {
      updateproduct = {
        ...updateproduct,
        productDescription: productDescription,
      };
    }
    if (productCost) {
      updateproduct = { ...updateproduct, productCost: productCost };
    }
    if (onOffer) {
      updateproduct = { ...updateproduct, onOffer: onOffer };
    }
    const product = prisma.products.update({
      where: { id: id },
      data: updateproduct,
    });
    res.status(200).json(product);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id.trim();
  try {
    const deleteproduct = await prisma.products.delete({
      where: { id: id },
      select: {
        id: true,
        productThumbnail: true,
        productTitle: true,
        productDescription: true,
        productCost: true,
        onOffer: true,
      },
    });
    res.status(200).json(deleteproduct);
  } catch (e) {
    res.status(500).json({ success: false, message: e.message });
  }
});

export default router;

// const createproduct= async () => {
//     const products = await prisma.products.createMany({
//         data: [
//             {
//                 productTitle : "cassino",
//                 productThumbnail : "http://image.com/240x100.png/cc0000/fff0",
//                 productDescription : "sapien arcu sed augue aliquam erat volutpat",
//                 productCost : 123,
//                 onOffer : true
//                 },
//                 {
//                     productTitle : "Flavor-cassino",
//                     productThumbnail : "http://image.com/240x100.png/cc0000/fff0",
//                     productDescription : "sapien arcu sed augue aliquam erat volutpat",
//                     productCost :70,
//                     onOffer : false
//                     },
//                     {
//                         productTitle : "wallpaper-dell",
//                         productThumbnail : "http://image.com/240x100.png/cc0000/fff0",
//                         productDescription : "sapien arcu sed augue aliquam erat volutpat",
//                         productCost : 90,
//                         onOffer : true
//                         }
//                     ]
//                     })

// }
