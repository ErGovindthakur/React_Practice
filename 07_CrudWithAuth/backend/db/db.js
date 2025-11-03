import mongoose from "mongoose";

const connectDb = async() => {
     try {
          // eslint-disable-next-line no-undef
          mongoose.connect(`${process.env.MONGO_URI}`);
          
          mongoose.connection.on('connected',()=>{
               console.log("Db connected Successfully");
          })
          mongoose.connection.on("error",(err)=>{
               console.log(`Unable to connect with db -> ${err.message}`)
          })
     } catch (err) {
          console.log(`Db connection Error -> ${err.message}`);
          mongoose.process.exit(1);
     }
}

export default connectDb;