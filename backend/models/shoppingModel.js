import mongoose from 'mongoose';

const shoppingSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        brand: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

const Shopping = mongoose.model('Shopping', shoppingSchema);
export default Shopping;