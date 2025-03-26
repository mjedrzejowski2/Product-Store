import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true // give createdAt and updatedAt
})

const Product = mongoose.model('Product', productSchema) // Product -->products mongose will take this and make it lower case and make it plural as well

export default Product