const router = require('express').Router()
const productController = require('../controller/products')
router.post('/api/addproducts',productController.AddProducts)
router.get('/api/GetProducts', productController.GetProducts)
router.patch('/api/updateProduct',productController.UpdateProduct)
router.delete('/api/deleteController',productController.DeleteProduct)

module.exports = {productRouter:router}