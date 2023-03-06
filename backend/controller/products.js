const {connection} = require('../configurationDB/config');
module.exports={
    AddProducts : ((req,res)=>{
        console.log(req.body)
        let query = `INSERT INTO products(product_name,product_quantity,description)VALUES("${req.body.product_name}","${req.body.product_quantity}","${req.body.description}") `
        connection.query(query,(error,result)=>{
            error?res.status(500).send(error) : res.status(200).send("Product Added successfully")
        })
    }),
    GetProducts : ((req,res)=>{
        let query = `SELECT * FROM products`
        connection.query(query,(error, result)=>{
            error? res.status(500).send(error)
            :res.status(200).send(result)
        })
    }),
    UpdateProduct : ((req,res)=>{
        const query =`UPDATE products SET product_name=${req.body.product_name}, product_quantity=${req.body.product_quantity}, description=${req.body.description} WHERE id=${req.params.id}`
        connection.query(query,(error, result)=>{
            error?res.status(500).send(error)
            :res.status(200).send(result)
        })
    }), 
    DeleteProduct : ((req,res)=>{
        const query = `DELETE * FROM products WHERE id=${req.params.id}`
        connection.query(query,(error,result)=>{
            error?res.status(500).send(error)
            :res.status(200).send("Product Deleted")
        })
    })

}