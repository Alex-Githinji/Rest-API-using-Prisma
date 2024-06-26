import { PrismaClient } from '@prisma/client' 
import {config} from 'dotenv'     
const prisma = new PrismaClient()
config()

const createproducts = async () => {
   const products = await prisma.products.create({
        data: {
            productTitle : "Flavor",
            productThumbnail : "http://image.com/240x100.png/cc0000/fff0ff",
            productDescription : "sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus",
            productCost : 150,
            onOffer : false
        }
    })
    console.log(products)
}

const createproduct= async () => {
    const products = await prisma.products.createMany({
        data: [
            {
                productTitle : "cassino",
                productThumbnail : "http://image.com/240x100.png/cc0000/fff0",
                productDescription : "sapien arcu sed augue aliquam erat volutpat",
                productCost : 123,
                onOffer : true
                },
                {
                    productTitle : "Flavor-cassino",
                    productThumbnail : "http://image.com/240x100.png/cc0000/fff0",
                    productDescription : "sapien arcu sed augue aliquam erat volutpat",
                    productCost :70,
                    onOffer : false
                    },
                    {
                        productTitle : "wallpaper-dell",
                        productThumbnail : "http://image.com/240x100.png/cc0000/fff0",
                        productDescription : "sapien arcu sed augue aliquam erat volutpat",
                        productCost : 90,
                        onOffer : true
                        }
                    ]
                    })


                    
}
createproducts();
createproduct();