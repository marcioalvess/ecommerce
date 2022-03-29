const Product = require ('../../models/Product');

const ProductController = {

    async createProduct(req, res) {

        const bodyData = req.body;
        const { user_id } = req.params;

        try {
            
            const data = {username: user_id, ...bodyData};

            const newProduct = await Product.create(data);
            await newProduct.populate('username').execPopulate();

            return res.status(200).send(newProduct);

        } catch(err) {
           
            return res.status(400).send(err);
        }

    },

    async getUserProducts(req, res) {

        try{ } catch(err){

            return res.status(400).send(err);
        }
    },

    async updateProduct(req, res) {

        try{ } catch(err){

            return res.status(400).send(err);
        }

    },
    async deleteProduct(req, res) {

        try{ } catch(err){

            return res.status(400).send(err);
        }

    },
    async getProducts(req, res) {

        try{ } catch(err){

            return res.status(400).send(err);
        }

    },

    async getProductById(req, res) {

        try{ } catch(err){

            return res.status(400).send(err);
        }

    },


}
module.exports = ProductController;