import mongoose from "mongoose";

export const connect = async (uri) => {
  await mongoose.connect(uri);
};
export const disconnect = async () => {
  mongoose.connection.removeAllListeners();
  await mongoose.disconnect();
};
