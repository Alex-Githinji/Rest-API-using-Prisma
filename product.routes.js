import {Router} from 'express';
import { PrismaClient } from '@prisma/client' 
import {config} from 'dotenv'     
const prisma = new PrismaClient()
config();


const router = Router();

router.get("/", async (req,res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(product);
    } catch (e) {
        res.status(500).json({success: false ,message: e.message});

    }
    
})


router.get("/:id", (req,res) => {
    res.send("get a single product")
})


router.post("/", async (req,res) => {
    try {

        const { productThumbnail, productTitle, productDescription , productCost, onOffer} = req.body;
        const product = await prisma.products.create({
            data: {
                productThumbnail,
                productTitle,
                productDescription,
                productCost,
                onOffer
                }
                })
                res.status(201).json(product)
       } catch (e) {
        res.status(500).json({success : false, message: e.message})
       }
    
    
})

router.get("/:id", (req,res) => {
    res.send("updating products")
})

router.get("/:id", (req,res) => {
    res.send("delete a product")
})


export default router
















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