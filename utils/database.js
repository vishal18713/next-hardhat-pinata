import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbname: 'noktua',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully!")
    } catch (error) {
        console.log(error)
    }
}

export default connectToDB;