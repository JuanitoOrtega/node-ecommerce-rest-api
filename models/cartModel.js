const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

var cartSchema = new mongoose.Schema(
    {
        products: [
            {
                product: {
                    type: ObjectId,
                    ref: 'Product',
                },
                count: Number,
                color: String,
                price: Number,
            },
        ],
        cartTotal: Number,
        totalAfterDiscount: Number,
        orderby: {
            type: ObjectId,
            ref: 'User',
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Cart', cartSchema);