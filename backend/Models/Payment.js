import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    conference:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Conference",
    },
    amount:{
        type: Number,
        required: true
    }
});

const Payment = mongoose.model("Payment", PaymentSchema);

export default Payment;