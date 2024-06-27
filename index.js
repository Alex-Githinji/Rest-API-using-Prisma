import Productsrouter from './product.routes.js'
import express from 'express'

const app = express();

app.use(express.json());

app.use("/products", Productsrouter)
app.listen(3002, () => {
    console.log("Server is running on port 3002");
})


const createproducts = async () => {
    const products = await prisma.products.create({
         data: {
             productTitle : "Flavor",
             productThumbnail : "http://image.com/240x100.png/cc0000/fff0ff",
             productDescription : "sapien arcu sed augue aliquam erat volutpat in congue etaiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus",
             productCost : 150,
             onOffer : false
         }
     })
     console.log(products)
 }





























