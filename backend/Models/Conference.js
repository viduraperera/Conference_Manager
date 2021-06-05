import mongoose from 'mongoose';

const ConferenceSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    venue:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    status:{
        type: Boolean,
        required: true,
        default: false
    },
    note:{
        type: String,
        required: false
    }
});

let Conference = mongoose.model("Conference", ConferenceSchema);

export default Conference;