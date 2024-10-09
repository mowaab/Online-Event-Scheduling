import mongoose from 'mongoose';

const mongoURI = 'mongodb+srv://sharbelkhoury:Sharbelkhoury00@onlineschedulingsystem.p9sfb.mongodb.net/?retryWrites=true&w=majority&appName=OnlineSchedulingSystem'

const connectDB = async () => 
{
    try 
    {
        await mongoose.connect (mongoURI, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
        });
        console.log('Congrats!! you just connected MongoDB');
    } 
    catch(error) 
    {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // stop the server if connection fails 
    }
};

export default connectDB;