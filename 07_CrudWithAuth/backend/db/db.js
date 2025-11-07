import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    // eslint-disable-next-line no-undef
    mongoose.connect(`${process.env.MONGO_URI}`);

    mongoose.connection.on("connected", () => {
      console.log("Db connected Successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log(`Db connection Error ${err.message}`);
    });
  } catch (error) {
    console.log("Db connection Error -> ", error.message);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};
