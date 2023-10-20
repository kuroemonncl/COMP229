const Product = require('../models/Product');

// Function to remove a product by ID
exports.removeProductById = (req, res) => {
    const productId = req.params.id;

    Product.findByIdAndRemove(productId)
        .then((product) => {
            if (!product) {
                return res.status(404).json({ error: 'Product not found.' });
            }
            return res.json({ message: 'Product removed successfully.' });
        })
        .catch((error) => {
            return res.status(500).json({ error: 'An error occurred while removing the product.' });
        });
};

// Function to filter products by name
exports.filterProductsByName = (req, res, next) => {
    const { name } = req.query;
    if (name) {
        Product.find({ name: { $regex: name, $options: 'i' }})
            .then((products) => {
                res.json(products);
            })
            .catch((error) => {
                res.status(500).json({ error: 'An error occurred while fetching products by name.' });
            });
    } else {
        next();
    }
};
