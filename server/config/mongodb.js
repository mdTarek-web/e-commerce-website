import mongoose from 'mongoose';

const dbConnect = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("DB is connected!")
        });
        await mongoose.connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log("MongoDB connection Error", error);
    }
};

export default dbConnect;