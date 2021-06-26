import mongoose from 'mongoose';

const WorkshopSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    venue:{
        type: String,
        required: false,
    },
    date:{
        type: Date,
        required: false,
    },
    description:{
        type: String,
        required: true,
    },
    conductor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    approved_by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    status:{
        type: Boolean,
        required: true,
        default: false
    },
    note:{
        type: String,
        required: false
    },
})

const Workshop = mongoose.model("Workshop", WorkshopSchema);

export default Workshop;