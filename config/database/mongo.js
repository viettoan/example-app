import mongoose from "mongoose";

export const connect = () => {
    mongoose.connect(
        'mongodb://localhost:27017',
        {}
    ).then(
        () => {
            console.log('MongoDB connected');
        }
    );    
};