import { Schema, model } from "mongoose";

const AccountSchema = new Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    type: { type: String, enum: ["root", "sub"], default: "root" },
    status: {
      type: String,
      enum: ["new", "active", "inactive", "blocked"],
      default: "new",
    },
    fraudCount: { type: Number, default: 0 },
    createdAd: { type: Date, default: Date.now },
    updated: Date,
  },
  { optimisticConcurrency: true },
);

export default model("account", AccountSchema);
