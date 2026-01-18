import mongoose from "mongoose";

// connect to mongodb database
const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log('Database Connected'));
    await mongoose.connect(`${process.env.MONGO_URI}/WiseUp`)

}
export default connectDB